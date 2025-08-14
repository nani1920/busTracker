<!-- @format -->

# TransitTrack Frontend

This is the standalone frontend for the TransitTrack application. It's configured to run independently without the backend server.

## Features

- **Role-based Dashboards**: Student, Driver, and Admin interfaces
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with bottom navigation
- **Mock Data**: Includes sample data for demonstration purposes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (dashboards)
├── hooks/         # Custom React hooks
├── lib/           # Utilities and configurations
└── index.css      # Global styles and Tailwind CSS
```

## Mock Data

The application currently uses mock data instead of a backend API. You can modify the data in `src/lib/mockData.ts` to customize the demo experience.

## Backend Integration

When you're ready to connect to a backend:

1. Remove the mock data imports
2. Update API calls to use real endpoints
3. Configure environment variables for API URLs

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **React Query** - Data fetching (currently unused)
- **Wouter** - Client-side routing
