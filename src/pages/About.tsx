
import { useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Personal Site';
  }, []);

  return <About />;
};

export default AboutPage;
