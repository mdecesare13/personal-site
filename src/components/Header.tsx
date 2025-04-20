import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [email] = useState('mdecesare13@gmail.com');
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
          <h1 className="text-lg font-semibold">Matt DeCesare</h1>
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
          <div className="flex items-center gap-3">
            <SocialIcon type="github" url="https://github.com/mdecesare13" />
            <SocialIcon type="linkedin" url="https://www.linkedin.com/in/matthew-decesare-8a31a7153/" />
            <SocialIcon type="spotify" url="https://open.spotify.com/user/31wwekcv25wfm6hjy45bcx2stdc4?si=d0640f9a04004964" />
            <SocialIcon type="strava" url="https://www.strava.com/athletes/103969292" />
            
            <div className="hidden md:flex items-center">
              <span className="mx-2 text-muted-foreground">|</span>
              <div className="flex items-center text-sm text-muted-foreground group hover:text-foreground transition-colors cursor-default">
                <MapPin size={14} className="mr-1 group-hover:text-primary transition-colors" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
