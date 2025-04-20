import { useEffect } from 'react';
import Resume from '../components/Resume';

const ResumePage = () => {
  useEffect(() => {
    document.title = 'Resume - Matt DeCesare';
  }, []);

  return (
    <div className="mt-[-3rem]">
      <Resume />
    </div>
  );
};

export default ResumePage;
