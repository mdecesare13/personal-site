import { useEffect } from 'react';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';

const Index = () => {
  useEffect(() => {
    document.title = 'Matt DeCesare';
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-4xl mx-auto px-4 pt-24 pb-20">
        <About />
        <Resume />
        <Projects />
        <Hobbies />
      </main>
    </div>
  );
};

export default Index;

