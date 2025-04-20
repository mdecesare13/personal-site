
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation />
      <main className="container max-w-4xl mx-auto px-4 pt-36 pb-20">
        <Outlet />
      </main>
      <ThemeToggle />
    </div>
  );
};

export default Layout;
