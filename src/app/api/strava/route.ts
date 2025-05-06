import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    // Get access token using environment variables
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    });
    
    const accessToken = response.data.access_token;
    
    // Use the access token to fetch activities
    const activitiesResponse = await axios.get(
      'https://www.strava.com/api/v3/athlete/activities',
      {
        params: {
          after: Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000),
          per_page: 100,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    // Process the data - filter running activities and group by date
    const activities = activitiesResponse.data;
    const runningActivities = activities.filter(activity => activity.type === 'Run');
    
    // Group by date and sum distances
    const dailyStats = {};
    
    runningActivities.forEach(activity => {
      const date = activity.start_date.split('T')[0];
      const distanceInKm = activity.distance / 1000;
      
      if (dailyStats[date]) {
        dailyStats[date] += distanceInKm;
      } else {
        dailyStats[date] = distanceInKm;
      }
    });
    
    // Convert to array format for the chart
    const processedData = Object.entries(dailyStats).map(([date, distance]) => ({
      date,
      distance: parseFloat(Number(distance).toFixed(2)),
    })).sort((a, b) => a.date.localeCompare(b.date));
    
    return NextResponse.json({ data: processedData });
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
} 