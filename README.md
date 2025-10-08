# Food Delivery UI (Maachao)

A responsive Next.js single-page UI implementing a food/cake delivery home screen based on a Figma screenshot. It uses Tailwind CSS and a small set of prebuilt UI components.

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Tech Stack

- React (Next.js App Router)
- Tailwind CSS (with CSS variables + themes)
- UI components (Shadcn-style) and `lucide-react` icons

## What’s Implemented (per requirements)

- Header & Navigation: `components/header.tsx` with avatar, location, notifications, and cart
- Hero/Promo: `components/promo-slider.tsx` auto-sliding banner with CTA button
- Categories Grid: `components/categories.tsx`
- Trending Products: `components/trending-section.tsx` using `components/product-card.tsx`
- Interactive Elements: slider controls, category hover, bottom nav tabs, CTA buttons
- Loading Animation: `app/loading.tsx` with `components/ui/spinner.tsx`
- Countdown Banner: `components/countdown-banner.tsx` fixed above bottom nav
- Floating Quick Delivery Button: `components/floating-quick-delivery-button.tsx`
- Mobile Bottom Navigation: `components/bottom-nav.tsx`
- Responsiveness: Tailwind utility classes; layout adapts to small and larger screens

## Notes

- Colors and fonts follow the provided design palette and are centralized in `styles/globals.css`.
- No real API calls; data is mocked within components.

## Scripts

- `npm install`: install packages from package.json
- `npm dev`: run locally
- `npm build` / `npm start`: production build and serve

## License

MIT