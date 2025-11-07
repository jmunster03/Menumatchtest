import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Trophy, Target, Flame, Star, Check, Lock, Circle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import logoImage from 'figma:asset/7a24e14a79f78714a3a479f032002a4172deb07a.png';
import { useTheme } from './ThemeContext';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface Quest {
  id: number;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
  icon: 'trophy' | 'target' | 'flame' | 'star';
}

interface SeasonalQuest {
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  theme: 'autumn' | 'winter' | 'sponsored';
  tasks: {
    id: string;
    text: string;
    completed: boolean;
  }[];
  rewards: {
    id: string;
    name: string;
    type: 'badge' | 'theme';
    icon: string;
    locked: boolean;
  }[];
  sponsored?: boolean;
  sponsorLogo?: string;
}

interface AppSkin {
  id: string;
  name: string;
  color: string;
  gradient: string;
}

interface PurchasableSkin {
  id: string;
  name: string;
  description: string;
  price: string;
  gradient: string;
  icon: string;
  color: string;
}

const quests: Quest[] = [
  {
    id: 1,
    title: "Food Explorer",
    description: "Try 5 different cuisines",
    progress: 2,
    total: 5,
    reward: 50,
    icon: 'trophy'
  },
  {
    id: 2,
    title: "Swipe Master",
    description: "Review 20 restaurants",
    progress: 6,
    total: 20,
    reward: 100,
    icon: 'target'
  },
  {
    id: 3,
    title: "Streak Champion",
    description: "Use the app 7 days in a row",
    progress: 3,
    total: 7,
    reward: 75,
    icon: 'flame'
  },
  {
    id: 4,
    title: "Top Critic",
    description: "Like 10 restaurants",
    progress: 8,
    total: 10,
    reward: 30,
    icon: 'star'
  }
];

const seasonalQuests: SeasonalQuest[] = [
  {
    id: 'chickfila',
    title: 'Eat Mor Chikin',
    subtitle: 'Sponsored Quest:',
    dates: 'Available Now',
    theme: 'sponsored',
    sponsored: true,
    sponsorLogo: '🐄',
    tasks: [
      { id: 'sandwich', text: 'Order a Chick-fil-A sandwich', completed: false },
      { id: 'nuggets', text: 'Try the famous nuggets', completed: false },
      { id: 'breakfast', text: 'Order a breakfast item', completed: false }
    ],
    rewards: [
      { id: 'cfa-badge', name: 'CFA Lover', type: 'badge', icon: '🍗', locked: true },
      { id: 'cfa-coupon', name: 'Free Fries', type: 'badge', icon: '🍟', locked: true }
    ]
  },
  {
    id: 'autumn',
    title: 'Leaves in the Wind',
    subtitle: 'Seasonal Quest:',
    dates: 'September 1 - November 30',
    theme: 'autumn',
    tasks: [
      { id: 'pumpkin', text: 'Order one pumpkin flavored item', completed: true },
      { id: 'apple', text: 'Order one apple flavored item', completed: false },
      { id: 'cafe', text: 'Visit a cafe', completed: true }
    ],
    rewards: [
      { id: 'fall-badge', name: 'Fall 2025', type: 'badge', icon: '🍂', locked: true },
      { id: 'fall-theme', name: 'Fallen Leaves', type: 'theme', icon: '🍁', locked: true }
    ]
  },
  {
    id: 'winter',
    title: 'Breezy Snowfall',
    subtitle: 'Seasonal Quest:',
    dates: 'December 1st - January 31st',
    theme: 'winter',
    tasks: [
      { id: 'hot-soup', text: 'Order one hot soup', completed: true },
      { id: 'hot-drink', text: 'Order one hot drink', completed: false },
      { id: 'shepherds-pie', text: "Order one shepherd's pie", completed: true }
    ],
    rewards: [
      { id: 'winter-badge', name: 'Frosty Bear', type: 'badge', icon: '🧸', locked: true },
      { id: 'winter-theme', name: 'App Theme', type: 'theme', icon: '❄️', locked: true }
    ]
  }
];

