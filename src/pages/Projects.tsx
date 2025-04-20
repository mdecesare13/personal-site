import { useEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects - Matt DeCesare';
  }, []);

  return (
    <div className="mt-[-3rem]">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
