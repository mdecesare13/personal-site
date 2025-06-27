import axios from 'axios';

// Use import.meta.env for Vite environment variables
const STRAVA_CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = import.meta.env.VITE_STRAVA_REFRESH_TOKEN;
const STRAVA_AUTH_URL = 'https://www.strava.com/oauth/token';
const STRAVA_ACTIVITIES_URL = 'https://www.strava.com/api/v3/athlete/activities';

// Types
export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  start_date: string;
  start_date_local: string;
  average_speed: number;
  max_speed: number;
}

export interface MonthlyStats {
  date: string;
  distance: number;
}

export interface WeeklyStats {
  weekStart: string;
  running: number;
  biking: number;
}

export interface MonthlyActivityStats {
  month: string;
  running: number;
  biking: number;
}

export interface DailyActivityStats {
  date: string;
  running: number;
  biking: number;
  swimming: number;
  hiking: number;
}

// Get access token using refresh token
const getAccessToken = async () => {
  try {
    const response = await axios.post(STRAVA_AUTH_URL, {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Strava access token:', error);
    throw error;
  }
};

// Get activities for the past 6 months
export const getActivities = async (): Promise<StravaActivity[]> => {
  try {
    const accessToken = await getAccessToken();
    
    // Calculate date for 6 months ago
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const after = Math.floor(sixMonthsAgo.getTime() / 1000);
    
    // Strava limits to 200 activities per request, so we might need pagination
    // for a 6-month period
    const response = await axios.get(STRAVA_ACTIVITIES_URL, {
      params: {
        after,
        per_page: 200, // Maximum allowed by Strava
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Strava activities:', error);
    return [];
  }
};

// Get activities for the past 21 days
export const getRecentActivities = async (): Promise<StravaActivity[]> => {
  try {
    const accessToken = await getAccessToken();
    
    // Calculate date for 21 days ago
    const twentyOneDaysAgo = new Date();
    twentyOneDaysAgo.setDate(twentyOneDaysAgo.getDate() - 21);
    const after = Math.floor(twentyOneDaysAgo.getTime() / 1000);
    
    const response = await axios.get(STRAVA_ACTIVITIES_URL, {
      params: {
        after,
        per_page: 100, // More than enough for 21 days
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Strava activities:', error);
    return [];
  }
};

// Process activities into daily stats for all activity types
export const getDailyActivityStats = async (): Promise<DailyActivityStats[]> => {
  const activities = await getRecentActivities();
  
  // Group by date and activity type
  const dailyStats: Record<string, { running: number; biking: number; swimming: number; hiking: number }> = {};
  
  // Initialize all days in the past 21 days
  for (let i = 0; i < 21; i++) {
    // Get today's date and subtract i days
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    dailyStats[dateStr] = { running: 0, biking: 0, swimming: 0, hiking: 0 };
  }
  
  // Add activity data
  activities.forEach(activity => {
    // Just take the date portion of start_date_local (YYYY-MM-DD)
    const dateKey = activity.start_date_local.substring(0, 10);
    
    // Skip if the date is not in our 21-day window
    if (!dailyStats[dateKey]) return;
    
    // Convert distance from meters to miles
    const distanceInMiles = activity.distance / 1609.34;
    
    // Add distance to the appropriate activity type
    switch (activity.type) {
      case 'Run':
        dailyStats[dateKey].running += distanceInMiles;
        break;
      case 'Ride':
        dailyStats[dateKey].biking += distanceInMiles;
        break;
      case 'Swim':
        dailyStats[dateKey].swimming += distanceInMiles;
        break;
      case 'Hike':
        dailyStats[dateKey].hiking += distanceInMiles;
        break;
    }
  });
  
  // Convert to array format for Recharts
  return Object.entries(dailyStats).map(([date, stats]) => ({
    date,
    running: parseFloat(stats.running.toFixed(2)),
    biking: parseFloat(stats.biking.toFixed(2)),
    swimming: parseFloat(stats.swimming.toFixed(2)),
    hiking: parseFloat(stats.hiking.toFixed(2)),
  })).sort((a, b) => a.date.localeCompare(b.date));
};

// Process activities into monthly distance totals for running and biking
export const getMonthlyActivityStats = async (): Promise<MonthlyActivityStats[]> => {
  const activities = await getActivities();
  
  // Group by month and activity type
  const monthlyStats: Record<string, { running: number; biking: number }> = {};
  
  activities.forEach(activity => {
    // Get the month (YYYY-MM format)
    const date = new Date(activity.start_date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    // Convert distance from meters to miles
    const distanceInMiles = activity.distance / 1609.34;
    
    // Initialize the month if it doesn't exist
    if (!monthlyStats[monthKey]) {
      monthlyStats[monthKey] = { running: 0, biking: 0 };
    }
    
    // Add distance to the appropriate activity type
    if (activity.type === 'Run') {
      monthlyStats[monthKey].running += distanceInMiles;
    } else if (activity.type === 'Ride') {
      monthlyStats[monthKey].biking += distanceInMiles;
    }
  });
  
  // Convert to array format for Recharts
  return Object.entries(monthlyStats).map(([month, stats]) => ({
    month,
    running: parseFloat(stats.running.toFixed(2)),
    biking: parseFloat(stats.biking.toFixed(2)),
  })).sort((a, b) => a.month.localeCompare(b.month));
};

// Process activities into daily distance totals
export const getMonthlyRunningStats = async (): Promise<MonthlyStats[]> => {
  const activities = await getActivities();
  
  // Filter only running activities
  const runningActivities = activities.filter(activity => activity.type === 'Run');
  
  // Group by date and sum distances
  const dailyStats: Record<string, number> = {};
  
  runningActivities.forEach(activity => {
    const date = activity.start_date.split('T')[0];
    const distanceInKm = activity.distance / 1000;
    
    if (dailyStats[date]) {
      dailyStats[date] += distanceInKm;
    } else {
      dailyStats[date] = distanceInKm;
    }
  });
  
  // Convert to array format for Recharts
  return Object.entries(dailyStats).map(([date, distance]) => ({
    date,
    distance: parseFloat(distance.toFixed(2)),
  })).sort((a, b) => a.date.localeCompare(b.date));
};

// Process activities into weekly distance totals for running and biking
export const getWeeklyActivityStats = async (): Promise<WeeklyStats[]> => {
  const activities = await getActivities();
  
  // Group by week and activity type
  const weeklyStats: Record<string, { running: number; biking: number }> = {};
  
  activities.forEach(activity => {
    // Get the week start date (Sunday)
    const activityDate = new Date(activity.start_date);
    const day = activityDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const diff = activityDate.getDate() - day;
    const weekStart = new Date(activityDate);
    weekStart.setDate(diff);
    weekStart.setHours(0, 0, 0, 0);
    
    const weekKey = weekStart.toISOString().split('T')[0];
    
    // Convert distance from meters to miles
    const distanceInMiles = activity.distance / 1609.34;
    
    // Initialize the week if it doesn't exist
    if (!weeklyStats[weekKey]) {
      weeklyStats[weekKey] = { running: 0, biking: 0 };
    }
    
    // Add distance to the appropriate activity type
    if (activity.type === 'Run') {
      weeklyStats[weekKey].running += distanceInMiles;
    } else if (activity.type === 'Ride') {
      weeklyStats[weekKey].biking += distanceInMiles;
    }
  });
  
  // Convert to array format for Recharts
  return Object.entries(weeklyStats).map(([weekStart, stats]) => ({
    weekStart,
    running: parseFloat(stats.running.toFixed(2)),
    biking: parseFloat(stats.biking.toFixed(2)),
  })).sort((a, b) => a.weekStart.localeCompare(b.weekStart));
};