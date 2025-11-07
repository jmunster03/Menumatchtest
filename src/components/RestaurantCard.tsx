import { motion, useMotionValue, useTransform } from 'motion/react';
import { MapPin, DollarSign, Star, Utensils, Leaf, AlertCircle, Clock, Shield } from 'lucide-react';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';

interface MenuItem {
  name: string;
  price: string;
  calories?: number;
  allergens?: string[];
}

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  logo: string;
  rating: number;
  priceLevel: number;
  distance: string;
  description: string;
  menuItems: MenuItem[];
  dietary: {
    vegan: boolean;
    vegetarian: boolean;
    allergenFriendly: boolean;
  };
  sponsored?: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
  onViewLocation: () => void;
}

export function RestaurantCard({ restaurant, onSwipe, isTop, onViewLocation }: RestaurantCardProps) {
  const { currentTheme, isDarkMode } = useTheme();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        zIndex: isTop ? 10 : 1,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ scale: isTop ? 1 : 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative w-full h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-colors duration-300`}>
        {/* Header with Logo */}
        <div className={`relative flex-shrink-0 bg-gradient-to-br ${isDarkMode ? currentTheme.darkCardGradient : currentTheme.cardGradient} p-6`}>
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0">
              <img
                src={restaurant.logo}
                alt={`${restaurant.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className={`truncate ${isDarkMode ? 'text-white' : ''}`}>{restaurant.name}</h2>
                {restaurant.sponsored && (
                  <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 text-xs border-yellow-600 border flex-shrink-0">
                    SPONSORED
                  </Badge>
                )}
              </div>
              <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span>{restaurant.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  {Array.from({ length: restaurant.priceLevel }).map((_, i) => (
                    <DollarSign key={i} className="w-3 h-3" />
                  ))}
                </div>
              </div>
              <div className={`flex items-center gap-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Utensils className="w-3 h-3" />
                <span>{restaurant.cuisine} • {restaurant.distance}</span>
              </div>
            </div>
          </div>
          
          {/* Status Badges */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {restaurant.dietary.vegan && (
              <Badge variant="secondary" className={`${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'} hover:bg-current`}>
                <Leaf className="w-3 h-3 mr-1" />
                Vegan
              </Badge>
            )}
            {restaurant.dietary.vegetarian && !restaurant.dietary.vegan && (
              <Badge variant="secondary" className={`${isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'} hover:bg-current`}>
                <Leaf className="w-3 h-3 mr-1" />
                Vegetarian
              </Badge>
            )}
            {restaurant.dietary.allergenFriendly && (
              <Badge variant="secondary" className={`${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'} hover:bg-current`}>
                <AlertCircle className="w-3 h-3 mr-1" />
                Allergen Info
              </Badge>
            )}
            <Badge variant="secondary" className={`${restaurant.hours.isOpen ? (isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700') : (isDarkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-700')} hover:bg-current`}>
              <Clock className="w-3 h-3 mr-1" />
              {restaurant.hours.isOpen ? 'Open' : 'Closed'}
            </Badge>
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-6">
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{restaurant.description}</p>
            
            {/* Location & Safety */}
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-3 mb-4`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{restaurant.location.neighborhood}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{restaurant.location.safetyRating}/5</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewLocation();
                }}
              >
                <MapPin className="w-3 h-3 mr-1" />
                View Location & Hours
              </Button>
            </div>
            
            {/* Popular Menu Items */}
            <div className={`${isDarkMode ? 'border-gray-700' : 'border-t'} pt-4`}>
              <h3 className={`mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Popular Items</h3>
              <div className="space-y-3">
                {restaurant.menuItems.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item.name}</span>
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{item.price}</span>
                    </div>
                    {(item.calories || item.allergens) && (
                      <div className={`flex items-center gap-3 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.calories && (
                          <span>{item.calories} cal</span>
                        )}
                        {item.allergens && item.allergens.length > 0 && (
                          <span className="flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {item.allergens.join(', ')}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Swipe indicators */}
      <motion.div
        className="absolute top-1/3 left-8 border-[6px] border-green-500 text-green-500 bg-white px-8 py-4 rounded-2xl rotate-[-20deg] shadow-2xl"
        style={{
          opacity: useTransform(x, [0, 100], [0, 1]),
          scale: useTransform(x, [0, 100], [0.8, 1.2]),
        }}
      >
        <span className="text-4xl tracking-wider">LIKE</span>
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-8 border-[6px] border-red-500 text-red-500 bg-white px-8 py-4 rounded-2xl rotate-[20deg] shadow-2xl"
        style={{
          opacity: useTransform(x, [-100, 0], [1, 0]),
          scale: useTransform(x, [-100, 0], [1.2, 0.8]),
        }}
      >
        <span className="text-4xl tracking-wider">NOPE</span>
      </motion.div>
    </motion.div>
  );
}
