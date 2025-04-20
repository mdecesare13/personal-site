
import { useEffect } from 'react';
import Hobbies from '../components/Hobbies';

const HobbiesPage = () => {
  useEffect(() => {
    document.title = 'Hobbies - Personal Site';
  }, []);

  return <Hobbies />;
};

export default HobbiesPage;
