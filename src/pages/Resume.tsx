
import { useEffect } from 'react';
import Resume from '../components/Resume';

const ResumePage = () => {
  useEffect(() => {
    document.title = 'Resume - Personal Site';
  }, []);

  return <Resume />;
};

export default ResumePage;
