import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Text } from 'recharts';
import { ChartLine } from 'lucide-react';
import { getDailyActivityStats, DailyActivityStats } from '../services/stravaService';
// Import the existing Strava logo
import stravaLogoSrc from '../assets/stravaLogo.svg';

const ActivityChart: React.FC = () => {
  const [activityData, setActivityData] = useState<DailyActivityStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDailyActivityStats();
        setActivityData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load activity data');
        console.error('Error fetching activity data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' });
  };

  // Update the chart styling to use the system font stack
  const chartStyles = {
    fontFamily: 'inherit', // This will inherit from your app's font stack
    fontSize: 12,
    legendFontSize: 10, // Smaller font for legend
    colors: {
      background: '#000000',
      text: '#ffffff',
      grid: '#333333',
      running: '#fc3700', // Bright red-orange
      biking: '#fcce00',  // Yellow
      swimming: '#008ffc', // Blue
      hiking: '#f57067',  // Dark red
    }
  };

  // Add your Strava profile URL here
  const stravaProfileUrl = "https://www.strava.com/athletes/103969292";

  // Custom title component for the chart
  const renderChartTitle = () => {
    return (
      <Text
        x={300}
        y={15}
        textAnchor="middle"
        fill={chartStyles.colors.text}
        style={{ fontSize: 14, fontFamily: chartStyles.fontFamily }}
      >
        Recent Activity (21 Days)
      </Text>
    );
  };

  if (loading) {
    return (
      <div className="h-64 bg-black rounded-lg flex items-center justify-center">
        <span className="text-sm text-gray-400">Loading activity data...</span>
      </div>
    );
  }

  if (error || activityData.length === 0) {
    return (
      <div className="h-64 bg-black rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <ChartLine className="text-gray-400" />
          <span className="text-sm text-gray-400">
            {error || "No activity data available for the past 21 days"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-64 bg-black rounded-lg p-2 relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activityData}
          margin={{ top: 30, right: 30, left: 0, bottom: 25 }} // Increased bottom margin for attribution
          stackOffset="sign"
          style={{ backgroundColor: chartStyles.colors.background }}
        >
          {renderChartTitle()}
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={chartStyles.colors.grid}
            vertical={false}
          />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatDate} 
            tick={{ 
              fontSize: chartStyles.fontSize, 
              fill: chartStyles.colors.text,
              fontFamily: chartStyles.fontFamily 
            }}
            interval={2}
            axisLine={{ stroke: chartStyles.colors.grid }}
            tickLine={{ stroke: chartStyles.colors.grid }}
          />
          <YAxis 
            label={{ 
              value: 'Distance (miles)', 
              angle: -90, 
              position: 'insideLeft',
              offset: 10,
              style: { 
                fontSize: chartStyles.fontSize, 
                fill: chartStyles.colors.text,
                textAnchor: 'middle',
                dy: '50%' // Center vertically
              }
            }}
            tick={{ fontSize: chartStyles.fontSize, fill: chartStyles.colors.text }}
            axisLine={{ stroke: chartStyles.colors.grid }}
            tickLine={{ stroke: chartStyles.colors.grid }}
          />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (!active || !payload || payload.length === 0) return null;
              
              // Filter out zero values
              const filteredPayload = payload.filter(entry => 
                typeof entry.value === 'number' && entry.value > 0
              );
              
              if (filteredPayload.length === 0) return null;
              
              return (
                <div style={{ 
                  backgroundColor: '#222', 
                  border: 'none', 
                  borderRadius: '4px', 
                  padding: '10px',
                  color: chartStyles.colors.text 
                }}>
                  <p style={{ margin: '0 0 5px', fontSize: '12px' }}>
                    Date: {new Date(label).toLocaleDateString()}
                  </p>
                  {filteredPayload.map((entry, index) => {
                    const activityNames = {
                      running: "Run",
                      biking: "Bike",
                      swimming: "Swim",
                      hiking: "Hike"
                    };
                    
                    const activityKey = String(entry.dataKey).toLowerCase();
                    const activityName = activityNames[activityKey] || String(entry.name);
                    
                    return (
                      <p key={index} style={{ 
                        margin: '3px 0', 
                        fontSize: '11px',
                        color: entry.color 
                      }}>
                        {activityName}: {entry.value} miles
                      </p>
                    );
                  })}
                </div>
              );
            }}
          />
          <Legend 
            wrapperStyle={{ 
              color: chartStyles.colors.text,
              fontSize: chartStyles.legendFontSize,
              top: 0,
              right: 0
            }}
            align="right"
            verticalAlign="top"
            iconSize={8}
            formatter={(value) => (
              <span style={{ 
                color: chartStyles.colors.text, 
                fontSize: chartStyles.legendFontSize,
                fontFamily: chartStyles.fontFamily
              }}>
                {value}
              </span>
            )}
          />
          <Bar dataKey="running" name="Running" stackId="a" fill={chartStyles.colors.running} />
          <Bar dataKey="biking" name="Biking" stackId="a" fill={chartStyles.colors.biking} />
          <Bar dataKey="swimming" name="Swimming" stackId="a" fill={chartStyles.colors.swimming} />
          <Bar dataKey="hiking" name="Hiking" stackId="a" fill={chartStyles.colors.hiking} />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Attribution positioned absolutely */}
      <div 
        style={{ 
          position: 'absolute',
          bottom: '8px',
          right: '12px',
          display: 'flex', 
          alignItems: 'center', 
          gap: '5px',
          fontSize: '9px',
          color: '#999',
          fontFamily: chartStyles.fontFamily,
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={() => window.open(stravaProfileUrl, '_blank')}
      >
        <span>Data supplied by</span>
        <img src={stravaLogoSrc} alt="Strava" width="20" height="20" />
      </div>
    </div>
  );
};

export default ActivityChart; 