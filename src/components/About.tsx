
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 animate-fade-in">
      <h2 className="section-title">Hello!</h2>
      <p className="text-lg mb-6">
        I'm John Doe and you're currently exploring my tiny corner of the internet. 
        I use this space to project my ideas and showcase my work.
      </p>
      
      <h3 className="text-lg font-medium mb-4">Summary</h3>
      <div className="space-y-2">
        <div className="bullet-point">
          Currently I'm a Software Engineer at Amazing Company
        </div>
        <div className="bullet-point">
          Previously I was developing applications at Tech Innovations Inc
        </div>
        <div className="bullet-point">
          I've worked on multiple projects across various domains since 2018
        </div>
        <div className="bullet-point">
          28 years old, based in New York City
        </div>
        <div className="bullet-point">
          I built several open-source tools with over 1000+ stars on GitHub
        </div>
        <div className="bullet-point">
          I write about technology, productivity, and personal development
        </div>
      </div>
    </section>
  );
};

export default About;
