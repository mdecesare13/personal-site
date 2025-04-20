
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  
  const sections = [
    { id: '/', label: 'About' },
    { id: '/resume', label: 'Resume' },
    { id: '/projects', label: 'Projects' },
    { id: '/hobbies', label: 'Hobbies' }
  ];

  return (
    <div className="fixed top-[72px] left-0 right-0 bg-background/90 backdrop-blur-sm z-40 py-3 border-b border-border">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-center">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-secondary/50">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                  pathname === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
