import React from 'react';
import disneyLogo from '../assets/disneyPlusLogo.svg';
import amexLogo from '../assets/amexLogo.svg';
import whartonLogo from '../assets/whartonLogo.svg';
import stravaLogo from '../assets/stravaLogo.svg';
import spotifyLogo from '../assets/spotifyLogo.svg';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-6 animate-fade-in">
      <h2 className="section-title">What's up, I'm Matt.</h2>
      <p className="text-lg mb-6">
        Take a look around and feel free to shoot me an email if anything catches your eye.
      </p>
      
      <h3 className="text-lg font-medium mb-4">Couple bullets about me:</h3>
      <div className="space-y-2">
        <div className="bullet-point flex items-center gap-1">
          <span>Currently building an internal messaging at Disney.</span>
          <a 
            href="https://privacychoices.thewaltdisneycompany.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="Disney+ Privacy Choices"
          >
            <img 
              src={disneyLogo} 
              alt="Disney+" 
              className="w-4 h-4 object-contain dark:invert dark:brightness-200 dark:hue-rotate-180" 
            />
            <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <div className="bullet-point flex items-center gap-1">
          <span>Started off PMing at Amex, running their messaging systems for push notifications & emails.</span>
          <a 
            href="https://www.americanexpress.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="American Express Website"
          >
            <img 
              src={amexLogo} 
              alt="American Express" 
              className="w-4 h-4 object-contain" 
            />
            <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <div className="bullet-point flex items-center gap-1">
          <span>Wharton 2021 grad, focusing on Data Science.</span>
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-secondary">
            <img 
              src={whartonLogo} 
              alt="Wharton School" 
              className="w-4 h-4 object-contain" 
            />
          </div>
        </div>
        <div className="bullet-point">
          Really excited about the future of the profession given the AI tooling available to us. Outside of work, I'll be sharpening my skills with personal projects, which I can promise you were all built with a PRD and Cursor.
        </div>
        <div className="bullet-point">
          This site included.
        </div>
        <div className="bullet-point flex items-center gap-1">
          <span>Otherwise I am training for the NYC Marathon, listening to music, or watching the 76ers flop.</span>
          <a 
            href="https://www.strava.com/athletes/103969292" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="My Strava Profile"
          >
            <img 
              src={stravaLogo} 
              alt="Strava" 
              className="w-4 h-4 object-contain" 
            />
            <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://open.spotify.com/user/31wwekcv25wfm6hjy45bcx2stdc4?si=d0640f9a04004964" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="My Spotify Profile"
          >
            <img 
              src={spotifyLogo} 
              alt="Spotify" 
              className="w-4 h-4 object-contain" 
            />
            <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;