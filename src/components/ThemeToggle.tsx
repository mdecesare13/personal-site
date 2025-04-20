
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ThemeToggle = ({ isDark = false, toggleTheme = () => {} }: ThemeToggleProps) => {
  return (
    <div className="fixed bottom-8 right-8 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center space-x-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch 
        checked={isDark} 
        onCheckedChange={() => toggleTheme()} 
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default ThemeToggle;
