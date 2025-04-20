import { useEffect } from 'react';
import Hobbies from '../components/Hobbies';

const HobbiesPage = () => {
  useEffect(() => {
    document.title = 'Hobbies - Matt DeCesare';
  }, []);

  return (
    <div className="mt-[-3rem]">
      <Hobbies />
    </div>
  );
};

export default HobbiesPage;
