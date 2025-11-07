import { useState, useRef } from 'react';
import { RestaurantCard } from './components/RestaurantCard';
import { SwipeButtons } from './components/SwipeButtons';
import { FiltersSheet } from './components/FiltersSheet';
import { QuestsSheet } from './components/QuestsSheet';
import { SchedulePage } from './components/SchedulePage';
import { LocationSheet } from './components/LocationSheet';
import { Button } from './components/ui/button';
import { Heart, List, ChefHat, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';
import logoImage from 'figma:asset/a86556e1d5e0c830297ad65a6f3ba3aca815142c.png';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import { restaurantsByLocation, sponsoredRestaurants, Restaurant as RestaurantType } from './data/restaurantsByLocation';
import { LoadingAnimation } from './components/LoadingAnimation';

type Restaurant = RestaurantType;

const getInitialRestaurants = (location: string): Restaurant[] => {
  return restaurantsByLocation[location] || restaurantsByLocation['Downtown Lynchburg, VA'];
};

const oldInitialRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Waterstone Pizza",
    cuisine: "Pizza & Italian",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    priceLevel: 2,
    distance: "1.2 mi",
    description: "Wood-fired Neapolitan pizzas and authentic Italian cuisine in downtown Lynchburg. Featuring fresh ingredients and artisanal techniques.",
    menuItems: [
      { name: "Margherita Pizza", price: "$14", calories: 850, allergens: ["Gluten", "Dairy"] },
      { name: "Pepperoni Pizza", price: "$16", calories: 980, allergens: ["Gluten", "Dairy"] },
      { name: "Caprese Salad", price: "$12", calories: 320, allergens: ["Dairy"] },
      { name: "Tiramisu", price: "$8", calories: 450, allergens: ["Gluten", "Dairy", "Eggs"] }
    ],
    dietary: {
      vegan: false,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "9:00 PM",
      isOpen: true
    },
    location: {
      address: "907 Main St, Lynchburg, VA 24504",
      neighborhood: "Downtown",
      safetyRating: 4.5
    }
  },
  {
    id: 2,
    name: "Texas Inn",
    cuisine: "American Diner",
    image: "https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    priceLevel: 1,
    distance: "0.8 mi",
    description: "Historic Lynchburg landmark since 1935. Famous for the Cheesy Western - a local favorite that's been served for generations. Open 24 hours!",
    menuItems: [
      { name: "Cheesy Western", price: "$3.75", calories: 420, allergens: ["Gluten", "Dairy", "Eggs"] },
      { name: "Bowl (chili, beans, onions)", price: "$4.25", calories: 380, allergens: [] },
      { name: "Fried Egg Sandwich", price: "$2.50", calories: 310, allergens: ["Gluten", "Eggs"] },
      { name: "Coffee", price: "$1.50", calories: 5, allergens: [] }
    ],
    dietary: {
      vegan: false,
      vegetarian: false,
      allergenFriendly: true
    },
    hours: {
      open: "24 Hours",
      close: "24 Hours",
      isOpen: true
    },
    location: {
      address: "422 Main St, Lynchburg, VA 24504",
      neighborhood: "Downtown",
      safetyRating: 4.3
    }
  },
  {
    id: 3,
    name: "Shoemaker's American Grille",
    cuisine: "American Fine Dining",
    image: "https://images.unsplash.com/photo-1643101570532-88c8ecc07c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTA2NTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbG9nbyUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYxMDcyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    priceLevel: 3,
    distance: "2.1 mi",
    description: "Upscale American cuisine featuring locally sourced ingredients. Known for excellent steaks and seafood with an extensive wine list.",
    menuItems: [
      { name: "Filet Mignon (8oz)", price: "$42", calories: 580, allergens: [] },
      { name: "Pan-Seared Salmon", price: "$32", calories: 450, allergens: ["Fish"] },
      { name: "Lobster Bisque", price: "$12", calories: 320, allergens: ["Shellfish", "Dairy"] },
      { name: "Chocolate Lava Cake", price: "$10", calories: 520, allergens: ["Gluten", "Dairy", "Eggs"] }
    ],
    dietary: {
      vegan: false,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "5:00 PM",
      close: "10:00 PM",
      isOpen: true
    },
    location: {
      address: "1312 Commerce St, Lynchburg, VA 24504",
      neighborhood: "Rivermont",
      safetyRating: 4.9
    }
  },
  {
    id: 4,
    name: "The White Hart Cafe",
    cuisine: "American Casual",
    image: "https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    priceLevel: 2,
    distance: "1.5 mi",
    description: "Cozy neighborhood cafe with creative sandwiches, salads, and daily specials. Popular brunch spot with vegetarian options.",
    menuItems: [
      { name: "Hart Burger", price: "$14", calories: 720, allergens: ["Gluten", "Dairy"] },
      { name: "Blackened Chicken Sandwich", price: "$13", calories: 650, allergens: ["Gluten"] },
      { name: "Caesar Salad", price: "$11", calories: 380, allergens: ["Dairy", "Fish"] },
      { name: "Sweet Potato Fries", price: "$5", calories: 310, allergens: [] }
    ],
    dietary: {
      vegan: false,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "9:00 PM",
      isOpen: true
    },
    location: {
      address: "1208 Main St, Lynchburg, VA 24504",
      neighborhood: "Downtown",
      safetyRating: 4.4
    }
  },
  {
    id: 5,
    name: "Depot Grille",
    cuisine: "Southern American",
    image: "https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    priceLevel: 2,
    distance: "1.8 mi",
    description: "Southern comfort food with a modern twist. Located in a renovated historic building. Great for lunch and dinner with patio seating.",
    menuItems: [
      { name: "Shrimp & Grits", price: "$18", calories: 680, allergens: ["Shellfish", "Dairy"] },
      { name: "Fried Chicken", price: "$16", calories: 840, allergens: ["Gluten", "Dairy"] },
      { name: "Black Bean Burger", price: "$14", calories: 520, allergens: ["Gluten", "Soy"] },
      { name: "Pecan Pie", price: "$7", calories: 480, allergens: ["Gluten", "Eggs", "Tree Nuts"] }
    ],
    dietary: {
      vegan: false,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "10:00 PM",
      isOpen: true
    },
    location: {
      address: "10 Ninth St, Lynchburg, VA 24504",
      neighborhood: "Depot District",
      safetyRating: 4.6
    }
  },
  {
    id: 6,
    name: "Magnolia Foods",
    cuisine: "Southern Comfort",
    image: "https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    priceLevel: 2,
    distance: "0.9 mi",
    description: "Classic Southern comfort food made from scratch. Family-friendly atmosphere with generous portions and daily specials.",
    menuItems: [
      { name: "Country Fried Steak", price: "$15", calories: 920, allergens: ["Gluten", "Dairy", "Eggs"] },
      { name: "BBQ Pulled Pork", price: "$13", calories: 560, allergens: [] },
      { name: "Mac & Cheese", price: "$8", calories: 420, allergens: ["Gluten", "Dairy"] },
      { name: "Banana Pudding", price: "$6", calories: 380, allergens: ["Gluten", "Dairy", "Eggs"] }
    ],
    dietary: {
      vegan: false,
      vegetarian: false,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "8:00 PM",
      isOpen: true
    },
    location: {
      address: "2476 Rivermont Ave, Lynchburg, VA 24503",
      neighborhood: "Rivermont",
      safetyRating: 4.7
    }
  },
  {
    id: 7,
    name: "Mellow Mushroom",
    cuisine: "Pizza & Pub",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    priceLevel: 2,
    distance: "3.2 mi",
    description: "Eclectic pizzeria with stone-baked pies, craft beers, and a fun atmosphere. Offers vegan cheese and gluten-free crust options.",
    menuItems: [
      { name: "Holy Shiitake Pizza", price: "$18", calories: 890, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Veg Out Pizza (Vegan)", price: "$17", calories: 720, allergens: ["Gluten", "Soy"] },
      { name: "Buffalo Chicken Hoagie", price: "$12", calories: 780, allergens: ["Gluten", "Dairy"] },
      { name: "Brownie Sundae", price: "$8", calories: 620, allergens: ["Gluten", "Dairy", "Eggs", "Tree Nuts"] }
    ],
    dietary: {
      vegan: true,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "10:00 PM",
      isOpen: true
    },
    location: {
      address: "3850 Candlers Mountain Rd, Lynchburg, VA 24502",
      neighborhood: "Candlers Mountain",
      safetyRating: 4.8
    }
  },
  {
    id: 8,
    name: "Giuseppe's Italian Restaurant",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    priceLevel: 2,
    distance: "2.4 mi",
    description: "Family-owned Italian restaurant serving authentic homemade pasta and traditional recipes passed down through generations.",
    menuItems: [
      { name: "Fettuccine Alfredo", price: "$16", calories: 920, allergens: ["Gluten", "Dairy"] },
      { name: "Chicken Parmigiana", price: "$18", calories: 850, allergens: ["Gluten", "Dairy"] },
      { name: "Eggplant Parmigiana", price: "$15", calories: 680, allergens: ["Gluten", "Dairy", "Eggs"] },
      { name: "Cannoli", price: "$7", calories: 380, allergens: ["Gluten", "Dairy"] }
    ],
    dietary: {
      vegan: false,
      vegetarian: true,
      allergenFriendly: true
    },
    hours: {
      open: "11:00 AM",
      close: "9:00 PM",
      isOpen: true
    },
    location: {
      address: "2613 Langhorne Rd, Lynchburg, VA 24501",
      neighborhood: "Boonsboro",
      safetyRating: 4.5
    }
  }
];

