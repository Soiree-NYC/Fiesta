# Fiesta (party_time)

A modern web application for discovering, booking, and managing large party venues. Built with React, Vite, and TailwindCSS, Fiesta streamlines the process of finding the perfect venue for your next big event, with a focus on accessibility, transparency, and ease of use.

## Features

- **Venue Discovery:** Browse a curated feed of venues by neighborhood, with rich details and photos.
- **Venue Details:** View comprehensive information about each venue, including amenities, accessibility, pricing, and host details.
- **Booking Flow:** Seamless multi-step booking process with real-time price and tax calculations.
- **Venue Ingestion (Admin):** Multi-step form for adding new venues, including accessibility, parking, hours, pricing, catering, licenses, spaces, and cancellation policies.
- **Confirmation & Payment:** Review your booking, see a tax breakdown, and confirm your reservation.
- **Modern UI:** Responsive, mobile-friendly design using TailwindCSS and custom React components.
- **Data Management:** Uses local JSON files for venue and rating data (can be adapted for API/backend integration).

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** TailwindCSS, PostCSS
- **Routing:** React Router DOM
- **HTTP:** Axios
- **Linting:** ESLint, TypeScript ESLint
- **Build Tools:** Vite, TypeScript

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/party_time.git
   cd party_time
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

### Lint the Code

```bash
npm run lint
```

## Project Structure

```
party_time/
├── public/                # Static assets
├── src/
│   ├── components/        # React components (pages, forms, UI, hooks, context)
│   ├── shared/            # Shared types and utilities
│   ├── utils/             # Utility functions
│   ├── assets/            # Images and other assets
│   ├── styles.css         # TailwindCSS styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig*.json         # TypeScript configurations
└── README.md              # Project documentation
```

## Customization

- **Venue Data:** Venue and rating data are loaded from JSON files in the `public/data/` directory. You can replace or extend these for your own use case.
- **Styling:** Modify `src/styles.css` and `tailwind.config.js` for custom themes or branding.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (or specify your license)
