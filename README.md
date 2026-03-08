# Galería y Enmarcados del Bajío

> Premium Virtual Framer & Art Gallery E-Commerce Platform

Welcome to the digital storefront for Galería y Enmarcados del Bajío. This application provides a modern, sleek interface for browsing artwork and a fully interactive virtual framer for custom orders.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key (if using AI features)
3. Set up Supabase credentials in your environment variables for database connectivity
4. Run the app:
   `npm run dev`

## Features

- **Next.js 15 & React 19:** Built on the latest, high-performance app router architecture.
- **Tailwind CSS & Framer Motion:** Sleek, responsive, and animated UI components.
- **Virtual Framer Tool:** Interactive canvas for users to preview custom framing, molding, mat sizing, and background colors dynamically.
- **E-Commerce & Gallery:** Sections for showcasing art pieces (`GallerySection`) and selling artwork/frames (`ShopSection`).
- **Shopping Cart:** Integrated `CartSidebar` for managing selected items before checkout.
- **Information Sections:** Comprehensive `Hero`, `Services`, and `About` sections.
- **Database Integration:** Integrated with Supabase for backend data management.
- **Vercel Deployment:** Configured for seamless continuous deployment via Vercel.
- **Customizable Theme:** Clean glassmorphism aesthetic tailored with custom brand colors (e.g., brand-oak, brand-bg) in `tailwind.config.ts`.
