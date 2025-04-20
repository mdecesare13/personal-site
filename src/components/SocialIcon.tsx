
import React from 'react';
import { Github, Linkedin, Music, ExternalLink } from 'lucide-react';
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
        return <Github size={size} />;
      case 'linkedin':
        return <Linkedin size={size} />;
      case 'spotify':
        return <Music size={size} />;
      case 'strava':
        return (
          <div className="flex items-center justify-center">
            <ExternalLink size={size} />
          </div>
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
