
import React from 'react';
import { Running, Music, MessageSquare, ChartLine } from 'lucide-react';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-12 animate-fade-in">
      <h2 className="section-title">Hobbies</h2>
      <p className="mb-8">
        When I'm not coding, here are some of the activities I enjoy.
      </p>
      
      {/* Running Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Running className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Running</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="mb-4">
            I'm an avid runner who participates in various races throughout the year.
          </p>
          
          <h4 className="text-sm font-medium mb-2">Recent Races</h4>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm">NYC Half Marathon</span>
              <span className="text-xs text-muted-foreground">1:45:22</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Boston 10K</span>
              <span className="text-xs text-muted-foreground">42:15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Central Park 5K</span>
              <span className="text-xs text-muted-foreground">19:48</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Monthly Stats</h4>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2">
                <ChartLine className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Garmin API integration coming soon</span>
              </div>
            </div>
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
            Music has always been a huge part of my life. I enjoy a wide range of genres from indie rock to electronic.
          </p>
          
          <h4 className="text-sm font-medium mb-2">Recent Concerts</h4>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm">The National</span>
              <span className="text-xs text-muted-foreground">March 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Bon Iver</span>
              <span className="text-xs text-muted-foreground">January 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">LCD Soundsystem</span>
              <span className="text-xs text-muted-foreground">November 2022</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Top Artists</h4>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Music className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Spotify integration coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leave a Note Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Leave a Note</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="mb-4">
            Have a thought, suggestion, or just want to say hi? Leave me a note!
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded-md border border-border bg-background"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded-md border border-border bg-background"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Recent Notes</h4>
            <p className="text-sm text-muted-foreground text-center py-4">
              No notes yet. Be the first to leave one!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
