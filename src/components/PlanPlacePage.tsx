import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ArrowLeft, ThumbsUp, MapPin, Clock, Utensils, DollarSign, Leaf, Filter, ChevronRight, Star, X, Dices, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Friend {
  id: number;
  name: string;
  initials: string;
  color: string;
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
  dietary: {
    vegan: boolean;
    vegetarian: boolean;
    allergenFriendly: boolean;
  };
  hours: {
    open: string;
    close: string;
    isOpen: boolean;
  };
  location: {
    address: string;
    neighborhood: string;
    safetyRating: number;
  };
}

interface RestaurantVote {
  restaurantId: number;
  votes: number[];
}

interface PlaceFilters {
  genre: string[];
  time: string[];
  location: string[];
  price: number[];
  dietary: string[];
}

const friends: Friend[] = [
  { id: 1, name: 'Alex Kim', initials: 'AK', color: 'bg-blue-500' },
  { id: 2, name: 'Sarah Lee', initials: 'SL', color: 'bg-purple-500' },
  { id: 3, name: 'Mike Chen', initials: 'MC', color: 'bg-green-500' },
  { id: 4, name: 'Emma Wilson', initials: 'EW', color: 'bg-pink-500' },
];

const currentUserId = 0; // Representing "You"

const filterOptions = {
  genre: [
    'Pizza & Italian',
    'American Diner',
    'American Fine Dining',
    'American Casual',
    'Southern American',
    'Southern Comfort',
    'Pizza & Pub',
    'Italian',
  ],
  time: [
    'Breakfast (7-10 AM)',
    'Lunch (11 AM-2 PM)',
    'Dinner (5-9 PM)',
    'Late Night (9 PM-12 AM)',
  ],
  location: [
    'Downtown',
    'Rivermont',
    'Boonsboro',
    'Candlers Mountain',
    'Depot District',
  ],
  price: [1, 2, 3, 4],
  dietary: [
    'Vegan',
    'Vegetarian',
    'Gluten-Free',
  ],
};

interface PlanPlacePageProps {
  onBack: () => void;
  restaurants: Restaurant[];
}

