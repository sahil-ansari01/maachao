# Food Delivery Mobile App - Home Page

A responsive mobile-first food delivery application built with React.js and Next.js, featuring a modern UI for browsing cakes and desserts.

## 🚀 Technology Stack

- **Frontend**: React.js with Next.js 15 (App Router)
- **UI Framework**: Tailwind CSS v4
- **UI Components**: shadcn/ui components
- **Fonts**: Geist Sans & Geist Mono
- **Animations**: Custom CSS animations with auto-rotating slider
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Lucide React

## 📋 Project Scope

This project implements a single home page for a food delivery app based on the provided Figma design with:

- **UI Accuracy**: 80%+ match to the original design
- **Exact Colors**: Primary orange (#FFB84D), white backgrounds, and consistent color scheme
- **Responsive Design**: Mobile-first approach with full responsiveness across all screen sizes
- **Pre-built Components**: Utilizing Tailwind CSS and shadcn/ui for rapid development

## ✨ Key Features Implemented

### 1. Header & Navigation
- User avatar with delivery location selector
- Notification bell and shopping cart icons
- Sticky header that stays visible on scroll

### 2. Hero Section
- Auto-rotating promotional slider with 3 slides
- "Hot Deal" banner with discount offers
- Smooth transitions and pagination indicators
- Call-to-action buttons

### 3. Search Functionality
- Search bar with icon
- Clean, minimal design matching the mockup

### 4. Category Navigation
- 8 circular category buttons with emoji icons
- Two rows: Trending, Cakes, Decoration, Gifts, Hire MUA, Video Gr., Photo Gr., View All
- Hover effects and smooth transitions

### 5. Product Cards
- Horizontal scrollable trending section
- Product images with favorite button
- Price display with original price and discount percentage
- Responsive card layout

### 6. Interactive Components
- **Auto-rotating slider**: Changes every 4 seconds
- **Countdown timer**: Real-time countdown for quick delivery
- **Favorite buttons**: Toggle heart icon on products
- **Floating quick delivery button**: Fixed position lightning bolt button
- **Hover effects**: On all interactive elements

### 7. Countdown Banner
- Positioned above bottom navigation
- Shows delivery countdown timer
- Product image with promotional text

### 8. Bottom Navigation
- 4 tabs: Home, Wishlist, Categories, Profile
- Active state with orange background
- Label appears only on active tab
- Fixed position at bottom

### 9. Loading Animation
- Custom loading spinner component
- Displays while page content loads

### 10. Mobile Responsiveness
- Optimized for mobile devices (320px - 428px)
- Scales properly on tablets and larger screens
- Touch-friendly interactive elements
- Proper spacing and layout consistency

## 🎨 Design Specifications

### Color Scheme
- **Primary Orange**: #FFB84D
- **Background**: #FAFAFA (light gray)
- **Card Background**: #FFFFFF (white)
- **Text Primary**: #000000
- **Text Secondary**: #666666
- **Discount Green**: #10B981
- **Error/Countdown Red**: #EF4444

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (monospace)
- **Heading Sizes**: text-xl, text-lg
- **Body Text**: text-sm, text-xs
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Layout
- **Container Padding**: px-4 (16px)
- **Border Radius**: rounded-2xl (16px) for cards, rounded-full for buttons
- **Spacing**: Consistent gap-2, gap-4, gap-6 throughout
- **Shadows**: Subtle shadows on cards and buttons

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (primary focus)
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+ (scales appropriately)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd food-delivery-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## 📦 Project Structure

\`\`\`
food-delivery-app/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main home page
│   ├── loading.tsx         # Loading state
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Header with delivery location
│   ├── search-bar.tsx      # Search input
│   ├── promo-slider.tsx    # Promotional carousel
│   ├── categories.tsx      # Category navigation
│   ├── trending-section.tsx # Trending products
│   ├── product-card.tsx    # Individual product card
│   ├── countdown-banner.tsx # Delivery countdown
│   ├── floating-quick-delivery-button.tsx # Quick delivery FAB
│   └── bottom-nav.tsx      # Bottom navigation bar
├── public/                 # Static assets and images
└── README.md              # This file
\`\`\`

## 🎯 Features Checklist

- ✅ React.js with Next.js framework
- ✅ Tailwind CSS for styling
- ✅ Responsive mobile-first design
- ✅ Header with delivery location and cart
- ✅ Search bar functionality
- ✅ Auto-rotating promotional slider
- ✅ Category navigation with icons
- ✅ Trending products section
- ✅ Product cards with favorites
- ✅ Interactive countdown timer
- ✅ Floating quick delivery button
- ✅ Bottom navigation with active states
- ✅ Loading animation
- ✅ Hover effects and transitions
- ✅ 80%+ UI accuracy to design
- ✅ Exact color matching
- ✅ Clean, well-documented code

## ⏱️ Development Time

**Total Time**: Approximately 4-5 hours

- Initial setup and structure: 30 minutes
- Component development: 2 hours
- Styling and responsiveness: 1.5 hours
- Testing and refinements: 1 hour

## 🌐 Deployment

This project can be easily deployed to Vercel:

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Notes

- All images use placeholder URLs from Unsplash
- No backend API integration (mock data used)
- State management uses React hooks only
- Optimized for performance with Next.js features
- Follows React and Next.js best practices

## 🔧 Future Enhancements

- Add product detail pages
- Implement shopping cart functionality
- Add user authentication
- Connect to backend API
- Add payment integration
- Implement order tracking
- Add more product categories
- Enhanced search with filters

## 📄 License

This project is created for demonstration purposes.

---

**Built with ❤️ using React.js, Next.js, and Tailwind CSS**
