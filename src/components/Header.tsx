
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [email] = useState('your.email@example.com');
  const { toast } = useToast();
  
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
  };
  
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 py-4 border-b border-border">
      <div className="container max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">John Doe</h1>
          <div className="hidden md:flex items-center text-sm text-muted-foreground">
            <button 
              onClick={copyEmail}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <Mail size={14} className="inline" />
              <span>{email}</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:block">NYC</span>
          
          <div className="flex items-center gap-3">
            <SocialIcon type="github" url="https://github.com" />
            <SocialIcon type="linkedin" url="https://linkedin.com" />
            <SocialIcon type="spotify" url="https://spotify.com" />
            <SocialIcon type="strava" url="https://strava.com" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
