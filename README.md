# BWS - Wildfire Mitigation Solutions

A professional marketing website for BWS (Burning Wildfire Services), featuring wildfire risk planning, prescribed burn management, and professional training services.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ recommended

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Layout.tsx     # Main layout with nav & footer
│   ├── Navbar.tsx     # Navigation component
│   └── Footer.tsx     # Footer component
├── pages/             # Route pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── WhoWeServe.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── content/           # Centralized content
│   └── bws.ts         # All site content (single source of truth)
├── App.tsx            # Router configuration
├── main.tsx           # Entry point
└── index.css          # Tailwind styles
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/services` | Services |
| `/who-we-serve` | Who We Serve |
| `/team` | Team |
| `/contact` | Contact |

## Deployment

Build the project and deploy the `dist` folder:

```bash
npm run build
```

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your GitHub repo
2. Framework preset: Vite
3. Deploy

## Contact Form

The contact form is configured to use Formspree. To enable:

1. Create a form at [formspree.io](https://formspree.io)
2. Replace `YOUR_FORM_ID` in `src/pages/Contact.tsx` with your form ID
3. Replace `YOUR_FORM_ID` in `src/components/Footer.tsx` for the newsletter

## License

Private - All rights reserved.
