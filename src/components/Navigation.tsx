
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'hobbies', label: 'Hobbies' }
  ];

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 140; // Header height + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-[72px] left-0 right-0 bg-background/90 backdrop-blur-sm z-40 py-3 border-b border-border">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-center md:justify-start">
          <div className="inline-flex gap-2 p-1 rounded-full bg-secondary/50">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={cn(
                  'nav-pill',
                  activeSection === section.id && 'active'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
