import { useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Matt DeCesare';
  }, []);

  return (
    <div className="mt-[-3rem]">
      <About />
    </div>
  );
};

export default AboutPage;