interface QuestsSheetProps {
  container?: HTMLElement | null;
  adsRemoved?: boolean;
  onRemoveAds?: () => void;
}

export function QuestsSheet({ container, adsRemoved = false, onRemoveAds }: QuestsSheetProps) {
  const { currentTheme, setTheme, isDarkMode, setIsDarkMode } = useTheme();
  
  const appSkins: AppSkin[] = [
    { id: 'default', name: 'Default', color: 'text-pink-500', gradient: 'from-pink-200 to-orange-200' },
    { id: 'firefly', name: 'Firefly Nights', color: 'text-pink-400', gradient: 'from-pink-200 to-purple-200' },
    { id: 'fallen', name: 'Fallen Leaves', color: 'text-orange-500', gradient: 'from-orange-200 to-red-200' },
    { id: 'winter', name: 'Winter Aurora', color: 'text-cyan-500', gradient: 'from-cyan-200 to-blue-200' },
    { id: 'lantern', name: 'Lantern Lit Sky', color: 'text-amber-500', gradient: 'from-amber-200 to-orange-200' }
  ];

  const purchasableSkins: PurchasableSkin[] = [
    { 
      id: 'city-rain', 
      name: 'City Rain', 
      description: 'Neon lights and rain theme',
      price: '$4.99',
      gradient: 'from-purple-500 via-blue-500 to-cyan-500',
      icon: '🌃',
      color: 'text-cyan-400'
    },
    { 
      id: 'evergreen-peaks', 
      name: 'Evergreen Peaks', 
      description: 'Pine trees and mountains',
      price: '$4.99',
      gradient: 'from-green-600 via-emerald-500 to-teal-600',
      icon: '🏔️',
      color: 'text-green-400'
    },
    { 
      id: 'cookie-monster', 
      name: 'Cookie Monster', 
      description: 'Royal blue with cookies',
      price: '$4.99',
      gradient: 'from-blue-700 via-blue-600 to-indigo-700',
      icon: '🍪',
      color: 'text-blue-400'
    },
    { 
      id: 'solar-flare', 
      name: 'Solar Flare', 
      description: 'Fiery sun theme',
      price: '$4.99',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      icon: '☀️',
      color: 'text-orange-400'
    },
    { 
      id: 'ocean-breeze', 
      name: 'Ocean Breeze', 
      description: 'Water and marine life',
      price: '$4.99',
      gradient: 'from-blue-400 via-teal-400 to-cyan-400',
      icon: '🌊',
      color: 'text-teal-400'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy': return <Trophy className="w-5 h-5" />;
      case 'target': return <Target className="w-5 h-5" />;
      case 'flame': return <Flame className="w-5 h-5" />;
      case 'star': return <Star className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
    }
  };

  const getSeasonalBackground = (theme: 'autumn' | 'winter' | 'sponsored') => {
    // Seasonal quests always use their own theme colors, never the app theme
    if (theme === 'sponsored') {
      return isDarkMode 
        ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-700'
        : 'bg-gradient-to-br from-red-400 via-red-300 to-pink-400';
    }
    if (theme === 'autumn') {
      return isDarkMode
        ? 'bg-gradient-to-br from-orange-600 via-pink-600 to-purple-700'
        : 'bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200';
    }
    return isDarkMode
      ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700'
      : 'bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300';
  };

  const getSeasonalDecorations = (theme: 'autumn' | 'winter' | 'sponsored') => {
    // Seasonal quests always use their own decorations, never the app theme
    if (theme === 'sponsored') {
      return [
        { emoji: '🐄', size: 'text-3xl', opacity: 'opacity-40', position: 'top-right' as const },
        { emoji: '🍗', size: 'text-2xl', opacity: 'opacity-30', position: 'bottom-left' as const },
        { emoji: '🍟', size: 'text-xl', opacity: 'opacity-25', position: 'center-right' as const },
        { emoji: '🥤', size: 'text-lg', opacity: 'opacity-30', position: 'top-left' as const },
      ];
    }
    if (theme === 'autumn') {
      return [
        { emoji: '🍂', size: 'text-3xl', opacity: 'opacity-40', position: 'top-right' as const },
        { emoji: '🍁', size: 'text-2xl', opacity: 'opacity-30', position: 'bottom-left' as const },
        { emoji: '🍂', size: 'text-xl', opacity: 'opacity-25', position: 'center-right' as const },
        { emoji: '🍃', size: 'text-lg', opacity: 'opacity-30', position: 'top-left' as const },
      ];
    }
    return [
      { emoji: '❄️', size: 'text-2xl', opacity: 'opacity-35', position: 'top-right' as const },
      { emoji: '⭐', size: 'text-xl', opacity: 'opacity-25', position: 'bottom-left' as const },
      { emoji: '❄️', size: 'text-lg', opacity: 'opacity-20', position: 'center-right' as const },
      { emoji: '✨', size: 'text-xl', opacity: 'opacity-30', position: 'top-left' as const },
    ];
  };

  const getTitleColor = (theme: 'autumn' | 'winter' | 'sponsored') => {
    // Quest titles always stay the color of the season
    if (theme === 'sponsored') {
      return isDarkMode ? 'text-white' : 'text-red-700';
    }
    if (theme === 'autumn') {
      return isDarkMode ? 'text-orange-200' : 'text-orange-600';
    }
    return isDarkMode ? 'text-blue-200' : 'text-blue-700';
  };

  const getSubtitleColor = (theme?: 'autumn' | 'winter' | 'sponsored') => {
    // Subtitle uses theme-specific colors
    if (theme === 'sponsored') {
      return isDarkMode ? 'text-gray-200' : 'text-gray-700';
    }
    return isDarkMode ? 'text-gray-200' : currentTheme.seasonalQuestColors.subtitleText;
  };

  const getProgressColor = () => {
    // Progress bar uses theme-specific gradient
    return `bg-gradient-to-r ${currentTheme.seasonalQuestColors.progressBar}`;
  };

  const getDecorationPosition = (position: string) => {
    switch (position) {
      case 'top-right': return 'absolute top-2 right-2';
      case 'top-left': return 'absolute top-6 left-6';
      case 'bottom-left': return 'absolute bottom-2 left-2';
      case 'bottom-right': return 'absolute bottom-2 right-2';
      case 'center-right': return 'absolute top-1/2 right-6';
      case 'center-left': return 'absolute top-1/2 left-6';
      default: return 'absolute top-2 right-2';
    }
  };

  const getCompletedTasks = (tasks: SeasonalQuest['tasks']) => {
    return tasks.filter(t => t.completed).length;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Trophy className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="w-full p-0 rounded-t-[2.5rem]" container={container} style={{ height: 'calc(100% - 72px - 100px)' }}>
        <Tabs defaultValue="daily" className="h-full flex flex-col">
          <SheetHeader className="px-4 pt-4 pb-3">
            <div className="mb-3">
              <SheetTitle>Menu Match Quests</SheetTitle>
            </div>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="skins">Skins</TabsTrigger>
            </TabsList>
          </SheetHeader>

          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-4">
              <TabsContent value="daily" className="mt-0 space-y-3 pb-6">
              <SheetDescription>Complete quests to earn points and unlock rewards!</SheetDescription>
              {quests.map((quest) => (
                <div key={quest.id} className={`bg-gradient-to-r ${isDarkMode ? currentTheme.darkCardGradient : currentTheme.cardGradient} rounded-xl p-3 space-y-2`}>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full p-2 ${isDarkMode ? currentTheme.darkColors.primary : currentTheme.colors.primary}`}>
                        {getIcon(quest.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className={isDarkMode ? 'text-white' : 'text-gray-900'}>{quest.title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{quest.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`${isDarkMode ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-700'} text-xs whitespace-nowrap`}>
                      +{quest.reward}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{quest.progress}/{quest.total}</span>
                    </div>
                    <Progress value={(quest.progress / quest.total) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="seasonal" className="mt-0 space-y-4 pb-6">
              {seasonalQuests.map((quest) => {
                const completed = getCompletedTasks(quest.tasks);
                const total = quest.tasks.length;
                const progress = (completed / total) * 100;
                const decorations = getSeasonalDecorations(quest.theme);

                return (
                  <div key={quest.id} className={`${getSeasonalBackground(quest.theme)} rounded-2xl p-4 space-y-3 relative overflow-hidden`}>
                    {/* Decorative elements */}
                    {decorations.map((decoration, index) => (
                      <div 
                        key={index}
                        className={`${getDecorationPosition(decoration.position)} ${decoration.size} ${decoration.opacity}`}
                      >
                        {decoration.emoji}
                      </div>
                    ))}

                    <div className="relative z-10 space-y-3">
                      {/* Header */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-sm">
                            <span className={getSubtitleColor(quest.theme)}>{quest.subtitle}</span>{' '}
                            <span className={getTitleColor(quest.theme)}>{quest.title}</span>
                          </p>
                          {quest.sponsored && (
                            <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 text-xs border-yellow-600 border">
                              SPONSORED
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs mt-1 ${getSubtitleColor(quest.theme)}`}>{quest.dates}</p>
                      </div>

                      {/* Tasks */}
                      <div className={`${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-3 space-y-2`}>
                        {quest.tasks.map((task) => (
                          <div key={task.id} className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                              task.completed 
                                ? 'bg-green-600 border-green-600' 
                                : isDarkMode ? 'border-gray-400 bg-gray-800' : 'border-gray-900 bg-white'
                            }`}>
                              {task.completed && <Check className="w-4 h-4 text-white" />}
                            </div>
                            <span className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                              {task.text}
                            </span>
                          </div>
                        ))}

                        {/* Progress */}
                        <div className="pt-1 w-full">
                          <div className="flex justify-center mb-1">
                            <span className={`text-xs ${getTitleColor(quest.theme)}`}>{completed}/{total}</span>
                          </div>
                          <div className={`relative h-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden border ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>
                            <div 
                              className={`h-full transition-all duration-500 ${getProgressColor()}`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Rewards */}
                      <div className="flex gap-3 justify-center">
                        {quest.rewards.map((reward) => (
                          <div key={reward.id} className={`${isDarkMode ? 'bg-gray-900/90 border-gray-600' : 'bg-white/90 border-gray-900'} backdrop-blur-sm rounded-lg p-3 flex flex-col items-center relative border-2 w-[120px]`}>
                            {reward.locked && (
                              <div className={`absolute top-2 right-2 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-900'} rounded-full p-1 border`}>
                                <Lock className={`w-3 h-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`} />
                              </div>
                            )}
                            <div className={`text-4xl mb-2 ${reward.locked ? 'opacity-40' : ''}`}>
                              {reward.icon}
                            </div>
                            <p className={`text-xs text-center ${getTitleColor(quest.theme)}`}>{reward.name}</p>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{reward.type === 'badge' ? 'Profile Badge' : quest.id === 'chickfila' ? 'Reward' : 'App Theme'}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="badges" className="mt-0 pb-6">
              <SheetDescription className="mb-3">View your collection of earned badges from seasonal quests</SheetDescription>
              
              <div className="space-y-3">
                {/* Earned Badges */}
                <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4`}>
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Earned Badges</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Example earned badge - in a real app, this would be dynamic */}
                    <div className={`bg-gradient-to-br ${isDarkMode ? 'from-green-900/50 to-emerald-800/50 border-green-700' : 'from-green-50 to-emerald-100 border-green-300'} border-2 rounded-lg p-3 flex flex-col items-center`}>
                      <div className="text-3xl mb-1">🏆</div>
                      <p className={`text-xs text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Explorer</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Spring 2025</p>
                    </div>
                  </div>
                </div>

                {/* Upcoming Badges */}
                <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4`}>
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Available in Seasonal Quests</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {seasonalQuests.map((quest) => 
                      quest.rewards
                        .filter(r => r.type === 'badge')
                        .map((badge) => (
                          <div key={badge.id} className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border-2 rounded-lg p-3 flex flex-col items-center relative`}>
                            {badge.locked && (
                              <div className={`absolute top-1 right-1 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-900'} rounded-full p-0.5 border`}>
                                <Lock className={`w-2.5 h-2.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`} />
                              </div>
                            )}
                            <div className={`text-3xl mb-1 ${badge.locked ? 'opacity-40' : ''}`}>
                              {badge.icon}
                            </div>
                            <p className={`text-xs text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{badge.name}</p>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{quest.title}</p>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              </div>

              <div className={`mt-4 bg-gradient-to-r ${isDarkMode ? 'from-purple-900/40 to-pink-900/40' : 'from-purple-50 to-pink-50'} rounded-xl p-3`}>
                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  🎖️ <span>Complete seasonal quest tasks to unlock exclusive badges!</span>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="skins" className="mt-0 pb-6">
              <SheetDescription className="mb-3">Customize your app appearance with seasonal themes</SheetDescription>
              
              {/* Dark Mode Toggle */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4 mb-3`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-300" />
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dark Mode</span>
                  </div>
                  <Switch 
                    checked={isDarkMode}
                    onCheckedChange={setIsDarkMode}
                  />
                </div>
              </div>

              {/* Unlocked App Skins */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4 space-y-3`}>
                <h3 className={isDarkMode ? 'text-white' : 'text-gray-900'}>Unlocked Skins</h3>
                <RadioGroup value={currentTheme.id} onValueChange={setTheme}>
                  {appSkins.map((skin) => (
                    <div key={skin.id} className="flex items-center justify-between py-1.5">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value={skin.id} id={skin.id} />
                        <Label htmlFor={skin.id} className="flex items-center gap-2 cursor-pointer">
                          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${skin.gradient} border-2 border-gray-300`} />
                          <span className={`text-sm ${skin.color}`}>{skin.name}</span>
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Purchasable Skins */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4 space-y-3 mt-3`}>
                <h3 className={isDarkMode ? 'text-white' : 'text-gray-900'}>Premium Skins</h3>
                <div className="space-y-3">
                  {purchasableSkins.map((skin) => (
                    <div key={skin.id} className={`${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} border-2 rounded-xl p-3`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skin.gradient} border-2 border-gray-300 flex items-center justify-center text-2xl flex-shrink-0`}>
                          {skin.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className={`${skin.color}`}>{skin.name}</h4>
                            <Badge variant="secondary" className={`${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'} whitespace-nowrap`}>
                              {skin.price}
                            </Badge>
                          </div>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{skin.description}</p>
                          <Button 
                            size="sm" 
                            className={`w-full ${isDarkMode ? 'bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700' : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600'} text-white`}
                          >
                            Purchase
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ad Removal Option */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 rounded-xl p-4 space-y-3 mt-3`}>
                <h3 className={isDarkMode ? 'text-white' : 'text-gray-900'}>Subscriptions</h3>
                
                {/* Monthly Ad-Free Subscription */}
                <div className={`${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} border-2 rounded-xl p-3`}>
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 border-2 border-gray-300 flex items-center justify-center text-2xl flex-shrink-0">
                      🚫
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-purple-400">Ad-Free Monthly</h4>
                        <Badge variant="secondary" className={`${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'} whitespace-nowrap`}>
                          {'$3.99/mo'}
                        </Badge>
                      </div>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                        {adsRemoved 
                          ? "You're enjoying an ad-free experience! Sponsored quests remain available." 
                          : 'Remove sponsored restaurant cards. Sponsored quests remain available.'}
                      </p>
                      {!adsRemoved && onRemoveAds && (
                        <Button 
                          size="sm" 
                          className={`w-full ${isDarkMode ? 'bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700' : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600'} text-white`}
                          onClick={onRemoveAds}
                        >
                          Subscribe
                        </Button>
                      )}
                      {adsRemoved && (
                        <div className={`flex items-center gap-2 justify-center py-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Active Subscription</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`mt-4 bg-gradient-to-r ${isDarkMode ? 'from-pink-900/40 to-orange-900/40' : 'from-pink-50 to-orange-50'} rounded-xl p-3`}>
                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  💡 <span>Unlock more themes by completing seasonal quests!</span>
                </p>
              </div>
            </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}