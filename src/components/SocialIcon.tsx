import React from 'react';
import spotifyLogo from '../assets/spotifyLogo.svg';
import stravaLogo from '../assets/stravaLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import githubLogo from '../assets/githubLogo.svg';
import { cn } from '@/lib/utils';

type SocialIconProps = {
  type: 'github' | 'linkedin' | 'spotify' | 'strava';
  url: string;
  size?: number;
};

export const SocialIcon: React.FC<SocialIconProps> = ({ type, url, size = 20 }) => {
  const renderIcon = () => {
    switch (type) {
      case 'github':
        return (
          <img 
            src={githubLogo} 
            alt="GitHub" 
            className="w-5 h-5 dark:invert dark:brightness-200" 
          />
        );
      case 'linkedin':
        return (
          <img 
            src={linkedinLogo} 
            alt="LinkedIn" 
            className="w-5 h-5" 
          />
        );
      case 'spotify':
        return (
          <img 
            src={spotifyLogo} 
            alt="Spotify" 
            className="w-5 h-5" 
          />
        );
      case 'strava':
        return (
          <img 
            src={stravaLogo} 
            alt="Strava" 
            className="w-5 h-5" 
          />
        );
      default:
        return null;
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn('social-icon', type)}
    >
      {renderIcon()}
    </a>
  );
};

export default SocialIcon;
