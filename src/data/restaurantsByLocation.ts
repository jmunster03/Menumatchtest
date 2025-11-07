interface MenuItem {
  name: string;
  price: string;
  calories?: number;
  allergens?: string[];
}

export interface Restaurant {
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
  sponsored?: boolean;
}

export const restaurantsByLocation: Record<string, Restaurant[]> = {
  'Downtown Lynchburg, VA': [
    {
      id: 1,
      name: "Waterstone Pizza",
      cuisine: "Pizza & Italian",
      image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "1.2 mi",
      description: "Wood-fired Neapolitan pizzas and authentic Italian cuisine in downtown Lynchburg.",
      menuItems: [
        { name: "Margherita Pizza", price: "$14", calories: 850, allergens: ["Gluten", "Dairy"] },
        { name: "Pepperoni Pizza", price: "$16", calories: 980, allergens: ["Gluten", "Dairy"] },
        { name: "Caprese Salad", price: "$12", calories: 320, allergens: ["Dairy"] },
        { name: "Tiramisu", price: "$8", calories: 450, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "9:00 PM", isOpen: true },
      location: { address: "907 Main St, Lynchburg, VA 24504", neighborhood: "Downtown", safetyRating: 4.5 }
    },
    {
      id: 2,
      name: "The White Hart Café",
      cuisine: "Café & Bakery",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZm9vZHxlbnwxfHx8fDE3NjEwNTMwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 2,
      distance: "0.8 mi",
      description: "Cozy café serving specialty coffee, fresh pastries, and artisanal sandwiches.",
      menuItems: [
        { name: "Avocado Toast", price: "$11", calories: 420, allergens: ["Gluten"] },
        { name: "Croissant", price: "$4", calories: 290, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Latte", price: "$5", calories: 190, allergens: ["Dairy"] },
        { name: "Quinoa Bowl", price: "$13", calories: 480, allergens: [] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "7:00 AM", close: "6:00 PM", isOpen: true },
      location: { address: "1208 Main St, Lynchburg, VA 24504", neighborhood: "Downtown", safetyRating: 4.8 }
    },
    {
      id: 3,
      name: "Texas Inn",
      cuisine: "American Diner",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5lciUyMGZvb2R8ZW58MXx8fHwxNzYxMDUzMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5lciUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.4,
      priceLevel: 1,
      distance: "1.5 mi",
      description: "Historic 24-hour diner famous for 'Cheesy Westerns' since 1930.",
      menuItems: [
        { name: "Cheesy Western", price: "$5", calories: 520, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Bowl (Chili)", price: "$6", calories: 380, allergens: [] },
        { name: "Hot Dog", price: "$3", calories: 290, allergens: ["Gluten"] },
        { name: "Breakfast Plate", price: "$8", calories: 640, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "24 Hours", close: "24 Hours", isOpen: true },
      location: { address: "422 Church St, Lynchburg, VA 24504", neighborhood: "Church Street", safetyRating: 4.3 }
    },
    {
      id: 4,
      name: "Shoemakers American Grille",
      cuisine: "American Grill",
      image: "https://images.unsplash.com/photo-1669806252638-ee47fe43e8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYxMDUzMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 2,
      distance: "2.1 mi",
      description: "Upscale American dining with steaks, seafood, and craft cocktails.",
      menuItems: [
        { name: "Ribeye Steak", price: "$32", calories: 780, allergens: [] },
        { name: "Grilled Salmon", price: "$26", calories: 520, allergens: ["Fish"] },
        { name: "Caesar Salad", price: "$12", calories: 380, allergens: ["Gluten", "Dairy", "Fish", "Eggs"] },
        { name: "Key Lime Pie", price: "$9", calories: 420, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "1312 Commerce St, Lynchburg, VA 24504", neighborhood: "Riverfront", safetyRating: 4.7 }
    },
    {
      id: 5,
      name: "Fork in the Market",
      cuisine: "Farm-to-Table",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZXxlbnwxfHx8fDE3NjEwNTMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZnJlc2h8ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "1.8 mi",
      description: "Seasonal menu featuring locally sourced ingredients from Virginia farms.",
      menuItems: [
        { name: "Roasted Vegetable Plate", price: "$19", calories: 420, allergens: [] },
        { name: "Grass-Fed Burger", price: "$16", calories: 680, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Market Salad", price: "$14", calories: 280, allergens: ["Tree Nuts"] },
        { name: "Apple Crumble", price: "$8", calories: 380, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "10 Ninth St, Lynchburg, VA 24504", neighborhood: "Depot District", safetyRating: 4.6 }
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
      description: "Classic Southern comfort food made from scratch with generous portions.",
      menuItems: [
        { name: "Country Fried Steak", price: "$15", calories: 920, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "BBQ Pulled Pork", price: "$13", calories: 560, allergens: [] },
        { name: "Mac & Cheese", price: "$8", calories: 420, allergens: ["Gluten", "Dairy"] },
        { name: "Banana Pudding", price: "$6", calories: 380, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "8:00 PM", isOpen: true },
      location: { address: "2476 Rivermont Ave, Lynchburg, VA 24503", neighborhood: "Rivermont", safetyRating: 4.7 }
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
      description: "Eclectic pizzeria with stone-baked pies, craft beers, and vegan options.",
      menuItems: [
        { name: "Holy Shiitake Pizza", price: "$18", calories: 890, allergens: ["Gluten", "Dairy", "Soy"] },
        { name: "Veg Out Pizza (Vegan)", price: "$17", calories: 720, allergens: ["Gluten", "Soy"] },
        { name: "Buffalo Chicken Hoagie", price: "$12", calories: 780, allergens: ["Gluten", "Dairy"] },
        { name: "Brownie Sundae", price: "$8", calories: 620, allergens: ["Gluten", "Dairy", "Eggs", "Tree Nuts"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "3850 Candlers Mountain Rd, Lynchburg, VA 24502", neighborhood: "Candlers Mountain", safetyRating: 4.8 }
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
      description: "Family-owned Italian restaurant with authentic homemade pasta.",
      menuItems: [
        { name: "Fettuccine Alfredo", price: "$16", calories: 920, allergens: ["Gluten", "Dairy"] },
        { name: "Chicken Parmigiana", price: "$18", calories: 850, allergens: ["Gluten", "Dairy"] },
        { name: "Eggplant Parmigiana", price: "$15", calories: 680, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Cannoli", price: "$7", calories: 380, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "9:00 PM", isOpen: true },
      location: { address: "2613 Langhorne Rd, Lynchburg, VA 24501", neighborhood: "Boonsboro", safetyRating: 4.6 }
    }
  ],
  'Forest, VA': [
    {
      id: 9,
      name: "The Water Dog",
      cuisine: "Sports Bar & Grill",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiYXJ8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiYXIlMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 2,
      distance: "0.5 mi",
      description: "Casual sports bar with craft beers, wings, and multiple TVs for game day.",
      menuItems: [
        { name: "Buffalo Wings", price: "$13", calories: 780, allergens: ["Dairy"] },
        { name: "Loaded Nachos", price: "$11", calories: 920, allergens: ["Dairy"] },
        { name: "Philly Cheesesteak", price: "$12", calories: 820, allergens: ["Gluten", "Dairy"] },
        { name: "Brownie Sundae", price: "$7", calories: 580, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "11:00 PM", isOpen: true },
      location: { address: "1653 Graves Mill Rd, Forest, VA 24551", neighborhood: "Forest", safetyRating: 4.6 }
    },
    {
      id: 10,
      name: "The Coffee House",
      cuisine: "Coffee Shop",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 2,
      distance: "0.7 mi",
      description: "Cozy neighborhood coffee shop with fresh pastries and free WiFi.",
      menuItems: [
        { name: "Cappuccino", price: "$5", calories: 120, allergens: ["Dairy"] },
        { name: "Blueberry Muffin", price: "$4", calories: 380, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Turkey & Avocado Wrap", price: "$10", calories: 520, allergens: ["Gluten"] },
        { name: "Iced Mocha", price: "$6", calories: 280, allergens: ["Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "6:30 AM", close: "7:00 PM", isOpen: true },
      location: { address: "1040 Graves Mill Rd, Forest, VA 24551", neighborhood: "Forest", safetyRating: 4.8 }
    }
  ],
  'Glen Allen, VA': [
    {
      id: 111,
      name: "The Boathouse at Short Pump",
      cuisine: "Seafood & Grill",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "1.2 mi",
      description: "Upscale seafood restaurant with waterfront views and fresh catches.",
      menuItems: [
        { name: "Lobster Roll", price: "$28", calories: 620, allergens: ["Shellfish", "Gluten", "Dairy"] },
        { name: "Crab Cake Platter", price: "$32", calories: 780, allergens: ["Shellfish", "Gluten", "Eggs"] },
        { name: "Grilled Salmon", price: "$26", calories: 520, allergens: ["Fish"] },
        { name: "Key Lime Pie", price: "$9", calories: 450, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "11919 W Broad St, Glen Allen, VA 23060", neighborhood: "Short Pump", safetyRating: 4.8 }
    },
    {
      id: 112,
      name: "P.F. Chang's",
      cuisine: "Asian Fusion",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 2,
      distance: "0.8 mi",
      description: "Modern Asian cuisine with signature lettuce wraps and creative cocktails.",
      menuItems: [
        { name: "Chang's Lettuce Wraps", price: "$14", calories: 580, allergens: ["Soy", "Gluten"] },
        { name: "Mongolian Beef", price: "$19", calories: 820, allergens: ["Soy", "Gluten"] },
        { name: "Pad Thai", price: "$17", calories: 720, allergens: ["Gluten", "Eggs", "Peanuts", "Soy"] },
        { name: "Banana Spring Rolls", price: "$9", calories: 520, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "11800 W Broad St, Glen Allen, VA 23060", neighborhood: "Short Pump", safetyRating: 4.7 }
    },
    {
      id: 113,
      name: "Cooper's Hawk Winery & Restaurant",
      cuisine: "American Contemporary",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 3,
      distance: "1.5 mi",
      description: "Wine-focused dining with house wines and seasonal American menu.",
      menuItems: [
        { name: "Filet Mignon", price: "$36", calories: 680, allergens: [] },
        { name: "Lobster & Shrimp Fettuccine", price: "$28", calories: 920, allergens: ["Shellfish", "Gluten", "Dairy"] },
        { name: "Asian Glazed Salmon", price: "$24", calories: 580, allergens: ["Fish", "Soy"] },
        { name: "Chocolate Lava Cake", price: "$10", calories: 680, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "11500 W Huguenot Rd, Glen Allen, VA 23059", neighborhood: "Short Pump", safetyRating: 4.8 }
    }
  ],
  'Midlothian, VA': [
    {
      id: 121,
      name: "The Village Grill & Cafe",
      cuisine: "American Cafe",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGNhZmV8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "0.6 mi",
      description: "Family-friendly cafe with breakfast all day and homemade comfort food.",
      menuItems: [
        { name: "Chicken & Waffles", price: "$14", calories: 920, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Village Burger", price: "$12", calories: 780, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Greek Salad", price: "$11", calories: 420, allergens: ["Dairy"] },
        { name: "Apple Pie", price: "$6", calories: 380, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "7:00 AM", close: "9:00 PM", isOpen: true },
      location: { address: "13980 Hull Street Rd, Midlothian, VA 23112", neighborhood: "Midlothian", safetyRating: 4.7 }
    },
    {
      id: 122,
      name: "Osaka Sushi & Steak",
      cuisine: "Japanese Steakhouse",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0ZWFraG91c2V8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "1.1 mi",
      description: "Hibachi grill and sushi bar with theatrical cooking and fresh rolls.",
      menuItems: [
        { name: "Hibachi Chicken", price: "$19", calories: 720, allergens: ["Soy", "Gluten"] },
        { name: "Spicy Tuna Roll", price: "$14", calories: 380, allergens: ["Fish", "Soy"] },
        { name: "Filet & Lobster", price: "$42", calories: 820, allergens: ["Shellfish", "Soy"] },
        { name: "Mochi Ice Cream", price: "$7", calories: 280, allergens: ["Dairy", "Soy"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:30 AM", close: "10:00 PM", isOpen: true },
      location: { address: "1332 Alverser Plaza, Midlothian, VA 23113", neighborhood: "Midlothian", safetyRating: 4.6 }
    }
  ],
  'Downtown Richmond, VA': [
    {
      id: 101,
      name: "L'Opossum",
      cuisine: "French Bistro",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmb29kfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 4,
      distance: "0.5 mi",
      description: "Whimsical French fine dining with creative presentations and seasonal menus.",
      menuItems: [
        { name: "Duck Confit", price: "$38", calories: 720, allergens: [] },
        { name: "Escargot", price: "$16", calories: 280, allergens: ["Dairy"] },
        { name: "Beef Bourguignon", price: "$42", calories: 680, allergens: ["Gluten"] },
        { name: "Crème Brûlée", price: "$12", calories: 420, allergens: ["Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "5:00 PM", close: "11:00 PM", isOpen: true },
      location: { address: "626 China St, Richmond, VA 23220", neighborhood: "The Fan", safetyRating: 4.8 }
    },
    {
      id: 102,
      name: "Mama J's Kitchen",
      cuisine: "Soul Food",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZHxlbnwxfHx8fDE3NjEwNTMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VsJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 2,
      distance: "1.2 mi",
      description: "Authentic soul food with fried chicken, collard greens, and sweet potato pie.",
      menuItems: [
        { name: "Fried Chicken", price: "$14", calories: 840, allergens: ["Gluten", "Dairy"] },
        { name: "Collard Greens", price: "$6", calories: 180, allergens: [] },
        { name: "Mac & Cheese", price: "$7", calories: 450, allergens: ["Gluten", "Dairy"] },
        { name: "Sweet Potato Pie", price: "$6", calories: 380, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "8:00 PM", isOpen: true },
      location: { address: "415 N 1st St, Richmond, VA 23219", neighborhood: "Jackson Ward", safetyRating: 4.5 }
    },
    {
      id: 103,
      name: "Perly's Restaurant & Delicatessen",
      cuisine: "Jewish Deli",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYxMDUzMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "0.8 mi",
      description: "Classic Jewish deli with pastrami, matzo ball soup, and homemade bagels.",
      menuItems: [
        { name: "Pastrami on Rye", price: "$15", calories: 620, allergens: ["Gluten"] },
        { name: "Matzo Ball Soup", price: "$9", calories: 280, allergens: ["Gluten", "Eggs"] },
        { name: "Lox & Bagel", price: "$14", calories: 480, allergens: ["Gluten", "Fish", "Dairy"] },
        { name: "Rugelach", price: "$5", calories: 320, allergens: ["Gluten", "Dairy", "Tree Nuts"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "7:00 AM", close: "9:00 PM", isOpen: true },
      location: { address: "111 E Grace St, Richmond, VA 23219", neighborhood: "Downtown", safetyRating: 4.7 }
    },
    {
      id: 104,
      name: "The Roosevelt",
      cuisine: "Southern Contemporary",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZvb2R8ZW58MXx8fHwxNzYxMDUzMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 3,
      distance: "0.6 mi",
      description: "Modern Southern cuisine with rooftop dining and craft cocktails.",
      menuItems: [
        { name: "Shrimp & Grits", price: "$24", calories: 620, allergens: ["Shellfish", "Dairy"] },
        { name: "Fried Green Tomatoes", price: "$12", calories: 380, allergens: ["Gluten", "Eggs"] },
        { name: "Bourbon Glazed Pork Chop", price: "$28", calories: 720, allergens: [] },
        { name: "Pecan Pie", price: "$9", calories: 520, allergens: ["Gluten", "Dairy", "Eggs", "Tree Nuts"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "11:00 PM", isOpen: true },
      location: { address: "623 N 25th St, Richmond, VA 23223", neighborhood: "Church Hill", safetyRating: 4.8 }
    }
  ],
  'Hollins, VA': [
    {
      id: 131,
      name: "Hollins Mill Cafe",
      cuisine: "Cafe & Bakery",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwYmFrZXJ5fGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 2,
      distance: "0.4 mi",
      description: "Quaint cafe with fresh baked goods and specialty coffee drinks.",
      menuItems: [
        { name: "Croissant Sandwich", price: "$9", calories: 520, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Cinnamon Roll", price: "$5", calories: 480, allergens: ["Gluten", "Dairy"] },
        { name: "Breakfast Burrito", price: "$10", calories: 620, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Cold Brew Coffee", price: "$4", calories: 5, allergens: [] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "6:00 AM", close: "3:00 PM", isOpen: true },
      location: { address: "7612 Williamson Rd, Hollins, VA 24019", neighborhood: "Hollins", safetyRating: 4.6 }
    }
  ],
  'The Corner - Charlottesville, VA': [
    {
      id: 201,
      name: "The Ivy Inn",
      cuisine: "New American",
      image: "https://images.unsplash.com/photo-1669806252638-ee47fe43e8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc2MTA1MzAyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 4,
      distance: "0.7 mi",
      description: "Elegant dining featuring Virginia wines and locally sourced ingredients.",
      menuItems: [
        { name: "Pan-Seared Scallops", price: "$36", calories: 520, allergens: ["Shellfish", "Dairy"] },
        { name: "Virginia Lamb Rack", price: "$42", calories: 680, allergens: [] },
        { name: "Wild Mushroom Risotto", price: "$28", calories: 620, allergens: ["Dairy"] },
        { name: "Chocolate Soufflé", price: "$14", calories: 480, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "5:30 PM", close: "10:00 PM", isOpen: true },
      location: { address: "2244 Old Ivy Rd, Charlottesville, VA 22903", neighborhood: "Ivy", safetyRating: 4.9 }
    },
    {
      id: 202,
      name: "Bodo's Bagels",
      cuisine: "Bagel Shop",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWdlbHxlbnwxfHx8fDE3NjEwNTMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWdlbCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 1,
      distance: "1.1 mi",
      description: "Local institution serving fresh New York-style bagels daily since 1988.",
      menuItems: [
        { name: "Everything Bagel w/ Cream Cheese", price: "$5", calories: 420, allergens: ["Gluten", "Dairy", "Sesame"] },
        { name: "Egg & Cheese Sandwich", price: "$6", calories: 480, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Lox Spread", price: "$8", calories: 320, allergens: ["Fish", "Dairy"] },
        { name: "Coffee", price: "$3", calories: 5, allergens: [] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "6:30 AM", close: "3:00 PM", isOpen: true },
      location: { address: "1609 University Ave, Charlottesville, VA 22903", neighborhood: "The Corner", safetyRating: 4.8 }
    },
    {
      id: 203,
      name: "C&O Restaurant",
      cuisine: "French-American",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBhbWVyaWNhbnxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBhbWVyaWNhbiUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "0.4 mi",
      description: "Casual bistro downstairs, elegant French dining upstairs.",
      menuItems: [
        { name: "Mussels & Frites", price: "$22", calories: 680, allergens: ["Shellfish", "Gluten"] },
        { name: "Filet Mignon", price: "$38", calories: 620, allergens: [] },
        { name: "Ratatouille", price: "$18", calories: 280, allergens: [] },
        { name: "Tarte Tatin", price: "$10", calories: 420, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "5:00 PM", close: "10:00 PM", isOpen: true },
      location: { address: "515 E Water St, Charlottesville, VA 22902", neighborhood: "Downtown Mall", safetyRating: 4.7 }
    }
  ],
  'Downtown Roanoke, VA': [
    {
      id: 301,
      name: "Lucky",
      cuisine: "Modern American",
      image: "https://images.unsplash.com/photo-1669806252638-ee47fe43e8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbWVyaWNhbnxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbWVyaWNhbiUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 3,
      distance: "0.3 mi",
      description: "Contemporary American cuisine with Asian influences and craft cocktails.",
      menuItems: [
        { name: "Tuna Poke Bowl", price: "$24", calories: 520, allergens: ["Fish", "Soy", "Sesame"] },
        { name: "Korean BBQ Tacos", price: "$18", calories: 680, allergens: ["Gluten", "Soy"] },
        { name: "Edamame Dumplings", price: "$14", calories: 380, allergens: ["Gluten", "Soy"] },
        { name: "Mochi Ice Cream", price: "$8", calories: 320, allergens: ["Dairy", "Soy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:30 AM", close: "10:00 PM", isOpen: true },
      location: { address: "18 Kirk Ave SW, Roanoke, VA 24011", neighborhood: "Downtown", safetyRating: 4.7 }
    },
    {
      id: 302,
      name: "Texas Tavern",
      cuisine: "Diner",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5lciUyMGZvb2R8ZW58MXx8fHwxNzYxMDUzMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5lciUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 1,
      distance: "0.2 mi",
      description: "Historic 24-hour diner serving 'Cheesy Westerns' since 1930.",
      menuItems: [
        { name: "Cheesy Western", price: "$4", calories: 480, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Bowl (Chili)", price: "$5", calories: 360, allergens: [] },
        { name: "Hot Dog", price: "$3", calories: 280, allergens: ["Gluten"] },
        { name: "Breakfast Bowl", price: "$6", calories: 540, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "24 Hours", close: "24 Hours", isOpen: true },
      location: { address: "114 W Church Ave SW, Roanoke, VA 24011", neighborhood: "Downtown", safetyRating: 4.4 }
    }
  ],
  'Ballston - Arlington, VA': [
    {
      id: 401,
      name: "Pupatella",
      cuisine: "Neapolitan Pizza",
      image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWFwb2xpdGFuJTIwcGl6emF8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWFwb2xpdGFuJTIwcGl6emElMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 2,
      distance: "0.5 mi",
      description: "Authentic Neapolitan pizza certified by Associazione Verace Pizza Napoletana.",
      menuItems: [
        { name: "Margherita D.O.P.", price: "$15", calories: 780, allergens: ["Gluten", "Dairy"] },
        { name: "Diavola", price: "$17", calories: 920, allergens: ["Gluten", "Dairy"] },
        { name: "Burrata & Prosciutto", price: "$19", calories: 850, allergens: ["Gluten", "Dairy"] },
        { name: "Tiramisu", price: "$9", calories: 420, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "5104 Wilson Blvd, Arlington, VA 22205", neighborhood: "Ballston", safetyRating: 4.8 }
    },
    {
      id: 402,
      name: "Buena Vida",
      cuisine: "Mexican Fusion",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZHxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "0.8 mi",
      description: "Modern Mexican with rooftop dining, tacos, and extensive tequila selection.",
      menuItems: [
        { name: "Carne Asada Tacos", price: "$14", calories: 620, allergens: ["Gluten"] },
        { name: "Fish Tacos", price: "$15", calories: 580, allergens: ["Gluten", "Fish"] },
        { name: "Guacamole & Chips", price: "$10", calories: 420, allergens: [] },
        { name: "Churros", price: "$8", calories: 480, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "11:00 PM", isOpen: true },
      location: { address: "2900 Wilson Blvd, Arlington, VA 22201", neighborhood: "Clarendon", safetyRating: 4.7 }
    }
  ],
  'Clarendon - Arlington, VA': [
    {
      id: 411,
      name: "Rustico Restaurant & Bar",
      cuisine: "Italian Gastropub",
      image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 2,
      distance: "0.3 mi",
      description: "Craft beer haven with wood-fired pizzas and house-made pasta.",
      menuItems: [
        { name: "Prosciutto & Arugula Pizza", price: "$18", calories: 820, allergens: ["Gluten", "Dairy"] },
        { name: "Housemade Gnocchi", price: "$22", calories: 720, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Meatball Sliders", price: "$14", calories: 680, allergens: ["Gluten", "Dairy"] },
        { name: "Panna Cotta", price: "$9", calories: 380, allergens: ["Dairy"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:30 AM", close: "11:00 PM", isOpen: true },
      location: { address: "827 N Garfield St, Arlington, VA 22201", neighborhood: "Clarendon", safetyRating: 4.8 }
    }
  ],
  'Oceanfront - Virginia Beach, VA': [
    {
      id: 501,
      name: "Catch 31",
      cuisine: "Seafood",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 3,
      distance: "0.2 mi",
      description: "Oceanfront seafood restaurant with fresh catches and stunning views.",
      menuItems: [
        { name: "Crab Cakes", price: "$28", calories: 520, allergens: ["Shellfish", "Gluten", "Eggs"] },
        { name: "Oysters Rockefeller", price: "$18", calories: 380, allergens: ["Shellfish", "Dairy"] },
        { name: "Grilled Mahi-Mahi", price: "$26", calories: 420, allergens: ["Fish"] },
        { name: "Key Lime Pie", price: "$9", calories: 450, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "3001 Atlantic Ave, Virginia Beach, VA 23451", neighborhood: "Oceanfront", safetyRating: 4.9 }
    },
    {
      id: 502,
      name: "Commune",
      cuisine: "Farm-to-Table",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZXxlbnwxfHx8fDE3NjEwNTMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZnJlc2h8ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "1.5 mi",
      description: "Seasonal menu with local ingredients and creative coastal cuisine.",
      menuItems: [
        { name: "Roasted Beet Salad", price: "$14", calories: 320, allergens: ["Dairy", "Tree Nuts"] },
        { name: "Pan-Seared Rockfish", price: "$28", calories: 480, allergens: ["Fish"] },
        { name: "Vegetable Risotto", price: "$22", calories: 580, allergens: ["Dairy"] },
        { name: "Chocolate Tart", price: "$10", calories: 520, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "5:00 PM", close: "10:00 PM", isOpen: true },
      location: { address: "2000 Parks Ave, Virginia Beach, VA 23451", neighborhood: "ViBe District", safetyRating: 4.8 }
    }
  ],
  'Santa Monica, CA': [
    {
      id: 601,
      name: "The Lobster",
      cuisine: "Seafood",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 4,
      distance: "0.3 mi",
      description: "Oceanfront fine dining with spectacular Pacific views and fresh seafood.",
      menuItems: [
        { name: "Lobster Thermidor", price: "$48", calories: 680, allergens: ["Shellfish", "Dairy"] },
        { name: "Pacific Oysters", price: "$22", calories: 280, allergens: ["Shellfish"] },
        { name: "Chilean Sea Bass", price: "$42", calories: 520, allergens: ["Fish"] },
        { name: "Crème Brûlée", price: "$12", calories: 420, allergens: ["Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "11:30 AM", close: "10:00 PM", isOpen: true },
      location: { address: "1602 Ocean Ave, Santa Monica, CA 90401", neighborhood: "Santa Monica Pier", safetyRating: 4.9 }
    },
    {
      id: 602,
      name: "Blue Plate Taco",
      cuisine: "Mexican",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvc3xlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "0.8 mi",
      description: "Sustainable seafood tacos with California coastal vibes.",
      menuItems: [
        { name: "Fish Tacos", price: "$16", calories: 520, allergens: ["Fish", "Gluten"] },
        { name: "Carne Asada Burrito", price: "$14", calories: 780, allergens: ["Gluten", "Dairy"] },
        { name: "Guacamole & Chips", price: "$10", calories: 380, allergens: [] },
        { name: "Churros", price: "$8", calories: 420, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "9:00 PM", isOpen: true },
      location: { address: "1355 Ocean Ave, Santa Monica, CA 90401", neighborhood: "Santa Monica", safetyRating: 4.7 }
    }
  ],
  'North Beach - San Francisco, CA': [
    {
      id: 611,
      name: "Tony's Pizza Napoletana",
      cuisine: "Italian Pizza",
      image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emF8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 3,
      distance: "0.2 mi",
      description: "World-champion pizza in the heart of North Beach's Little Italy.",
      menuItems: [
        { name: "Margherita STG", price: "$24", calories: 820, allergens: ["Gluten", "Dairy"] },
        { name: "Cal Italia", price: "$28", calories: 920, allergens: ["Gluten", "Dairy"] },
        { name: "Burrata & Prosciutto", price: "$22", calories: 680, allergens: ["Dairy", "Gluten"] },
        { name: "Tiramisu", price: "$10", calories: 480, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "1570 Stockton St, San Francisco, CA 94133", neighborhood: "North Beach", safetyRating: 4.7 }
    },
    {
      id: 612,
      name: "House of Nanking",
      cuisine: "Chinese",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      priceLevel: 2,
      distance: "0.5 mi",
      description: "Legendary Chinese spot with signature dishes and generous portions.",
      menuItems: [
        { name: "Sesame Chicken", price: "$16", calories: 820, allergens: ["Soy", "Gluten", "Sesame"] },
        { name: "Pork Pot Stickers", price: "$12", calories: 480, allergens: ["Gluten", "Soy"] },
        { name: "Kung Pao Shrimp", price: "$18", calories: 620, allergens: ["Shellfish", "Soy", "Peanuts"] },
        { name: "Fortune Cookies", price: "$2", calories: 120, allergens: ["Gluten"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: false },
      hours: { open: "11:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "919 Kearny St, San Francisco, CA 94133", neighborhood: "Chinatown", safetyRating: 4.6 }
    }
  ],
  'SoHo - New York, NY': [
    {
      id: 701,
      name: "Balthazar",
      cuisine: "French Brasserie",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 4,
      distance: "0.4 mi",
      description: "Iconic French brasserie serving classic bistro fare in a lively setting.",
      menuItems: [
        { name: "Steak Frites", price: "$38", calories: 920, allergens: [] },
        { name: "French Onion Soup", price: "$16", calories: 480, allergens: ["Gluten", "Dairy"] },
        { name: "Coq au Vin", price: "$32", calories: 720, allergens: [] },
        { name: "Profiteroles", price: "$14", calories: 580, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "7:30 AM", close: "12:00 AM", isOpen: true },
      location: { address: "80 Spring St, New York, NY 10012", neighborhood: "SoHo", safetyRating: 4.8 }
    },
    {
      id: 702,
      name: "Joe's Pizza",
      cuisine: "New York Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 1,
      distance: "0.3 mi",
      description: "Classic NYC slice joint serving thin-crust pizza since 1975.",
      menuItems: [
        { name: "Cheese Slice", price: "$3", calories: 280, allergens: ["Gluten", "Dairy"] },
        { name: "Pepperoni Slice", price: "$4", calories: 320, allergens: ["Gluten", "Dairy"] },
        { name: "Whole Pie", price: "$18", calories: 2240, allergens: ["Gluten", "Dairy"] },
        { name: "Garlic Knots", price: "$5", calories: 380, allergens: ["Gluten", "Dairy"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: false },
      hours: { open: "10:00 AM", close: "4:00 AM", isOpen: true },
      location: { address: "7 Carmine St, New York, NY 10014", neighborhood: "Greenwich Village", safetyRating: 4.7 }
    }
  ],
  'Williamsburg - Brooklyn, NY': [
    {
      id: 711,
      name: "Peter Luger Steak House",
      cuisine: "Steakhouse",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVha2hvdXNlfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 4,
      distance: "0.5 mi",
      description: "Legendary steakhouse serving dry-aged porterhouse since 1887.",
      menuItems: [
        { name: "Porterhouse for Two", price: "$126", calories: 1680, allergens: [] },
        { name: "Bacon (Thick Cut)", price: "$18", calories: 580, allergens: [] },
        { name: "German Fried Potatoes", price: "$12", calories: 420, allergens: [] },
        { name: "Pecan Pie", price: "$14", calories: 680, allergens: ["Gluten", "Dairy", "Eggs", "Tree Nuts"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: false },
      hours: { open: "11:45 AM", close: "9:45 PM", isOpen: true },
      location: { address: "178 Broadway, Brooklyn, NY 11211", neighborhood: "Williamsburg", safetyRating: 4.8 }
    }
  ],
  'Downtown Austin, TX': [
    {
      id: 801,
      name: "Franklin Barbecue",
      cuisine: "BBQ",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjBmb29kfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      priceLevel: 2,
      distance: "1.2 mi",
      description: "World-famous Texas BBQ worth the wait. Brisket sells out daily.",
      menuItems: [
        { name: "Brisket (per lb)", price: "$28", calories: 1120, allergens: [] },
        { name: "Pulled Pork (per lb)", price: "$24", calories: 920, allergens: [] },
        { name: "Ribs (per lb)", price: "$32", calories: 1380, allergens: [] },
        { name: "Banana Pudding", price: "$6", calories: 420, allergens: ["Dairy", "Eggs", "Gluten"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: false },
      hours: { open: "11:00 AM", close: "3:00 PM", isOpen: true },
      location: { address: "900 E 11th St, Austin, TX 78702", neighborhood: "East Austin", safetyRating: 4.7 }
    },
    {
      id: 802,
      name: "Uchi",
      cuisine: "Japanese Sushi",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 4,
      distance: "0.8 mi",
      description: "Contemporary Japanese cuisine with innovative sushi and hot dishes.",
      menuItems: [
        { name: "Omakase (Chef's Choice)", price: "$95", calories: 1200, allergens: ["Fish", "Shellfish", "Soy"] },
        { name: "Toro Nigiri", price: "$18", calories: 280, allergens: ["Fish", "Soy"] },
        { name: "Wagyu Hot Rock", price: "$42", calories: 680, allergens: ["Soy"] },
        { name: "Mochi Ice Cream", price: "$10", calories: 320, allergens: ["Dairy", "Soy"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "5:00 PM", close: "10:00 PM", isOpen: true },
      location: { address: "801 S Lamar Blvd, Austin, TX 78704", neighborhood: "South Lamar", safetyRating: 4.9 }
    }
  ],
  'Deep Ellum - Dallas, TX': [
    {
      id: 811,
      name: "Pecan Lodge",
      cuisine: "Texas BBQ",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnF8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 2,
      distance: "0.3 mi",
      description: "Award-winning BBQ in Deep Ellum's historic arts district.",
      menuItems: [
        { name: "Hot & Fast Brisket", price: "$22", calories: 980, allergens: [] },
        { name: "Smoked Turkey", price: "$18", calories: 620, allergens: [] },
        { name: "Mac & Cheese", price: "$8", calories: 520, allergens: ["Gluten", "Dairy"] },
        { name: "Pecan Pie", price: "$7", calories: 580, allergens: ["Gluten", "Dairy", "Eggs", "Tree Nuts"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: false },
      hours: { open: "11:00 AM", close: "3:00 PM", isOpen: true },
      location: { address: "2702 Main St, Dallas, TX 75226", neighborhood: "Deep Ellum", safetyRating: 4.6 }
    }
  ],
  'South Beach - Miami, FL': [
    {
      id: 901,
      name: "Joe's Stone Crab",
      cuisine: "Seafood",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 4,
      distance: "0.5 mi",
      description: "Miami institution serving stone crab and classic seafood since 1913.",
      menuItems: [
        { name: "Stone Crab Claws (Large)", price: "$68", calories: 320, allergens: ["Shellfish"] },
        { name: "Jumbo Lump Crab Cakes", price: "$42", calories: 580, allergens: ["Shellfish", "Gluten", "Eggs"] },
        { name: "Grilled Swordfish", price: "$38", calories: 480, allergens: ["Fish"] },
        { name: "Key Lime Pie", price: "$12", calories: 520, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
      hours: { open: "11:30 AM", close: "10:00 PM", isOpen: true },
      location: { address: "11 Washington Ave, Miami Beach, FL 33139", neighborhood: "South Beach", safetyRating: 4.9 }
    },
    {
      id: 902,
      name: "Versailles Restaurant",
      cuisine: "Cuban",
      image: "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMGZvb2R8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "2.1 mi",
      description: "Legendary Cuban restaurant famous for authentic cuisine and cafecito.",
      menuItems: [
        { name: "Ropa Vieja", price: "$18", calories: 720, allergens: [] },
        { name: "Cuban Sandwich", price: "$12", calories: 680, allergens: ["Gluten", "Dairy"] },
        { name: "Vaca Frita", price: "$22", calories: 820, allergens: [] },
        { name: "Flan", price: "$7", calories: 380, allergens: ["Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "8:00 AM", close: "1:00 AM", isOpen: true },
      location: { address: "3555 SW 8th St, Miami, FL 33135", neighborhood: "Little Havana", safetyRating: 4.7 }
    }
  ],
  'River North - Chicago, IL': [
    {
      id: 1001,
      name: "Girl & the Goat",
      cuisine: "Contemporary American",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBmb29kfGVufDF8fHx8MTc2MTA1MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 3,
      distance: "0.4 mi",
      description: "Bold flavors and creative dishes from Top Chef winner Stephanie Izard.",
      menuItems: [
        { name: "Goat Empanadas", price: "$16", calories: 520, allergens: ["Gluten", "Dairy"] },
        { name: "Wood-Fired Pig Face", price: "$18", calories: 680, allergens: [] },
        { name: "Green Beans", price: "$14", calories: 320, allergens: ["Fish", "Soy"] },
        { name: "Chocolate Semifreddo", price: "$12", calories: 480, allergens: ["Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
      hours: { open: "4:30 PM", close: "10:00 PM", isOpen: true },
      location: { address: "809 W Randolph St, Chicago, IL 60607", neighborhood: "West Loop", safetyRating: 4.8 }
    },
    {
      id: 1002,
      name: "Lou Malnati's Pizzeria",
      cuisine: "Chicago Deep Dish",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 2,
      distance: "0.6 mi",
      description: "Chicago's legendary deep-dish pizza with buttery crust and rich sauce.",
      menuItems: [
        { name: "Lou's Deep Dish (Small)", price: "$24", calories: 1680, allergens: ["Gluten", "Dairy"] },
        { name: "Sausage & Pepperoni", price: "$28", calories: 1920, allergens: ["Gluten", "Dairy"] },
        { name: "House Salad", price: "$9", calories: 280, allergens: ["Dairy"] },
        { name: "Chocolate Chip Cookie Skillet", price: "$10", calories: 620, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: false, vegetarian: true, allergenFriendly: false },
      hours: { open: "11:00 AM", close: "11:00 PM", isOpen: true },
      location: { address: "439 N Wells St, Chicago, IL 60654", neighborhood: "River North", safetyRating: 4.7 }
    }
  ],
  'LoDo - Denver, CO': [
    {
      id: 1101,
      name: "Mercantile Dining & Provision",
      cuisine: "Farm-to-Table",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZXxlbnwxfHx8fDE3NjEwNTMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      priceLevel: 3,
      distance: "0.3 mi",
      description: "European-inspired market and restaurant with house-made everything.",
      menuItems: [
        { name: "Roasted Chicken", price: "$28", calories: 720, allergens: [] },
        { name: "Fresh Pasta", price: "$24", calories: 680, allergens: ["Gluten", "Eggs", "Dairy"] },
        { name: "Charcuterie Board", price: "$22", calories: 820, allergens: ["Dairy"] },
        { name: "Seasonal Tart", price: "$11", calories: 480, allergens: ["Gluten", "Dairy", "Eggs"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "7:00 AM", close: "10:00 PM", isOpen: true },
      location: { address: "1701 Wynkoop St, Denver, CO 80202", neighborhood: "Union Station", safetyRating: 4.8 }
    }
  ],
  'Capitol Hill - Seattle, WA': [
    {
      id: 1201,
      name: "Oddfellows Cafe + Bar",
      cuisine: "American Brunch",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuY2h8ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbG9nb3xlbnwxfHx8fDE3NjEwNzIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      priceLevel: 2,
      distance: "0.2 mi",
      description: "Trendy brunch spot with creative cocktails and Pacific Northwest flair.",
      menuItems: [
        { name: "Crab Cake Benedict", price: "$18", calories: 680, allergens: ["Shellfish", "Gluten", "Eggs", "Dairy"] },
        { name: "Brioche French Toast", price: "$14", calories: 820, allergens: ["Gluten", "Dairy", "Eggs"] },
        { name: "Smoked Salmon Bagel", price: "$16", calories: 520, allergens: ["Fish", "Gluten", "Dairy"] },
        { name: "Mimosa Flight", price: "$18", calories: 380, allergens: [] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "8:00 AM", close: "3:00 PM", isOpen: true },
      location: { address: "1525 10th Ave, Seattle, WA 98122", neighborhood: "Capitol Hill", safetyRating: 4.7 }
    },
    {
      id: 1202,
      name: "Din Tai Fung",
      cuisine: "Chinese Dim Sum",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW18ZW58MXx8fHwxNzYxMDUzMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: "https://images.unsplash.com/photo-1625869016774-3a92be2ae2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW0lMjBzdW0lMjBsb2dvfGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      priceLevel: 2,
      distance: "3.2 mi",
      description: "World-renowned soup dumplings and Taiwanese specialties.",
      menuItems: [
        { name: "Pork Soup Dumplings", price: "$12", calories: 380, allergens: ["Gluten", "Soy"] },
        { name: "Shrimp & Pork Wontons", price: "$14", calories: 420, allergens: ["Shellfish", "Gluten", "Soy"] },
        { name: "Vegetable Fried Rice", price: "$10", calories: 520, allergens: ["Soy", "Gluten", "Eggs"] },
        { name: "Red Bean Buns", price: "$8", calories: 320, allergens: ["Gluten"] }
      ],
      dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
      hours: { open: "11:00 AM", close: "9:30 PM", isOpen: true },
      location: { address: "700 Bellevue Way NE, Bellevue, WA 98004", neighborhood: "Bellevue", safetyRating: 4.8 }
    }
  ]
};

// Sponsored restaurants - Generic ads shown once every 20 swipes
export const sponsoredRestaurants: Restaurant[] = [
  {
    id: 90001,
    name: "McDonald's",
    cuisine: "Fast Food Burgers",
    image: "https://images.unsplash.com/photo-1585238341710-4c3cf55bb5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2RvbmFsZHMlMjBidXJnZXJ8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.2,
    priceLevel: 1,
    distance: "0.5 mi",
    description: "Classic burgers, fries, and breakfast all day. Fast service and drive-thru available.",
    menuItems: [
      { name: "Big Mac", price: "$5.99", calories: 550, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Quarter Pounder with Cheese", price: "$6.49", calories: 530, allergens: ["Gluten", "Dairy"] },
      { name: "Chicken McNuggets (10 pc)", price: "$5.49", calories: 440, allergens: ["Gluten", "Soy"] },
      { name: "French Fries (Medium)", price: "$2.99", calories: 320, allergens: [] }
    ],
    dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
    hours: { open: "6:00 AM", close: "11:00 PM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.5 },
    sponsored: true
  },
  {
    id: 90002,
    name: "Chick-fil-A",
    cuisine: "Fast Food Chicken",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzYxMDcwMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    priceLevel: 1,
    distance: "0.7 mi",
    description: "America's favorite chicken sandwich. Known for exceptional service and quality ingredients.",
    menuItems: [
      { name: "Chick-fil-A Sandwich", price: "$4.99", calories: 440, allergens: ["Gluten", "Dairy"] },
      { name: "Spicy Deluxe Sandwich", price: "$6.19", calories: 550, allergens: ["Gluten", "Dairy"] },
      { name: "Waffle Potato Fries", price: "$2.85", calories: 360, allergens: [] },
      { name: "Grilled Nuggets (8 ct)", price: "$5.35", calories: 130, allergens: [] }
    ],
    dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
    hours: { open: "6:00 AM", close: "10:00 PM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.8 },
    sponsored: true
  },
  {
    id: 90003,
    name: "Taco Bell",
    cuisine: "Mexican Fast Food",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvfGVufDF8fHx8MTc2MTA3MDIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.1,
    priceLevel: 1,
    distance: "1.1 mi",
    description: "Quick Mexican-inspired food. Great vegetarian options and late-night availability.",
    menuItems: [
      { name: "Crunchy Taco", price: "$1.79", calories: 170, allergens: ["Gluten", "Dairy"] },
      { name: "Beef Burrito Supreme", price: "$4.99", calories: 420, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Black Bean Crunchwrap Supreme", price: "$5.49", calories: 630, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Nacho Fries", price: "$1.99", calories: 320, allergens: ["Dairy"] }
    ],
    dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
    hours: { open: "7:00 AM", close: "2:00 AM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.3 },
    sponsored: true
  },
  {
    id: 90004,
    name: "Subway",
    cuisine: "Sandwich Shop",
    image: "https://images.unsplash.com/photo-1553909489-ec2175ef3787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJtYXJpbmUlMjBzYW5kd2ljaHxlbnwxfHx8fDE3NjEwNzAyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.0,
    priceLevel: 1,
    distance: "0.6 mi",
    description: "Fresh subs, salads, and wraps made to order. Customize your meal with fresh veggies.",
    menuItems: [
      { name: "Italian B.M.T.", price: "$7.49", calories: 410, allergens: ["Gluten", "Dairy"] },
      { name: "Turkey Breast Sub", price: "$6.99", calories: 280, allergens: ["Gluten"] },
      { name: "Veggie Delite", price: "$5.49", calories: 200, allergens: ["Gluten"] },
      { name: "Chocolate Chip Cookie", price: "$1.29", calories: 220, allergens: ["Gluten", "Dairy", "Eggs", "Soy"] }
    ],
    dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
    hours: { open: "7:00 AM", close: "10:00 PM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.4 },
    sponsored: true
  },
  {
    id: 90005,
    name: "Chipotle",
    cuisine: "Mexican Grill",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJyaXRvJTIwYm93bHxlbnwxfHx8fDE3NjEwNzAyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.3,
    priceLevel: 2,
    distance: "1.3 mi",
    description: "Real food with fresh ingredients. Build your own burrito, bowl, or salad.",
    menuItems: [
      { name: "Chicken Burrito", price: "$9.95", calories: 975, allergens: ["Gluten", "Dairy"] },
      { name: "Steak Bowl", price: "$11.95", calories: 650, allergens: ["Dairy"] },
      { name: "Sofritas Bowl (Vegan)", price: "$9.95", calories: 570, allergens: ["Soy"] },
      { name: "Chips & Guacamole", price: "$4.95", calories: 540, allergens: [] }
    ],
    dietary: { vegan: true, vegetarian: true, allergenFriendly: true },
    hours: { open: "10:45 AM", close: "10:00 PM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.6 },
    sponsored: true
  },
  {
    id: 90006,
    name: "Pizza Hut",
    cuisine: "Pizza Chain",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwxfHx8fDE3NjEwNzAyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1710664369485-7e418d7af865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZm9vZCUyMGxvZ298ZW58MXx8fHwxNzYxMDcyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.0,
    priceLevel: 1,
    distance: "1.5 mi",
    description: "America's favorite pizza. Delivery and carryout available.",
    menuItems: [
      { name: "Pepperoni Lovers Pizza (Large)", price: "$14.99", calories: 310, allergens: ["Gluten", "Dairy"] },
      { name: "Veggie Lovers Pizza (Large)", price: "$13.99", calories: 260, allergens: ["Gluten", "Dairy"] },
      { name: "Meat Lovers Pizza (Large)", price: "$16.99", calories: 340, allergens: ["Gluten", "Dairy"] },
      { name: "Breadsticks (8 pc)", price: "$6.49", calories: 140, allergens: ["Gluten", "Dairy"] }
    ],
    dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
    hours: { open: "11:00 AM", close: "11:00 PM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.4 },
    sponsored: true
  },
  {
    id: 90007,
    name: "Wendy's",
    cuisine: "Fast Food Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllc3xlbnwxfHx8fDE3NjEwNzAyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.1,
    priceLevel: 1,
    distance: "0.8 mi",
    description: "Fresh, never frozen beef. Home of the Frosty and square burgers.",
    menuItems: [
      { name: "Dave's Single", price: "$6.19", calories: 580, allergens: ["Gluten", "Dairy"] },
      { name: "Spicy Chicken Sandwich", price: "$5.99", calories: 510, allergens: ["Gluten", "Dairy"] },
      { name: "Baconator", price: "$7.99", calories: 960, allergens: ["Gluten", "Dairy"] },
      { name: "Chocolate Frosty", price: "$2.49", calories: 350, allergens: ["Dairy"] }
    ],
    dietary: { vegan: false, vegetarian: false, allergenFriendly: true },
    hours: { open: "6:30 AM", close: "1:00 AM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.5 },
    sponsored: true
  },
  {
    id: 90008,
    name: "Burger King",
    cuisine: "Fast Food Burgers",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aG9wcGVyJTIwYnVyZ2VyfGVufDF8fHx8MTc2MTA3MDIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    logo: "https://images.unsplash.com/photo-1640812570037-ea415861315b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTA3MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.0,
    priceLevel: 1,
    distance: "1.0 mi",
    description: "Home of the Whopper. Flame-grilled burgers and crispy fries.",
    menuItems: [
      { name: "Whopper", price: "$5.99", calories: 657, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Bacon King", price: "$8.49", calories: 1040, allergens: ["Gluten", "Dairy", "Soy"] },
      { name: "Impossible Whopper", price: "$6.99", calories: 630, allergens: ["Gluten", "Soy"] },
      { name: "Chicken Fries", price: "$3.99", calories: 280, allergens: ["Gluten"] }
    ],
    dietary: { vegan: false, vegetarian: true, allergenFriendly: true },
    hours: { open: "6:00 AM", close: "12:00 AM", isOpen: true },
    location: { address: "Nearest location", neighborhood: "Near you", safetyRating: 4.3 },
    sponsored: true
  }
];
