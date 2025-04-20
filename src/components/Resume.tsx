
import React from 'react';
import { Briefcase, BookOpen, Code, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-12 animate-fade-in">
      <h2 className="section-title">Resume</h2>

      {/* Experience Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Experience</h3>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-semibold">Senior Software Engineer</h4>
            <div className="text-sm text-muted-foreground mb-2">Amazing Company</div>
            <div className="text-xs text-muted-foreground mb-4">January 2022 - Present</div>
            <p className="text-sm">
              Led development of key features and improvements to the company's core product.
              Collaborated with cross-functional teams to design and implement new services.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-semibold">Software Engineer</h4>
            <div className="text-sm text-muted-foreground mb-2">Tech Innovations Inc</div>
            <div className="text-xs text-muted-foreground mb-4">March 2018 - December 2021</div>
            <p className="text-sm">
              Developed and maintained web applications using React and Node.js.
              Implemented CI/CD pipelines and automated testing strategies.
            </p>
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
          <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
          <div className="text-sm text-muted-foreground mb-2">University of Technology</div>
          <div className="text-xs text-muted-foreground mb-4">2014 - 2018</div>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-2">Coursework</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="text-xs">• Data Structures and Algorithms</div>
              <div className="text-xs">• Web Development</div>
              <div className="text-xs">• Database Management</div>
              <div className="text-xs">• Software Engineering</div>
              <div className="text-xs">• Machine Learning</div>
              <div className="text-xs">• Computer Networks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Code className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Skills</h3>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">JavaScript</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">TypeScript</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">React</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">Node.js</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">Python</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">SQL</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">AWS</p>
              </div>
            </div>
            <div className="group">
              <div className="p-3 rounded-lg border border-border bg-background group-hover:border-primary transition-colors">
                <p className="text-sm font-medium text-center">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certifications */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-muted-foreground" size={20} />
          <h3 className="text-xl font-bold">Certifications</h3>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="space-y-4">
            <div className="group flex justify-between items-center p-3 rounded-lg border border-border bg-background hover:border-primary transition-colors">
              <p className="text-sm font-medium">AWS Certified Developer</p>
              <span className="text-xs text-muted-foreground">2022</span>
            </div>
            <div className="group flex justify-between items-center p-3 rounded-lg border border-border bg-background hover:border-primary transition-colors">
              <p className="text-sm font-medium">Certified Scrum Master</p>
              <span className="text-xs text-muted-foreground">2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
