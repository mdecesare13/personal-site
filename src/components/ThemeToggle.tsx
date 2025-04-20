
import { Sun, Moon } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ThemeToggleProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ThemeToggle = ({ isDark = false, toggleTheme = () => {} }: ThemeToggleProps) => {
  return (
    <div className="fixed bottom-8 right-8 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
      <RadioGroup defaultValue={isDark ? "dark" : "light"} onValueChange={() => toggleTheme()}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="light" />
          <Label htmlFor="light" className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Light
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="dark" />
          <Label htmlFor="dark" className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ThemeToggle;
