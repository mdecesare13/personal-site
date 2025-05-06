import axios from 'axios';

// Constants for Strava API
const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN;
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
  average_speed: number;
  max_speed: number;
}

export interface MonthlyStats {
  date: string;
  distance: number;
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

// Get activities for the past month
export const getMonthlyActivities = async (): Promise<StravaActivity[]> => {
  try {
    const accessToken = await getAccessToken();
    
    // Calculate date for 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const after = Math.floor(thirtyDaysAgo.getTime() / 1000);
    
    const response = await axios.get(STRAVA_ACTIVITIES_URL, {
      params: {
        after,
        per_page: 100,
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

// Process activities into daily distance totals
export const getMonthlyRunningStats = async (): Promise<MonthlyStats[]> => {
  const activities = await getMonthlyActivities();
  
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

// Client-side function to fetch data from our API route
export const getRunningStats = async (): Promise<MonthlyStats[]> => {
  try {
    const response = await fetch('/api/strava');
    const result = await response.json();
    
    if (result.error) {
      throw new Error(result.error);
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching running stats:', error);
    return [];
  }
}; 