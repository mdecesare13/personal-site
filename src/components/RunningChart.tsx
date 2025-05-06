import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartLine } from 'lucide-react';

interface MonthlyStats {
  date: string;
  distance: number;
}

const RunningChart: React.FC = () => {
  const [runningData, setRunningData] = useState<MonthlyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/strava');
        const result = await response.json();
        
        if (result.error) {
          throw new Error(result.error);
        }
        
        // The data is already processed by the API route
        setRunningData(result.data);
        setError(null);
      } catch (err) {
        setError('Failed to load running data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  if (loading) {
    return (
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading running data...</span>
      </div>
    );
  }

  if (error || runningData.length === 0) {
    return (
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <ChartLine className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {error || "No running data available for the past month"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-64 bg-card rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={runningData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatDate} 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            label={{ 
              value: 'Distance (km)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fontSize: 12 }
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value) => [`${value} km`, 'Distance']}
            labelFormatter={(label) => `Date: ${new Date(label).toLocaleDateString()}`}
          />
          <Bar dataKey="distance" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RunningChart; 