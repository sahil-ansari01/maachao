# Maachao

A mobile-first food delivery experience implemented for Android (Expo/React Native) and Web (Next.js). The Android app mirrors the Next.js home UI: header, search, promo slider, categories, trending products, floating quick-action, countdown card, and animated bottom tabs.

## Repository Structure

```
maachao/
├── android/                        # Expo (React Native) Android app
│   ├── app/                        # Expo Router pages
│   │   └── (tabs)/
│   │       ├── _layout.tsx         # Custom pill bottom tabs (Ionicons + animation)
│   │       └── index.tsx           # Home screen assembly
│   ├── components/mobile/          # Native mobile UI components
│   ├── public/                     # Images for Android app
│   ├── app.json                    # Expo config (name/icon/splash)
│   └── package.json
├── app/                            # Web (Next.js 15 App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
├── components/                     # Web components
├── public/                         # Web static assets
└── README.md
```

## Technology Stack

- Mobile: React Native via Expo (Android)
- Web: React.js with Next.js 15 (App Router)
- UI (web): Tailwind CSS v4 + shadcn/ui
- Icons: Ionicons (mobile), Lucide (web)
- Animations: RN Animated API (mobile), CSS transitions (web)
- State: React Hooks (useState, useEffect)

---

## 1) Android Mobile App (Expo)

The Android app in `android/` mirrors the Next.js home screen and UX.

### Requirements
- Node.js 18+
- Android Studio (emulator) or a USB-connected device
- Expo CLI: `npm i -g expo`

### Setup & Run
```
cd android
npm install
npm run android           # launches on emulator/device
# or (to clear cache)
expo start -c            # then press 'a' for Android
```

### Features (parity with Web)
- Sticky header with avatar, location, notifications, cart
- Search bar with icons (Ionicons)
- Auto-rotating promo slider (4s) with CTA
- Category grid (2 rows × 4) with emojis + View All icon
- Trending products (horizontal list)
- Countdown “Quick Delivery” card pinned above the tab bar
- Floating quick delivery FAB (⚡) positioned to avoid overlap
- Custom bottom tabs with animated active pill and label
- Safe-area handling via `react-native-safe-area-context`

### Configuration Notes
- App name: `maachao`
- App icon: `android/public/logo.jpeg`
- Expo config: `android/app.json`

### Troubleshooting
- UI not updating or duplicate elements: stop Metro and run `expo start -c`.
- Splash stays forever: app hides splash on mount; reload or clear cache.
- Missing images: verify paths under `android/public/`.

---

## 2) Web (Next.js)

### Requirements
- Node.js 18+

### Setup & Run
```
npm install
npm run dev
# open http://localhost:3000
```

### Build & Start
```
npm run build
npm start
```

### Web UI Highlights
- Header with delivery location, bell, cart
- Search bar with left search and right filter icons
- Promo slider with gradient cards and CTA
- Categories grid (8 items) with emojis and a “View All” icon
- Trending products with price, original price, discount
- Countdown banner component
- Floating quick delivery button
- Bottom nav with active state and label

---

## Shared Design & Tokens
- Primary color: `#FFB84D`
- Background: `#FAFAFA`
- Card background: `#FFFFFF`
- Text: `#000000` (primary), `#666666` (secondary)
- Discount green: `#10B981`
- Countdown red: `#EF4444`
- Spacing: 16px container padding; rounded corners for cards and pills

---

## Features Checklist
- ✅ Android app (Expo) mirrors web layout and flows
- ✅ Animated bottom navigation (Ionicons) on Android
- ✅ INR (₹) pricing on mobile
- ✅ Header, Search, Promo slider, Categories, Trending
- ✅ Floating quick button and Countdown banner
- ✅ Safe-area and layout consistency
- ✅ Next.js web implementation with Tailwind/shadcn

---

Built with ❤️ using React Native (Expo) and Next.js.