function AppContent() {
  const { currentTheme, isDarkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentLocation, setCurrentLocation] = useState('Downtown Lynchburg, VA');
  const [restaurants, setRestaurants] = useState<Restaurant[]>(getInitialRestaurants('Downtown Lynchburg, VA'));
  const [likedRestaurants, setLikedRestaurants] = useState<Restaurant[]>([]);
  const [history, setHistory] = useState<{ restaurant: Restaurant; action: 'left' | 'right' }[]>([]);
  const [showLiked, setShowLiked] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showMapDialog, setShowMapDialog] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    allergenFriendly: false,
    maxDistance: 10,
    maxPrice: 4
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);
  const [swipeCount, setSwipeCount] = useState(0);
  const [adsRemoved, setAdsRemoved] = useState(false);

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
    const newRestaurants = getInitialRestaurants(location);
    setRestaurants(newRestaurants);
    setHistory([]);
    setLikedRestaurants([]);
    setFilters({ vegan: false, vegetarian: false, allergenFriendly: false, maxDistance: 10, maxPrice: 4 });
    setHasActiveFilters(false);
    toast.success(`Showing restaurants in ${location}`);
  };

  const applyFilters = () => {
    // Filter restaurants based on current filter settings
    const initialRestaurants = getInitialRestaurants(currentLocation);
    const filtered = initialRestaurants.filter(restaurant => {
      // Dietary filters - if filter is on, restaurant must support it
      if (filters.vegan && !restaurant.dietary.vegan) return false;
      if (filters.vegetarian && !restaurant.dietary.vegetarian) return false;
      if (filters.allergenFriendly && !restaurant.dietary.allergenFriendly) return false;
      
      // Distance filter - parse distance string (e.g., "1.2 mi")
      const distanceValue = parseFloat(restaurant.distance);
      if (distanceValue > filters.maxDistance) return false;
      
      // Price filter
      if (restaurant.priceLevel > filters.maxPrice) return false;
      
      return true;
    });
    
    setRestaurants(filtered);
    setHistory([]);
    setLikedRestaurants([]);
    setIsFiltersOpen(false);
    
    // Show feedback
    const activeFiltersCount = [
      filters.vegan,
      filters.vegetarian,
      filters.allergenFriendly,
      filters.maxDistance < 10,
      filters.maxPrice < 4
    ].filter(Boolean).length;
    
    setHasActiveFilters(activeFiltersCount > 0);
    
    if (activeFiltersCount > 0) {
      toast.success(`Filters applied! Found ${filtered.length} restaurant${filtered.length !== 1 ? 's' : ''}`);
    }
  };

  const resetFilters = () => {
    setFilters({ vegan: false, vegetarian: false, allergenFriendly: false, maxDistance: 10, maxPrice: 4 });
    const initialRestaurants = getInitialRestaurants(currentLocation);
    setRestaurants(initialRestaurants);
    setHistory([]);
    setLikedRestaurants([]);
    setIsFiltersOpen(false);
    setHasActiveFilters(false);
    toast.info('Filters reset! Showing all restaurants');
  };

  const getFilteredSponsoredAd = (): Restaurant | null => {
    if (adsRemoved) return null;
    
    // Filter sponsored ads based on active dietary filters
    const filtered = sponsoredRestaurants.filter(restaurant => {
      if (filters.vegan && !restaurant.dietary.vegan) return false;
      if (filters.vegetarian && !restaurant.dietary.vegetarian) return false;
      if (filters.allergenFriendly && !restaurant.dietary.allergenFriendly) return false;
      return true;
    });
    
    if (filtered.length === 0) return null;
    
    // Return a random sponsored ad from the filtered list
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (restaurants.length === 0) return;

    const currentRestaurant = restaurants[0];
    
    if (direction === 'right') {
      setLikedRestaurants(prev => [...prev, currentRestaurant]);
    }
    
    setHistory(prev => [...prev, { restaurant: currentRestaurant, action: direction }]);
    setRestaurants(prev => {
      const newRestaurants = prev.slice(1);
      
      // Inject sponsored ad every 3 swipes (not counting sponsored cards)
      if (!currentRestaurant.sponsored) {
        const newSwipeCount = swipeCount + 1;
        setSwipeCount(newSwipeCount);
        
        if (newSwipeCount % 3 === 0) {
          const sponsoredAd = getFilteredSponsoredAd();
          if (sponsoredAd) {
            // Insert the ad at the beginning so it shows next
            return [sponsoredAd, ...newRestaurants];
          }
        }
      }
      
      return newRestaurants;
    });
  };

  const handleUndo = () => {
    if (history.length === 0) return;

    const lastAction = history[history.length - 1];
    
    if (lastAction.action === 'right') {
      setLikedRestaurants(prev => prev.filter(r => r.id !== lastAction.restaurant.id));
    }
    
    setRestaurants(prev => [lastAction.restaurant, ...prev]);
    setHistory(prev => prev.slice(0, -1));
  };

  const resetCards = () => {
    const initialRestaurants = getInitialRestaurants(currentLocation);
    setRestaurants(initialRestaurants);
    setLikedRestaurants([]);
    setHistory([]);
    setShowLiked(false);
  };

  const handleViewLocation = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowMapDialog(true);
  };

  const getDecorationPosition = (position: string) => {
    switch (position) {
      case 'top-right': return 'absolute top-4 right-4';
      case 'top-left': return 'absolute top-4 left-4';
      case 'bottom-left': return 'absolute bottom-4 left-4';
      case 'bottom-right': return 'absolute bottom-4 right-4';
      default: return 'absolute top-4 right-4';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.backgroundGradient || 'from-pink-50 via-white to-orange-50'} flex items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden`}>
      {/* Phone Frame */}
      <div className="relative w-full max-w-[400px] h-[800px] bg-black rounded-[50px] p-3 shadow-2xl z-10">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
        
        {/* Phone Screen */}
        <div ref={containerRef} className={`relative w-full h-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-[40px] overflow-hidden flex flex-col transition-colors duration-300`}>
          {/* Theme Decorations Inside Phone - Only for non-default themes */}
          {currentTheme.id !== 'default' && currentTheme.appDecorations.elements.map((decoration, index) => (
            <div 
              key={index}
              className={`${getDecorationPosition(decoration.position)} ${decoration.size} ${decoration.opacity} ${decoration.animation || ''} pointer-events-none select-none z-0`}
            >
              {decoration.emoji}
            </div>
          ))}
          {/* Show Schedule Page */}
          {showSchedule ? (
            <SchedulePage onBack={() => setShowSchedule(false)} container={containerRef.current} restaurants={getInitialRestaurants(currentLocation)} />
          ) : (
            <>
              {/* Header */}
              <div className={`flex items-center justify-between px-4 py-4 flex-shrink-0 ${isDarkMode ? 'text-white' : ''}`}>
                <div className="flex items-center gap-2">
                  <img src={logoImage} alt="Menu Match" className="w-8 h-8" />
                  <h1 className={`whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Menu Match</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSchedule(true)}
                  >
                    <Calendar className="w-5 h-5" />
                  </Button>
                  <QuestsSheet 
                    container={containerRef.current} 
                    adsRemoved={adsRemoved}
                    onRemoveAds={() => {
                      setAdsRemoved(true);
                      toast.success('Ads removed! Enjoy your ad-free experience.');
                    }}
                  />
                  <FiltersSheet 
                    filters={filters} 
                    onFiltersChange={setFilters} 
                    container={containerRef.current}
                    open={isFiltersOpen}
                    onOpenChange={setIsFiltersOpen}
                    onApplyFilters={applyFilters}
                    onResetFilters={resetFilters}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={() => setShowLiked(!showLiked)}
                  >
                    <Heart className={`w-5 h-5 ${showLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                    {likedRestaurants.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {likedRestaurants.length}
                      </span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Location Bar */}
              <div className={`px-4 pb-3 flex-shrink-0 ${isDarkMode ? 'text-white' : ''}`}>
                <LocationSheet 
                  currentLocation={currentLocation}
                  onLocationChange={handleLocationChange}
                  container={containerRef.current}
                />
              </div>

              {/* Liked Restaurants View */}
              {showLiked ? (
                <div className="flex-1 overflow-auto px-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className={isDarkMode ? 'text-white' : ''}>Your Matches</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowLiked(false)}>
                      <List className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  </div>
                  
                  {likedRestaurants.length === 0 ? (
                    <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Heart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>No matches yet</p>
                      <p className="text-sm">Start swiping to find restaurants you love!</p>
                    </div>
                  ) : (
                    <div className="space-y-3 pb-4">
                      {likedRestaurants.map((restaurant) => (
                        <motion.div
                          key={restaurant.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg cursor-pointer`}
                          onClick={() => handleViewLocation(restaurant)}
                        >
                          <div className="flex gap-4">
                            <img
                              src={restaurant.logo}
                              alt={restaurant.name}
                              className="w-24 h-24 object-cover"
                            />
                            <div className="flex-1 py-3 pr-3">
                              <h3 className={`mb-1 ${isDarkMode ? 'text-white' : ''}`}>{restaurant.name}</h3>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{restaurant.cuisine} • {restaurant.distance}</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{restaurant.location.neighborhood}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* Card Stack */}
                  <div className="relative flex-1 px-4 pb-4">
                    <div className="relative w-full h-full">
                      <AnimatePresence>
                        {restaurants.length === 0 ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-2xl`}
                          >
                            <img src={logoImage} alt="Menu Match" className="w-20 h-20 mb-4 opacity-30" />
                            <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No more restaurants!</p>
                            <p className="text-sm text-gray-400 mb-6">You've seen them all</p>
                            <Button onClick={resetCards} className={`bg-gradient-to-r ${isDarkMode ? currentTheme.darkColors.buttonGradient : currentTheme.colors.buttonGradient} hover:opacity-90`}>
                              Start Over
                            </Button>
                          </motion.div>
                        ) : (
                          <>
                            {restaurants.slice(0, 3).reverse().map((restaurant, index) => (
                              <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                                onSwipe={handleSwipe}
                                isTop={index === restaurants.slice(0, 3).length - 1}
                                onViewLocation={() => handleViewLocation(restaurant)}
                              />
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Swipe Buttons */}
                  {restaurants.length > 0 && (
                    <div className="px-4 pb-6 flex-shrink-0">
                      <SwipeButtons
                        onDislike={() => handleSwipe('left')}
                        onLike={() => handleSwipe('right')}
                        onUndo={handleUndo}
                        canUndo={history.length > 0}
                      />
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Location Dialog */}
      <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{selectedRestaurant?.name}</DialogTitle>
            <DialogDescription>
              View location details, hours, and safety information
            </DialogDescription>
          </DialogHeader>
          {selectedRestaurant && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm">{selectedRestaurant.location.address}</p>
                    <p className="text-sm text-gray-600">{selectedRestaurant.location.neighborhood}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm">Safety Rating:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < Math.floor(selectedRestaurant.location.safetyRating)
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {selectedRestaurant.location.safetyRating}/5
                  </span>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-sm">
                    <span className={selectedRestaurant.hours.isOpen ? 'text-green-600' : 'text-red-600'}>
                      {selectedRestaurant.hours.isOpen ? '● Open' : '● Closed'}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {selectedRestaurant.hours.open} - {selectedRestaurant.hours.close}
                    </span>
                  </p>
                </div>
              </div>
              
              <Button className={`w-full bg-gradient-to-r ${isDarkMode ? currentTheme.darkColors.buttonGradient : currentTheme.colors.buttonGradient} hover:opacity-90 text-white`} onClick={() => setShowMapDialog(false)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="size-full">
      {isLoading && (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[400px] h-[800px] bg-black rounded-[50px] p-3 shadow-2xl">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
            
            {/* Phone Screen with Loading Animation */}
            <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden">
              <LoadingAnimation onComplete={() => setIsLoading(false)} />
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <ThemeProvider>
          <AppContent />
          <Toaster />
        </ThemeProvider>
      )}
    </div>
  );
}