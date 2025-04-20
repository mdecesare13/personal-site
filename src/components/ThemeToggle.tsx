
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ThemeToggle = ({ isDark = false, toggleTheme = () => {} }: ThemeToggleProps) => {
  return (
    <div className="fixed bottom-8 right-8">
      <Switch 
        checked={isDark} 
        onCheckedChange={toggleTheme}
        className="w-[3rem] h-[1.8rem]"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute top-1/2 left-[4px] -translate-y-1/2" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1/2 right-[4px] -translate-y-1/2" />
      </Switch>
    </div>
  );
};

export default ThemeToggle;

