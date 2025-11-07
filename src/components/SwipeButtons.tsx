import { X, Heart, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';

interface SwipeButtonsProps {
  onDislike: () => void;
  onLike: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export function SwipeButtons({ onDislike, onLike, onUndo, canUndo }: SwipeButtonsProps) {
  const { currentTheme, isDarkMode } = useTheme();
  
  // Extract primary color for the like button
  const getPrimaryColor = () => {
    const colorClass = isDarkMode ? currentTheme.darkColors.primary : currentTheme.colors.primary;
    // Extract the color name from the class (e.g., 'text-pink-500' -> 'pink')
    const match = colorClass.match(/text-(\w+)-/);
    return match ? match[1] : 'pink';
  };
  
  const primaryColor = getPrimaryColor();
  const activeColors = isDarkMode ? currentTheme.darkColors : currentTheme.colors;
  
  return (
    <div className="flex items-center justify-center gap-6">
      <Button
        size="icon"
        variant="outline"
        className="w-16 h-16 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-600"
        onClick={onDislike}
      >
        <X className="w-8 h-8" />
      </Button>
      
      <Button
        size="icon"
        variant="outline"
        className={`w-12 h-12 rounded-full border-2 border-${primaryColor}-500 ${activeColors.primary} hover:bg-${primaryColor}-50 hover:text-${primaryColor}-600 hover:border-${primaryColor}-600 disabled:opacity-30`}
        onClick={onUndo}
        disabled={!canUndo}
      >
        <RotateCcw className="w-5 h-5" />
      </Button>
      
      <Button
        size="icon"
        variant="outline"
        className={`w-16 h-16 rounded-full border-2 border-${primaryColor}-500 ${activeColors.primary} hover:bg-gradient-to-r ${activeColors.buttonGradient} hover:text-white hover:border-transparent`}
        onClick={onLike}
      >
        <Heart className="w-8 h-8" />
      </Button>
    </div>
  );
}
