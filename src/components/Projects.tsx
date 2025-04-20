
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 animate-fade-in">
      <h2 className="section-title">Projects</h2>
      <p className="mb-8">
        A curated collection of my work, experiments, and open-source projects across various domains and technologies.
      </p>
      
      <div className="space-y-8">
        {/* Project 1 */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-2">Popcorn</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A modern movie recommendation app that suggests films based on your mood and preferences.
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Built with:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">React</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">TypeScript</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">TMDB API</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">TailwindCSS</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-2">Dianes Italian Water Ices</h3>
          <p className="text-sm text-muted-foreground mb-4">
            SEO optimization and website redesign for a local Italian ice business.
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Built with:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Next.js</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">SEO</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Google Analytics</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Social Media Integration</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <ExternalLink size={16} />
              <span>Website</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <ExternalLink size={16} />
              <span>Social Media</span>
            </a>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-2">Sports Betting Analytics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A college project that analyzes sports betting data to identify trends and generate predictions.
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Built with:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Python</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Pandas</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Machine Learning</span>
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">Data Visualization</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="text-sm text-muted-foreground">
          I'm building these projects with modern tools like Cursor AI to streamline development and focus on creating value.
        </p>
      </div>
    </section>
  );
};

export default Projects;
