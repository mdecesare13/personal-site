import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import popcornLogo from '../assets/popcornLogo.svg';
import dianesLogo from '../assets/dianesLogo.svg';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-6 animate-fade-in">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <a 
            href="https://popcorn-sand.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full hover:opacity-95 transition-opacity"
          >
            <div className="aspect-[16/9] bg-background flex items-center justify-center p-6 border-b border-border">
              <img 
                src={popcornLogo} 
                alt="Popcorn App" 
                className="w-full h-full object-contain" 
              />
            </div>
          </a>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">Popcorn</h3>
              <div className="flex gap-2">
                <a 
                  href="https://github.com/mdecesare13/popcorn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://popcorn-sand.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              A modern movie recommendation app that suggests films based on your mood and preferences.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">AWS Lambda</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">AWS DynamoDB</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">AWS API Gateway</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">AWS ElastiCache</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">OpenAI</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Databricks</span>
            </div>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <a 
            href="https://www.dianeswaterice.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full hover:opacity-95 transition-opacity"
          >
            <div className="aspect-[16/9] bg-background flex items-center justify-center p-6 border-b border-border">
              <img 
                src={dianesLogo} 
                alt="Dianes Italian Water Ices" 
                className="w-full h-full object-contain" 
              />
            </div>
          </a>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">Dianes Italian Water Ices</h3>
              <div className="flex gap-2">
                <a 
                  href="https://www.dianeswaterice.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  aria-label="Website"
                >
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="https://www.instagram.com/dianeswatericenj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              SEO optimization and website redesign for a local Italian ice business.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Squarespace</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">SEO</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Google Analytics</span>
              <span className="px-2 py-1 bg-secondary/20 text-xs rounded-full">Social Media</span>
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5">
            <div className="mb-3">
              <h3 className="text-xl font-bold">Daily Fantasy Sports Optimizer</h3>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Collaborated with my brother to develop an optimization algorithm that generates optimal lineups for FanDuel's daily fantasy sports contests, maximizing potential returns based on player statistics and matchup data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
