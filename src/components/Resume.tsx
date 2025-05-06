import React from 'react';
import { Briefcase, BookOpen, Code, FileText, Github } from 'lucide-react';

// Import logos
import disneyLogo from '../assets/disneyPlusLogo.svg';
import amexLogo from '../assets/amexLogo.svg';
import databricksLogo from '../assets/databricksLogo.svg';
import whartonLogo from '../assets/whartonLogo.svg';
import popcornLogo from '../assets/popcornLogo.svg';
// import safeLogo from '../assets/safeLogo.svg'; // Uncomment when you have this logo

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-6 animate-fade-in">
      <h2 className="section-title">Resume</h2>

      {/* Experience Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Experience</h3>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-background flex items-center justify-center p-1">
                <img 
                  src={disneyLogo} 
                  alt="Disney Streaming" 
                  className="w-full h-full object-contain dark:invert dark:brightness-200 dark:hue-rotate-180" 
                />
              </div>
              <div>
                <h4 className="font-semibold">Sr. Product Manager, Messaging Systems</h4>
                <div className="text-sm text-muted-foreground mb-2">Disney Streaming</div>
                <div className="text-xs text-muted-foreground mb-4">August 2024 - Present</div>
                <p className="text-sm">
                  Implementing ML-driven personalization for Disney+ marketing communications to enhance message relevance and customer engagement. Led build of an internal CRM platform, allowing us to migrate off of third parties and saving Disney $3.6M annually on third party contracts. 
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-background flex items-center justify-center p-1">
                <img 
                  src={disneyLogo} 
                  alt="Disney Streaming" 
                  className="w-full h-full object-contain dark:invert dark:brightness-200 dark:hue-rotate-180" 
                />
              </div>
              <div>
                <h4 className="font-semibold">Product Manager II, Messaging Systems</h4>
                <div className="text-sm text-muted-foreground mb-2">Disney Streaming</div>
                <div className="text-xs text-muted-foreground mb-4">August 2022 – July 2024</div>
                <p className="text-sm">
                  Directed a team of 30+ engineers responsible for delivering over 2B annual notifications across Disney's streaming platforms. Implemented a sign-up abandonment messaging strategy that successfully recovers 40,000 incomplete registrations per year, generating $8M+ in additional annual revenue through targeted, timely communications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-background flex items-center justify-center p-1">
                <img 
                  src={amexLogo} 
                  alt="American Express" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h4 className="font-semibold">Associate Product Manager, Push & SMS Enterprise Communications</h4>
                <div className="text-sm text-muted-foreground mb-2">American Express</div>
                <div className="text-xs text-muted-foreground mb-4">August 2021 – August 2022</div>
                <p className="text-sm">
                  Managed a $15M SMS budget while modernizing American Express's communications platform. Implemented travel notification improvements that reduced call center volume by 10% and oversaw the delivery of 500M+ annual communications across 30+ markets, ensuring consistent message delivery and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Github className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Personal Project</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-background flex items-center justify-center p-1">
              <img 
                src={popcornLogo} 
                alt="Popcorn App" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h4 className="font-semibold">Popcorn Movie Selection App</h4>
              <div className="text-xs text-muted-foreground mb-4">October 2024 - Present</div>
              <p className="text-sm mb-4">
                Developing a collaborative movie selection application that streamlines group decision-making through a structured voting system enhanced by AI recommendations. The platform features real-time group lobbies and multi-phase preference collection to efficiently resolve the common challenge of group entertainment selection.
              </p>
              
              <div className="mt-4">
                <h5 className="text-sm font-medium mb-2">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">AWS Lambda</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">DynamoDB</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">API Gateway</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">ElastiCache</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Databricks</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">OpenAI</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Node.js</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Education</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-background flex items-center justify-center p-1">
              <img 
                src={whartonLogo} 
                alt="Wharton School" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h4 className="font-semibold">The Wharton School, University of Pennsylvania</h4>
              <div className="text-sm text-muted-foreground mb-2">Bachelor of Science in Economics, Concentration in Statistics</div>
              <div className="text-xs text-muted-foreground mb-4">Class of 2021</div>
              <p className="text-sm">
                Graduated with honors from Wharton with a focus on statistical analysis and data science applications. Member of the Beta Gamma Sigma Honor Society, recognizing academic excellence in business studies. Completed rigorous coursework in data science, behavioral economics, and statistical analysis while serving as president of the Penn Sports Analytics Group.
              </p>
              
              <div className="mt-4">
                <h5 className="text-sm font-medium mb-2">Notable Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Modern Data Mining</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Statistical Computing with R</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Programming Languages</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Sports Analytics</span>
                  <span className="px-2 py-1 bg-secondary text-xs rounded-md">Big Data Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Code className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Technical Skills</h3>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="text-sm mb-6">
            Proficient in multiple programming languages including SQL, R, Python, and HTML/CSS for web development. Experienced with data platforms such as Snowflake and Databricks, visualization tools for data analysis, and a comprehensive suite of product management applications to facilitate efficient workflow management and stakeholder communication.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-medium mb-3">Languages</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">SQL</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">R</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">HTML/CSS</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Python</span>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-3">Data Tools</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Snowflake</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Databricks</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Tableau</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">OpenSearch</span>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-3">Product Tools</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Jira</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Figma</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Miro</span>
                <span className="px-3 py-1.5 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm">Braze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certifications */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Certifications</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="space-y-4">
            <div className="group flex items-center p-3 rounded-lg border border-border bg-background hover:border-primary transition-colors">
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center">
                <img 
                  src={databricksLogo} 
                  alt="Databricks" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <p className="text-sm font-medium flex-grow">Databricks Certified Data Analyst Associate</p>
              <span className="text-xs text-muted-foreground">July 2024</span>
            </div>
            <div className="group flex items-center p-3 rounded-lg border border-border bg-background hover:border-primary transition-colors">
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center">
                {/* Replace with actual logo once you have it */}
                <div className="w-8 h-8 bg-[#006FCF] rounded-full flex items-center justify-center text-white font-bold text-xs">SAFe</div>
              </div>
              <p className="text-sm font-medium flex-grow">Certified SAFe® 5 Product Owner/Product Manager</p>
              <span className="text-xs text-muted-foreground">December 2021 (Not Renewed)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
