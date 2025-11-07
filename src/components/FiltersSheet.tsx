import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { SlidersHorizontal, Leaf, Utensils, ShieldCheck, MapPin, DollarSign, RotateCcw } from 'lucide-react';
import logoImage from 'figma:asset/7a24e14a79f78714a3a479f032002a4172deb07a.png';
import { useTheme } from './ThemeContext';

interface FiltersSheetProps {
  filters: {
    vegan: boolean;
    vegetarian: boolean;
    allergenFriendly: boolean;
    maxDistance: number;
    maxPrice: number;
  };
  onFiltersChange: (filters: any) => void;
  container?: HTMLElement | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onApplyFilters?: () => void;
  onResetFilters?: () => void;
}

export function FiltersSheet({ filters, onFiltersChange, container, open, onOpenChange, onApplyFilters, onResetFilters }: FiltersSheetProps) {
  const { currentTheme, isDarkMode } = useTheme();
  const activeFiltersCount = [
    filters.vegan,
    filters.vegetarian,
    filters.allergenFriendly,
    filters.maxDistance < 10,
    filters.maxPrice < 4
  ].filter(Boolean).length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <SlidersHorizontal className="w-5 h-5" />
          {activeFiltersCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-orange-500 text-white text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className={`w-full p-0 rounded-t-3xl ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'}`} container={container} style={{ height: 'calc(100% - 80px)' }}>
        <div className="flex flex-col h-full">
          <SheetHeader className={`px-3 py-3 border-b ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-700' : `bg-gradient-to-r ${currentTheme.cardGradient} border-gray-200`}`}>
            <div className="flex items-center gap-2">
              <div className="text-left">
                <SheetTitle className={`text-base ${isDarkMode ? 'text-white' : ''}`}>Filters</SheetTitle>
                <SheetDescription className={`text-xs ${isDarkMode ? 'text-gray-400' : ''}`}>
                  {activeFiltersCount > 0 ? `${activeFiltersCount} active` : 'Customize preferences'}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>
          
          <ScrollArea className="flex-1">
            <div className="px-3 py-3 space-y-3 pb-6">
              {/* Dietary Preferences */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Utensils className={`w-3.5 h-3.5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                  <h3 className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dietary</h3>
                </div>
                
                <Card className={`overflow-hidden ${isDarkMode ? 'border-orange-700 bg-gray-800' : 'border-orange-100 bg-white'}`}>
                  <div className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
                    <div className={`p-2.5 flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-orange-900/30' : 'hover:bg-orange-50/50'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-green-700/50' : 'bg-green-100'}`}>
                          <Leaf className={`w-3.5 h-3.5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        </div>
                        <div className="min-w-0">
                          <Label htmlFor="vegan" className={`cursor-pointer text-xs block ${isDarkMode ? 'text-white' : ''}`}>Vegan</Label>
                          <p className={`text-[10px] leading-tight ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Plant-based</p>
                        </div>
                      </div>
                      <Switch
                        id="vegan"
                        checked={filters.vegan}
                        onCheckedChange={(checked) => onFiltersChange({ ...filters, vegan: checked })}
                        className="scale-90"
                      />
                    </div>
                    
                    <div className={`p-2.5 flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-orange-900/30' : 'hover:bg-orange-50/50'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-green-700/50' : 'bg-green-100'}`}>
                          <Leaf className={`w-3.5 h-3.5 ${isDarkMode ? 'text-green-300' : 'text-green-500'}`} />
                        </div>
                        <div className="min-w-0">
                          <Label htmlFor="vegetarian" className={`cursor-pointer text-xs block ${isDarkMode ? 'text-white' : ''}`}>Vegetarian</Label>
                          <p className={`text-[10px] leading-tight ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No meat</p>
                        </div>
                      </div>
                      <Switch
                        id="vegetarian"
                        checked={filters.vegetarian}
                        onCheckedChange={(checked) => onFiltersChange({ ...filters, vegetarian: checked })}
                        className="scale-90"
                      />
                    </div>
                    
                    <div className={`p-2.5 flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-orange-900/30' : 'hover:bg-orange-50/50'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-blue-700/50' : 'bg-blue-100'}`}>
                          <ShieldCheck className={`w-3.5 h-3.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        </div>
                        <div className="min-w-0">
                          <Label htmlFor="allergen" className={`cursor-pointer text-xs block ${isDarkMode ? 'text-white' : ''}`}>Allergen Safe</Label>
                          <p className={`text-[10px] leading-tight ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Safe options</p>
                        </div>
                      </div>
                      <Switch
                        id="allergen"
                        checked={filters.allergenFriendly}
                        onCheckedChange={(checked) => onFiltersChange({ ...filters, allergenFriendly: checked })}
                        className="scale-90"
                      />
                    </div>
                  </div>
                </Card>
              </div>
              
              <Separator className={isDarkMode ? 'bg-gray-700' : ''} />
              
              {/* Max Distance */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className={`w-3.5 h-3.5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                  <h3 className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Distance</h3>
                </div>
                
                <Card className={`p-2.5 ${isDarkMode ? 'border-orange-700 bg-gradient-to-br from-gray-800 to-gray-700' : 'border-orange-100 bg-gradient-to-br from-white to-orange-50/30'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max distance</span>
                      <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] px-1.5 py-0">
                        {filters.maxDistance} mi
                      </Badge>
                    </div>
                    <Slider
                      value={[filters.maxDistance]}
                      onValueChange={(value) => onFiltersChange({ ...filters, maxDistance: value[0] })}
                      max={10}
                      min={0.5}
                      step={0.5}
                      className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-orange-500 [&_[role=slider]]:to-pink-500 [&_[role=slider]]:border-0 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                    <div className={`flex justify-between text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span>0.5 mi</span>
                      <span>10 mi</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Separator className={isDarkMode ? 'bg-gray-700' : ''} />
              
              {/* Price Level */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <DollarSign className={`w-3.5 h-3.5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                  <h3 className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Price</h3>
                </div>
                
                <Card className={`p-2.5 ${isDarkMode ? 'border-pink-700 bg-gradient-to-br from-gray-800 to-gray-700' : 'border-orange-100 bg-gradient-to-br from-white to-pink-50/30'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Max price</span>
                      <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] px-1.5 py-0">
                        {'$'.repeat(filters.maxPrice)}
                      </Badge>
                    </div>
                    <Slider
                      value={[filters.maxPrice]}
                      onValueChange={(value) => onFiltersChange({ ...filters, maxPrice: value[0] })}
                      max={4}
                      min={1}
                      step={1}
                      className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-orange-500 [&_[role=slider]]:to-pink-500 [&_[role=slider]]:border-0 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                    <div className={`flex justify-between text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span>$ Budget</span>
                      <span>$$$$ Luxury</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="pb-2">
                <Card className={`p-2 border ${isDarkMode ? 'bg-gradient-to-r from-orange-900/40 to-pink-900/40 border-orange-700' : 'bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200'}`}>
                  <p className={`text-[10px] text-center leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Find restaurants matching your preferences
                  </p>
                </Card>
              </div>
            </div>
          </ScrollArea>
          
          {/* Footer with buttons */}
          <div className={`p-3 border-t space-y-1.5 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <Button 
              className={`w-full bg-gradient-to-r text-white h-9 text-sm ${isDarkMode ? 'from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700' : 'from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'}`}
              onClick={onApplyFilters}>
              Apply Filters
            </Button>
            
            {activeFiltersCount > 0 && (
              <Button 
                variant="outline"
                className={`w-full h-9 text-xs ${isDarkMode ? 'border-orange-600 text-orange-400 hover:bg-orange-900/20' : 'border-orange-300 text-orange-600 hover:bg-orange-50'}`}
                onClick={onResetFilters}
              >
                <RotateCcw className="w-3 h-3 mr-1.5" />
                Reset Filters
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}