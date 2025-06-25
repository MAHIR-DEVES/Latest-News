# Latest News - Frontend News Portal (React App)

# live link : maniacal-reason.surge.sh

## Project Description

A React-based news portal frontend application featuring categorized news
browsing (Breaking, Business, Technology, Health, Sports) with Firebase
authentication. This is the frontend-only implementation without backend
packaging.

## Setup Instructions

1. Clone repository:

```bash
git clone https://github.com/yourusername/latest-news-frontend.git
```

2. Install dependencies:

```bash
cd latest-news-frontend
npm install
```

3. Configure Firebase: Create `.env.local` file with:

```
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_id
```

4. Run development server:

```bash
npm start
```

## Key Features

- News category filtering
- Firebase user authentication
- Responsive UI
- News detail pages
- Mock news data implementation

## Development Notes

- Uses React Context for state management
- Implements protected routes
- Mock data located in `src/data/`
- No backend API integration yet

## Available Scripts

- `npm start` - Runs development server
- `npm run build` - Creates production build
- `npm test` - Runs tests