export function PlanPlacePage({ onBack, restaurants: allRestaurants }: PlanPlacePageProps) {
  const [step, setStep] = useState<'filters' | 'voting' | 'diceRoll'>('filters');
  const [filters, setFilters] = useState<PlaceFilters>({
    genre: [],
    time: [],
    location: [],
    price: [],
    dietary: [],
  });
  const [restaurantVotes, setRestaurantVotes] = useState<RestaurantVote[]>([]);
  const [diceRollPicks, setDiceRollPicks] = useState<Record<number, number>>({});
  const [diceWinner, setDiceWinner] = useState<Restaurant | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const toggleFilter = (category: keyof PlaceFilters, value: string | number) => {
    setFilters(prev => {
      const currentValues = prev[category] as any[];
      const exists = currentValues.includes(value);
      
      return {
        ...prev,
        [category]: exists
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
  };

  const getFilteredRestaurants = (): Restaurant[] => {
    return allRestaurants.filter(restaurant => {
      // Genre filter
      if (filters.genre.length > 0 && !filters.genre.includes(restaurant.cuisine)) {
        return false;
      }

      // Location filter
      if (filters.location.length > 0 && !filters.location.includes(restaurant.location.neighborhood)) {
        return false;
      }

      // Price filter
      if (filters.price.length > 0 && !filters.price.includes(restaurant.priceLevel)) {
        return false;
      }

      // Dietary filter
      if (filters.dietary.length > 0) {
        const hasVegan = filters.dietary.includes('Vegan');
        const hasVegetarian = filters.dietary.includes('Vegetarian');
        const hasGlutenFree = filters.dietary.includes('Gluten-Free');

        if (hasVegan && !restaurant.dietary.vegan) return false;
        if (hasVegetarian && !restaurant.dietary.vegetarian) return false;
        if (hasGlutenFree && !restaurant.dietary.allergenFriendly) return false;
      }

      return true;
    });
  };

  const toggleRestaurantVote = (restaurantId: number, userId: number) => {
    setRestaurantVotes(prev => {
      const existingVote = prev.find(v => v.restaurantId === restaurantId);
      
      if (existingVote) {
        return prev.map(v =>
          v.restaurantId === restaurantId
            ? {
                ...v,
                votes: v.votes.includes(userId)
                  ? v.votes.filter(id => id !== userId)
                  : [...v.votes, userId]
              }
            : v
        );
      } else {
        return [...prev, { restaurantId, votes: [userId] }];
      }
    });
  };

  const getRestaurantVotes = (restaurantId: number): number[] => {
    const vote = restaurantVotes.find(v => v.restaurantId === restaurantId);
    return vote ? vote.votes : [];
  };

  const getTopRestaurant = () => {
    const filtered = getFilteredRestaurants();
    if (filtered.length === 0) return null;

    const sorted = filtered
      .map(r => ({
        restaurant: r,
        voteCount: getRestaurantVotes(r.id).length
      }))
      .sort((a, b) => b.voteCount - a.voteCount);

    return sorted[0].voteCount > 0 ? sorted[0] : null;
  };

  const proceedToVoting = () => {
    const filtered = getFilteredRestaurants();
    if (filtered.length > 0) {
      setStep('voting');
    }
  };

  const getPriceDisplay = (level: number) => {
    return '$'.repeat(level);
  };

  const hasActiveFilters = () => {
    return filters.genre.length > 0 ||
           filters.time.length > 0 ||
           filters.location.length > 0 ||
           filters.price.length > 0 ||
           filters.dietary.length > 0;
  };

  const toggleDiceRollPick = (userId: number, restaurantId: number) => {
    setDiceRollPicks(prev => {
      const currentPick = prev[userId];
      if (currentPick === restaurantId) {
        const newPicks = { ...prev };
        delete newPicks[userId];
        return newPicks;
      }
      return { ...prev, [userId]: restaurantId };
    });
  };

  const rollTheDice = () => {
    const picks = Object.values(diceRollPicks);
    if (picks.length === 0) return;

    setIsRolling(true);
    setDiceWinner(null);

    // Animate the rolling
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * picks.length);
      const winningRestaurantId = picks[randomIndex];
      const winner = allRestaurants.find(r => r.id === winningRestaurantId);
      setDiceWinner(winner || null);
      setIsRolling(false);
    }, 2000);
  };

  const filteredRestaurants = getFilteredRestaurants();
  const topRestaurant = getTopRestaurant();

  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-50 via-white to-orange-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 flex-shrink-0 border-b bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              if (step === 'voting' || step === 'diceRoll') {
                setStep('filters');
                setDiceWinner(null);
              } else {
                onBack();
              }
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          {step === 'filters' && <Filter className="w-5 h-5 text-orange-500" />}
          {step === 'voting' && <ThumbsUp className="w-5 h-5 text-orange-500" />}
          {step === 'diceRoll' && <Dices className="w-5 h-5 text-orange-500" />}
          <h2 className="text-gray-900">
            {step === 'filters' ? 'Set Filters' : step === 'voting' ? 'Vote for Restaurant' : 'Roll the Dice'}
          </h2>
        </div>
        {step === 'filters' && hasActiveFilters() && (
          <Badge className="bg-orange-500 text-white">
            {filteredRestaurants.length} match{filteredRestaurants.length !== 1 ? 'es' : ''}
          </Badge>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2 pb-8">
          {step === 'filters' ? (
            <>
              {/* Vote Button */}
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 h-10"
                onClick={() => setStep('voting')}
              >
                <ThumbsUp className="w-5 h-5 mr-2" />
                VOTE on Restaurants
              </Button>

              {/* Roll the Dice Button */}
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 h-10"
                onClick={() => setStep('diceRoll')}
              >
                <Dices className="w-5 h-5 mr-2" />
                Roll the Dice
              </Button>

              {/* Genre Filter */}
              <Card className="p-2 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Utensils className="w-3.5 h-3.5 text-orange-500" />
                  <h3 className="text-xs">Food Genre</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {filterOptions.genre.map((genre) => {
                    const isSelected = filters.genre.includes(genre);
                    return (
                      <Button
                        key={genre}
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        className={`h-6 text-[10px] px-1.5 ${isSelected ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}`}
                        onClick={() => toggleFilter('genre', genre)}
                      >
                        {genre}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Time Filter */}
              <Card className="p-2 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  <h3 className="text-xs">Time</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {filterOptions.time.map((time) => {
                    const isSelected = filters.time.includes(time);
                    return (
                      <Button
                        key={time}
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        className={`h-6 text-[10px] px-1.5 ${isSelected ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}`}
                        onClick={() => toggleFilter('time', time)}
                      >
                        {time}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Location Filter */}
              <Card className="p-2 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <h3 className="text-xs">Location</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {filterOptions.location.map((location) => {
                    const isSelected = filters.location.includes(location);
                    return (
                      <Button
                        key={location}
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        className={`h-6 text-[10px] px-1.5 ${isSelected ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}`}
                        onClick={() => toggleFilter('location', location)}
                      >
                        {location}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Price Filter */}
              <Card className="p-2 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-orange-500" />
                  <h3 className="text-xs">Price Range</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {filterOptions.price.map((price) => {
                    const isSelected = filters.price.includes(price);
                    return (
                      <Button
                        key={price}
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        className={`h-6 text-[10px] px-2 ${isSelected ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}`}
                        onClick={() => toggleFilter('price', price)}
                      >
                        {getPriceDisplay(price)}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Dietary Filter */}
              <Card className="p-2 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Leaf className="w-3.5 h-3.5 text-orange-500" />
                  <h3 className="text-xs">Dietary Preferences</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {filterOptions.dietary.map((dietary) => {
                    const isSelected = filters.dietary.includes(dietary);
                    return (
                      <Button
                        key={dietary}
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        className={`h-6 text-[10px] px-1.5 ${isSelected ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}`}
                        onClick={() => toggleFilter('dietary', dietary)}
                      >
                        {dietary}
                      </Button>
                    );
                  })}
                </div>
              </Card>

              {/* Filter Results Summary */}
              {hasActiveFilters() && (
                <Card className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm text-white">Filter Results</h3>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs bg-white text-orange-500 hover:bg-white/90"
                      onClick={() => setFilters({
                        genre: [],
                        time: [],
                        location: [],
                        price: [],
                        dietary: [],
                      })}
                    >
                      <X className="w-3 h-3 mr-1" />
                      Clear All
                    </Button>
                  </div>
                  <p className="text-xs opacity-90 mb-2">
                    {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} match your filters
                  </p>
                  {filteredRestaurants.length > 0 ? (
                    <>
                      <div className="space-y-1.5 mb-3">
                        {filteredRestaurants.slice(0, 3).map((restaurant) => (
                          <div key={restaurant.id} className="text-xs flex items-center justify-between bg-white/10 rounded px-2 py-1">
                            <span>{restaurant.name}</span>
                            <span className="text-xs opacity-75">{restaurant.cuisine}</span>
                          </div>
                        ))}
                        {filteredRestaurants.length > 3 && (
                          <p className="text-xs opacity-75 text-center pt-1">
                            +{filteredRestaurants.length - 3} more
                          </p>
                        )}
                      </div>
                      <Button
                        className="w-full h-8 text-xs bg-white text-orange-500 hover:bg-white/90"
                        onClick={proceedToVoting}
                      >
                        Proceed to Vote
                        <ChevronRight className="w-3 h-3 ml-2" />
                      </Button>
                    </>
                  ) : (
                    <p className="text-xs opacity-75">
                      Try adjusting your filters to find more options
                    </p>
                  )}
                </Card>
              )}

              {!hasActiveFilters() && (
                <Card className="p-3 bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
                  <p className="text-xs text-gray-600 text-center">
                    Select filters above to narrow down restaurant options
                  </p>
                </Card>
              )}
            </>
          ) : step === 'voting' ? (
            <>
              {/* Voting View */}
              <Card className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 mb-1">Vote for Your Favorite</p>
                    <p className="text-gray-600">
                      {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} match your filters. Vote with your group!
                    </p>
                  </div>
                </div>
              </Card>

              {/* Restaurant Voting List */}
              <div className="space-y-3">
                {filteredRestaurants.map((restaurant) => {
                  const votes = getRestaurantVotes(restaurant.id);
                  const userVoted = votes.includes(currentUserId);
                  const votePercentage = ((votes.length / (friends.length + 1)) * 100).toFixed(0);
                  const isTopChoice = topRestaurant?.restaurant.id === restaurant.id;

                  return (
                    <Card key={restaurant.id} className={`p-4 bg-white/80 backdrop-blur-sm ${isTopChoice && votes.length > 0 ? 'border-2 border-orange-500' : ''}`}>
                      <div className="flex gap-3 mb-3">
                        <img
                          src={restaurant.logo}
                          alt={restaurant.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div>
                              <h3 className="text-gray-900">{restaurant.name}</h3>
                              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                            </div>
                            {isTopChoice && votes.length > 0 && (
                              <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                                Top Choice
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{restaurant.rating}</span>
                            </div>
                            <span>•</span>
                            <span>{getPriceDisplay(restaurant.priceLevel)}</span>
                            <span>•</span>
                            <span>{restaurant.location.neighborhood}</span>
                          </div>
                        </div>
                      </div>

                      {/* Vote Progress Bar */}
                      {votes.length > 0 && (
                        <div className="mb-3">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all"
                              style={{ width: `${votePercentage}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Vote Info and Button */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {votes.length} vote{votes.length !== 1 ? 's' : ''}
                          </span>
                          {votes.length > 0 && (
                            <div className="flex -space-x-2">
                              {votes.map((voterId) => {
                                if (voterId === currentUserId) {
                                  return (
                                    <Avatar key={voterId} className="w-6 h-6 border-2 border-white">
                                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs">
                                        You
                                      </AvatarFallback>
                                    </Avatar>
                                  );
                                }
                                const friend = friends.find(f => f.id === voterId);
                                if (!friend) return null;
                                return (
                                  <Avatar key={voterId} className="w-6 h-6 border-2 border-white">
                                    <AvatarFallback className={`${friend.color} text-white text-xs`}>
                                      {friend.initials}
                                    </AvatarFallback>
                                  </Avatar>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant={userVoted ? "default" : "outline"}
                          className={userVoted ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" : ""}
                          onClick={() => toggleRestaurantVote(restaurant.id, currentUserId)}
                        >
                          <ThumbsUp className={`w-4 h-4 ${userVoted ? 'fill-current' : ''}`} />
                        </Button>
                      </div>

                      {/* Simulate friend votes */}
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">Simulate friend votes:</p>
                        <div className="flex flex-wrap gap-2">
                          {friends.map(friend => {
                            const friendVoted = votes.includes(friend.id);
                            return (
                              <Button
                                key={friend.id}
                                size="sm"
                                variant={friendVoted ? "default" : "outline"}
                                className={friendVoted ? `${friend.color} text-white hover:opacity-90` : ""}
                                onClick={() => toggleRestaurantVote(restaurant.id, friend.id)}
                              >
                                <Avatar className="w-4 h-4 mr-1">
                                  <AvatarFallback className={`${friend.color} text-white text-xs`}>
                                    {friend.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs">{friend.name}</span>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Voting Summary */}
              {topRestaurant && topRestaurant.voteCount > 0 && (
                <Card className="p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <h3 className="mb-3 text-white">Group Winner</h3>
                  <div className="flex items-center gap-3">
                    <img
                      src={topRestaurant.restaurant.logo}
                      alt={topRestaurant.restaurant.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{topRestaurant.restaurant.name}</p>
                      <p className="text-sm opacity-90">{topRestaurant.voteCount} vote{topRestaurant.voteCount !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                </Card>
              )}
            </>
          ) : step === 'diceRoll' ? (
            <>
              {/* Roll Button - Top */}
              {!diceWinner && (
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 h-14 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={rollTheDice}
                  disabled={Object.keys(diceRollPicks).length === 0 || isRolling}
                >
                  <Dices className="w-6 h-6 mr-2" />
                  {Object.keys(diceRollPicks).length === 0 
                    ? 'Pick Restaurants Below First'
                    : isRolling 
                    ? 'Rolling...'
                    : `Roll the Dice! (${Object.keys(diceRollPicks).length} pick${Object.keys(diceRollPicks).length !== 1 ? 's' : ''})`
                  }
                </Button>
              )}

              {/* Dice Roll Info */}
              {!diceWinner && !isRolling && (
                <Card className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                  <div className="flex items-start gap-2">
                    <Dices className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600">
                      Each person picks their favorite restaurant, then press the button above to randomly select one!
                    </p>
                  </div>
                </Card>
              )}

              {/* Winner Display */}
              <AnimatePresence>
                {diceWinner && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    <Card className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: 3 }}
                      >
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute"
                            initial={{ 
                              top: '50%', 
                              left: '50%',
                              scale: 0
                            }}
                            animate={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              scale: [0, 1, 0],
                            }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                          >
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <div className="relative z-10">
                        <h3 className="mb-3 text-white text-center">🎉 Winner! 🎉</h3>
                        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                          <img
                            src={diceWinner.logo}
                            alt={diceWinner.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-lg">{diceWinner.name}</p>
                            <p className="text-sm opacity-90">{diceWinner.cuisine}</p>
                            <div className="flex items-center gap-2 text-sm mt-1">
                              <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                              <span>{diceWinner.rating}</span>
                              <span>•</span>
                              <span>{getPriceDisplay(diceWinner.priceLevel)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Rolling Animation */}
              {isRolling && (
                <motion.div
                  className="flex justify-center py-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                >
                  <Dices className="w-16 h-16 text-purple-500" />
                </motion.div>
              )}

              {/* Group Member Selections */}
              <div className="space-y-3">
                {/* Current User */}
                <Card className="p-3 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs">
                        You
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-sm">Your Pick</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {allRestaurants.map((restaurant) => {
                      const isSelected = diceRollPicks[currentUserId] === restaurant.id;
                      return (
                        <Button
                          key={restaurant.id}
                          variant={isSelected ? "default" : "outline"}
                          className={`h-auto p-2 flex-col items-start ${isSelected ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" : ""}`}
                          onClick={() => toggleDiceRollPick(currentUserId, restaurant.id)}
                        >
                          <span className="text-xs font-medium">{restaurant.name}</span>
                          <span className="text-xs opacity-75">{restaurant.cuisine}</span>
                        </Button>
                      );
                    })}
                  </div>
                </Card>

                {/* Friends */}
                {friends.map((friend) => (
                  <Card key={friend.id} className="p-3 bg-white/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className={`${friend.color} text-white text-xs`}>
                          {friend.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-sm">{friend.name}'s Pick</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {allRestaurants.map((restaurant) => {
                        const isSelected = diceRollPicks[friend.id] === restaurant.id;
                        return (
                          <Button
                            key={restaurant.id}
                            variant={isSelected ? "default" : "outline"}
                            className={`h-auto p-2 flex-col items-start ${isSelected ? `${friend.color} text-white hover:opacity-90` : ""}`}
                            onClick={() => toggleDiceRollPick(friend.id, restaurant.id)}
                          >
                            <span className="text-xs font-medium">{restaurant.name}</span>
                            <span className="text-xs opacity-75">{restaurant.cuisine}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Reset Button */}
              {diceWinner && (
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setDiceWinner(null);
                    setDiceRollPicks({});
                  }}
                >
                  Roll Again
                </Button>
              )}
            </>
          ) : null}
        </div>
      </ScrollArea>
    </div>
  );
}