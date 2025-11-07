import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { MapPin, Search, Navigation, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

interface LocationSheetProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
  container?: HTMLElement | null;
}

const popularLocations = [
  // Virginia
  { name: 'Downtown Lynchburg, VA', restaurants: 8, region: 'Virginia - Central' },
  { name: 'Forest, VA', restaurants: 2, region: 'Virginia - Central' },
  { name: 'Downtown Richmond, VA', restaurants: 4, region: 'Virginia - Central' },
  { name: 'Glen Allen, VA', restaurants: 3, region: 'Virginia - Central' },
  { name: 'Midlothian, VA', restaurants: 2, region: 'Virginia - Central' },
  { name: 'The Corner - Charlottesville, VA', restaurants: 3, region: 'Virginia - Central' },
  { name: 'Downtown Roanoke, VA', restaurants: 2, region: 'Virginia - Southwest' },
  { name: 'Hollins, VA', restaurants: 1, region: 'Virginia - Southwest' },
  { name: 'Ballston - Arlington, VA', restaurants: 2, region: 'Virginia - Northern' },
  { name: 'Clarendon - Arlington, VA', restaurants: 1, region: 'Virginia - Northern' },
  { name: 'Oceanfront - Virginia Beach, VA', restaurants: 2, region: 'Virginia - Coastal' },
  
  // California
  { name: 'Santa Monica, CA', restaurants: 2, region: 'California - Los Angeles' },
  { name: 'North Beach - San Francisco, CA', restaurants: 2, region: 'California - Bay Area' },
  
  // New York
  { name: 'SoHo - New York, NY', restaurants: 2, region: 'New York - Manhattan' },
  { name: 'Williamsburg - Brooklyn, NY', restaurants: 1, region: 'New York - Brooklyn' },
  
  // Texas
  { name: 'Downtown Austin, TX', restaurants: 2, region: 'Texas - Central' },
  { name: 'Deep Ellum - Dallas, TX', restaurants: 1, region: 'Texas - North' },
  
  // Florida
  { name: 'South Beach - Miami, FL', restaurants: 2, region: 'Florida - South' },
  
  // Illinois
  { name: 'River North - Chicago, IL', restaurants: 2, region: 'Illinois - Chicago' },
  
  // Colorado
  { name: 'LoDo - Denver, CO', restaurants: 1, region: 'Colorado - Denver Metro' },
  
  // Washington
  { name: 'Capitol Hill - Seattle, WA', restaurants: 2, region: 'Washington - Seattle' },
];

// Helper to get short display name
const getShortLocationName = (fullName: string) => {
  // If it has a dash, take the first part (e.g., "The Corner - Charlottesville, VA" -> "The Corner")
  if (fullName.includes(' - ')) {
    return fullName.split(' - ')[0];
  }
  // Otherwise return as is
  return fullName;
};

export function LocationSheet({ currentLocation, onLocationChange, container }: LocationSheetProps) {
  const { currentTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredLocations = searchQuery
    ? popularLocations.filter(loc => 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularLocations;

  // Group locations by region
  const groupedLocations = filteredLocations.reduce((acc, location) => {
    if (!acc[location.region]) {
      acc[location.region] = [];
    }
    acc[location.region].push(location);
    return acc;
  }, {} as Record<string, typeof popularLocations>);

  const handleLocationSelect = (location: string) => {
    onLocationChange(location);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1.5 px-2 hover:bg-orange-50 transition-colors">
          <MapPin className="w-4 h-4 text-orange-500" />
          <span className="text-sm max-w-[140px] truncate">{getShortLocationName(currentLocation)}</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="bottom" 
        className="w-full p-0 rounded-t-3xl" 
        container={container} 
        style={{ height: 'calc(100% - 80px)' }}
      >
        <div className="flex flex-col h-full">
          <SheetHeader className={`px-4 py-4 border-b bg-gradient-to-r ${currentTheme.cardGradient}`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <SheetTitle className="text-base">Change Location</SheetTitle>
                <SheetDescription className="text-xs">
                  Discover restaurants near you
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="p-4 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-11 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>

            {/* Current Location */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="w-3.5 h-3.5 text-orange-500" />
                <h3 className="text-xs text-gray-600">CURRENT LOCATION</h3>
              </div>
              <Card className="p-3 border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm">{getShortLocationName(currentLocation)}</p>
                      <p className="text-xs text-gray-600">Currently viewing</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Popular Locations */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                <h3 className="text-xs text-gray-600">LOCATIONS</h3>
              </div>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4 pr-4">
                  {Object.entries(groupedLocations).map(([region, locations]) => (
                    <div key={region} className="space-y-2">
                      <h4 className="text-xs text-gray-500 px-1">{region}</h4>
                      {locations.map((location) => (
                        <Card
                          key={location.name}
                          className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                            location.name === currentLocation
                              ? 'border-orange-300 bg-orange-50/50'
                              : 'border-gray-200 hover:border-orange-200'
                          }`}
                          onClick={() => handleLocationSelect(location.name)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                                location.name === currentLocation
                                  ? 'bg-gradient-to-r from-orange-500 to-pink-500'
                                  : 'bg-gray-100'
                              }`}>
                                <MapPin className={`w-4 h-4 ${
                                  location.name === currentLocation ? 'text-white' : 'text-gray-500'
                                }`} />
                              </div>
                              <div>
                                <p className="text-sm">{getShortLocationName(location.name)}</p>
                                <p className="text-xs text-gray-500">
                                  {location.restaurants} {location.restaurants === 1 ? 'restaurant' : 'restaurants'}
                                </p>
                              </div>
                            </div>
                            {location.name === currentLocation && (
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  ))}
                  
                  {filteredLocations.length === 0 && (
                    <div className="text-center py-8">
                      <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">No locations found</p>
                      <p className="text-xs text-gray-400">Try a different search</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
