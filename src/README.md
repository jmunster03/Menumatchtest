# Menu Match 🍔🔥

A Tinder-like restaurant discovery app with swipeable cards, smooth animations, and comprehensive meal planning features.

![Menu Match](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC)

## ✨ Features

- **🃏 Swipeable Restaurant Cards** - Tinder-style swiping with smooth animations
- **🎨 Dark Mode** - Comprehensive dark theme across all components
- **🗺️ Multi-Location Support** - Real restaurants from across the US with accurate data
- **🎯 Smart Filters** - Cuisine types, dietary restrictions, price range, and more
- **🏆 Seasonal Quests** - Themed challenges with unlockable rewards
- **📅 Meal Scheduling** - Calendar integration with .ics file generation for Apple Calendar
- **🎨 App Skins** - Multiple themes with smooth toggle transitions
- **📱 iPhone Design** - Phone outline with notch, fixed dimensions (400x800px)

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/menu-match.git
cd menu-match

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app!

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🏗️ Project Structure

```
menu-match/
├── components/          # React components
│   ├── RestaurantCard.tsx
│   ├── SchedulePage.tsx
│   ├── FiltersSheet.tsx
│   ├── QuestsSheet.tsx
│   └── ui/             # Shadcn/ui components
├── data/               # Restaurant database
│   └── restaurantsByLocation.ts
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Vite** - Build tool
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **date-fns** - Date utilities
- **Recharts** - Quest progress visualization

## 📱 Key Components

### Restaurant Card
Displays restaurant information including:
- High-quality images
- Name, cuisine type, and rating
- Descriptions and menu highlights
- Dietary information and allergens
- Pricing and safety ratings

### Swipe Interactions
- Swipe right = Like
- Swipe left = Pass
- Smooth animations with spring physics
- Visual feedback during swipe

### Calendar & Scheduling
- Monthly calendar view
- Friend meal planning
- Apple Calendar sync via .ics files
- Time and location management

### Filters
- Cuisine types (Italian, Mexican, Asian, etc.)
- Dietary restrictions (Vegan, Gluten-Free, etc.)
- Price range ($, $$, $$$, $$$$)
- Distance and safety ratings

### Quests
- Seasonal themed challenges
- Task checklists with progress tracking
- Unlockable rewards and app skins
- Subscription integration

## 🎨 Theming

Menu Match supports multiple themes:
- **Classic** - Orange-to-pink gradient flame logo
- **Dark Mode** - Full dark theme with adjusted colors
- **Seasonal Skins** - Unlockable through quests

## 📄 License

MIT License - feel free to use this project as inspiration!

## 🤝 Contributing

This is a personal project, but feel free to fork and create your own version!

## 📧 Contact

Questions or feedback? Open an issue on GitHub!

---

**Made with ❤️ and a lot of restaurant research**
