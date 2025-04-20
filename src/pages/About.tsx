
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About - Personal Site';
  }, []);

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="space-y-4">
        <p className="bullet-point">
          Software Engineer with a passion for building intuitive and efficient applications
        </p>
        <p className="bullet-point">
          Currently based in New York City, working on innovative web solutions
        </p>
        <p className="bullet-point">
          Focused on React, TypeScript, and modern web technologies
        </p>
      </div>
    </section>
  );
};

export default About;
