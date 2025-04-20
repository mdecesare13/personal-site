
import { useEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects - Personal Site';
  }, []);

  return <Projects />;
};

export default ProjectsPage;
