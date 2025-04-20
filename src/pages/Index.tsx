
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);
  
  // Check for system preference on load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  
  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'projects', 'hobbies'];
      const currentPosition = window.scrollY + 150; // Offset for header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const topPos = top + window.scrollY;
          const bottomPos = bottom + window.scrollY;
          
          if (currentPosition >= topPos && currentPosition < bottomPos) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container max-w-4xl mx-auto px-4 pt-36 pb-20">
        <About />
        <Resume />
        <Projects />
        <Hobbies />
      </main>
    </div>
  );
};

export default Index;
