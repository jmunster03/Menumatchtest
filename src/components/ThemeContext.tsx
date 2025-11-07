import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface AppTheme {
  id: string;
  name: string;
  displayName: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    cardBg: string;
    progressBar: string;
    buttonGradient: string;
  };
  darkColors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    cardBg: string;
    progressBar: string;
    buttonGradient: string;
  };
  questBackground: string;
  questDecorations: {
    elements: Array<{
      emoji: string;
      size: string;
      opacity: string;
      position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-right' | 'center-left';
    }>;
  };
  appDecorations: {
    elements: Array<{
      emoji: string;
      size: string;
      opacity: string;
      position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
      animation?: string;
    }>;
  };
  cardGradient: string;
  darkCardGradient: string;
  headerGradient?: string;
  backgroundGradient?: string;
  seasonalQuestColors: {
    progressBar: string;
    subtitleText: string;
  };
}

export const themes: Record<string, AppTheme> = {
  default: {
    id: 'default',
    name: 'default',
    displayName: 'Default',
    colors: {
      primary: 'text-pink-500',
      secondary: 'text-orange-500',
      accent: 'text-purple-500',
      text: 'text-gray-900',
      cardBg: 'bg-gradient-to-r from-pink-50 to-orange-50',
      progressBar: 'from-pink-500 to-orange-500',
      buttonGradient: 'from-orange-500 to-pink-500',
    },
    darkColors: {
      primary: 'text-pink-400',
      secondary: 'text-orange-400',
      accent: 'text-purple-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-pink-900/40 to-orange-900/40',
      progressBar: 'from-pink-500 to-orange-500',
      buttonGradient: 'from-orange-500 to-pink-500',
    },
    questBackground: 'bg-white/80',
    questDecorations: { elements: [] },
    appDecorations: { elements: [] },
    cardGradient: 'from-pink-50 to-orange-50',
    darkCardGradient: 'from-pink-900/40 to-orange-900/40',
    backgroundGradient: 'from-pink-50 via-white to-orange-50',
    seasonalQuestColors: {
      progressBar: 'from-green-500 to-emerald-500',
      subtitleText: 'text-gray-900',
    },
  },
  firefly: {
    id: 'firefly',
    name: 'firefly',
    displayName: 'Firefly Nights',
    colors: {
      primary: 'text-pink-400',
      secondary: 'text-purple-400',
      accent: 'text-fuchsia-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-pink-200 to-purple-200',
      progressBar: 'from-pink-400 to-purple-500',
      buttonGradient: 'from-pink-500 to-purple-500',
    },
    darkColors: {
      primary: 'text-pink-400',
      secondary: 'text-purple-400',
      accent: 'text-fuchsia-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-pink-600/50 to-purple-600/50',
      progressBar: 'from-pink-500 to-purple-600',
      buttonGradient: 'from-pink-600 to-purple-600',
    },
    questBackground: 'bg-gradient-to-br from-purple-300 via-pink-200 to-fuchsia-300',
    questDecorations: {
      elements: [
        { emoji: '✨', size: 'text-2xl', opacity: 'opacity-60', position: 'top-right' },
        { emoji: '🌟', size: 'text-xl', opacity: 'opacity-50', position: 'bottom-left' },
        { emoji: '✨', size: 'text-lg', opacity: 'opacity-40', position: 'center-right' },
        { emoji: '💫', size: 'text-xl', opacity: 'opacity-45', position: 'top-left' },
      ],
    },
    appDecorations: {
      elements: [
        { emoji: '✨', size: 'text-3xl', opacity: 'opacity-20', position: 'top-right', animation: 'animate-pulse' },
        { emoji: '💫', size: 'text-2xl', opacity: 'opacity-15', position: 'bottom-left', animation: 'animate-pulse' },
        { emoji: '🌟', size: 'text-2xl', opacity: 'opacity-10', position: 'bottom-right' },
      ],
    },
    cardGradient: 'from-pink-200 to-purple-200',
    darkCardGradient: 'from-pink-600/50 to-purple-600/50',
    backgroundGradient: 'from-purple-100 via-pink-50 to-fuchsia-100',
    seasonalQuestColors: {
      progressBar: 'from-purple-500 to-pink-500',
      subtitleText: 'text-purple-600',
    },
  },
  fallen: {
    id: 'fallen',
    name: 'fallen',
    displayName: 'Fallen Leaves',
    colors: {
      primary: 'text-orange-500',
      secondary: 'text-red-500',
      accent: 'text-amber-600',
      text: 'text-gray-900',
      cardBg: 'bg-gradient-to-r from-orange-200 to-red-200',
      progressBar: 'from-orange-500 to-red-500',
      buttonGradient: 'from-orange-500 to-red-500',
    },
    darkColors: {
      primary: 'text-orange-400',
      secondary: 'text-red-400',
      accent: 'text-amber-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-orange-600/50 to-red-600/50',
      progressBar: 'from-orange-500 to-red-600',
      buttonGradient: 'from-orange-600 to-red-600',
    },
    questBackground: 'bg-gradient-to-br from-orange-200 via-amber-100 to-red-200',
    questDecorations: {
      elements: [
        { emoji: '🍂', size: 'text-3xl', opacity: 'opacity-40', position: 'top-right' },
        { emoji: '🍁', size: 'text-2xl', opacity: 'opacity-35', position: 'bottom-left' },
        { emoji: '🍂', size: 'text-xl', opacity: 'opacity-30', position: 'center-right' },
        { emoji: '🍃', size: 'text-lg', opacity: 'opacity-25', position: 'top-left' },
      ],
    },
    appDecorations: {
      elements: [
        { emoji: '🍂', size: 'text-4xl', opacity: 'opacity-15', position: 'top-right' },
        { emoji: '🍁', size: 'text-3xl', opacity: 'opacity-12', position: 'bottom-left' },
        { emoji: '🍃', size: 'text-3xl', opacity: 'opacity-10', position: 'top-left' },
      ],
    },
    cardGradient: 'from-orange-200 to-red-200',
    darkCardGradient: 'from-orange-600/50 to-red-600/50',
    backgroundGradient: 'from-orange-100 via-amber-50 to-red-100',
    seasonalQuestColors: {
      progressBar: 'from-orange-500 to-red-600',
      subtitleText: 'text-orange-700',
    },
  },
  winter: {
    id: 'winter',
    name: 'winter',
    displayName: 'Winter Aurora',
    colors: {
      primary: 'text-cyan-400',
      secondary: 'text-blue-400',
      accent: 'text-indigo-400',
      text: 'text-gray-900',
      cardBg: 'bg-gradient-to-r from-cyan-200 to-blue-200',
      progressBar: 'from-cyan-400 to-blue-500',
      buttonGradient: 'from-cyan-500 to-blue-500',
    },
    darkColors: {
      primary: 'text-cyan-400',
      secondary: 'text-blue-400',
      accent: 'text-indigo-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-cyan-600/50 to-blue-600/50',
      progressBar: 'from-cyan-500 to-blue-600',
      buttonGradient: 'from-cyan-600 to-blue-600',
    },
    questBackground: 'bg-gradient-to-br from-cyan-200 via-blue-100 to-indigo-200',
    questDecorations: {
      elements: [
        { emoji: '❄️', size: 'text-3xl', opacity: 'opacity-40', position: 'top-right' },
        { emoji: '⭐', size: 'text-2xl', opacity: 'opacity-35', position: 'bottom-left' },
        { emoji: '❄️', size: 'text-xl', opacity: 'opacity-30', position: 'center-right' },
        { emoji: '✨', size: 'text-lg', opacity: 'opacity-40', position: 'top-left' },
      ],
    },
    appDecorations: {
      elements: [
        { emoji: '❄️', size: 'text-4xl', opacity: 'opacity-20', position: 'top-right' },
        { emoji: '❄️', size: 'text-3xl', opacity: 'opacity-15', position: 'bottom-left' },
        { emoji: '⭐', size: 'text-2xl', opacity: 'opacity-12', position: 'bottom-right' },
      ],
    },
    cardGradient: 'from-cyan-200 to-blue-200',
    darkCardGradient: 'from-cyan-600/50 to-blue-600/50',
    backgroundGradient: 'from-cyan-100 via-blue-50 to-indigo-100',
    seasonalQuestColors: {
      progressBar: 'from-cyan-500 to-blue-600',
      subtitleText: 'text-cyan-700',
    },
  },
  lantern: {
    id: 'lantern',
    name: 'lantern',
    displayName: 'Lantern Lit Sky',
    colors: {
      primary: 'text-amber-500',
      secondary: 'text-orange-500',
      accent: 'text-yellow-500',
      text: 'text-gray-900',
      cardBg: 'bg-gradient-to-r from-amber-200 to-orange-200',
      progressBar: 'from-purple-500 to-orange-500',
      buttonGradient: 'from-amber-500 to-orange-500',
    },
    darkColors: {
      primary: 'text-amber-400',
      secondary: 'text-orange-400',
      accent: 'text-yellow-400',
      text: 'text-gray-100',
      cardBg: 'bg-gradient-to-r from-amber-600/50 to-orange-600/50',
      progressBar: 'from-purple-600 to-orange-600',
      buttonGradient: 'from-amber-600 to-orange-600',
    },
    questBackground: 'bg-gradient-to-br from-purple-200 via-pink-100 to-orange-200',
    questDecorations: {
      elements: [
        { emoji: '🏮', size: 'text-4xl', opacity: 'opacity-50', position: 'top-right' },
        { emoji: '🏮', size: 'text-3xl', opacity: 'opacity-40', position: 'bottom-left' },
        { emoji: '🏮', size: 'text-2xl', opacity: 'opacity-35', position: 'center-right' },
        { emoji: '🌙', size: 'text-2xl', opacity: 'opacity-30', position: 'top-left' },
        { emoji: '✨', size: 'text-lg', opacity: 'opacity-35', position: 'center-left' },
      ],
    },
    appDecorations: {
      elements: [
        { emoji: '🏮', size: 'text-4xl', opacity: 'opacity-18', position: 'top-right' },
        { emoji: '🏮', size: 'text-3xl', opacity: 'opacity-14', position: 'bottom-left' },
        { emoji: '🌙', size: 'text-3xl', opacity: 'opacity-12', position: 'top-left' },
      ],
    },
    cardGradient: 'from-amber-200 to-orange-200',
    darkCardGradient: 'from-amber-600/50 to-orange-600/50',
    backgroundGradient: 'from-purple-100 via-pink-50 to-orange-100',
    seasonalQuestColors: {
      progressBar: 'from-amber-500 to-orange-600',
      subtitleText: 'text-amber-700',
    },
  },
};

interface ThemeContextType {
  currentTheme: AppTheme;
  setTheme: (themeId: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeThemeId, setActiveThemeId] = useState<string>('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = themes[activeThemeId] || themes.default;

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: setActiveThemeId,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
