import React from 'react';
import { Activity, Music, MessageSquare, ChartLine } from 'lucide-react';
import ActivityChart from './ActivityChart.tsx';
import ArtistTable from './ArtistTable';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-6 animate-fade-in">
      <h2 className="section-title">Hobbies</h2>      
      {/* Running Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Runs & Rides</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="mb-4">
            I do a lot of running and biking.
          </p>
          
          <h4 className="text-sm font-medium mb-2">Recent Races</h4>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm">NYRR Brooklyn RUN 5k, May 2025</span>
              <span className="text-xs text-muted-foreground">25:29</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">NYRR Retro 4 Miler, April 2025</span>
              <span className="text-xs text-muted-foreground">33:03</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">St. Michael's Running Festival Half Marathon, May 2024</span>
              <span className="text-xs text-muted-foreground">2:04</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">NYC Runs Brooklyn Half Marathon, April 2023</span>
              <span className="text-xs text-muted-foreground">1:57</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">NYC Runs Haunted Island 10k, October 2022</span>
              <span className="text-xs text-muted-foreground">49:20</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
            <ActivityChart />
          </div>
        </div>
      </div>
      
      {/* Music Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Music className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Music</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="mb-4">
            I'm a big hip hop fan. I try to capitalize on being in NYC to see artists live when I can.
          </p>
          <div>
            <h4 className="text-sm font-medium mb-2">My Top Artists</h4>
            <ArtistTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
