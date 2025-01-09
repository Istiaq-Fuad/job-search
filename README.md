# Remotic - Job Search System

Remotic is a modern and responsive job search system built using Next.js and Vite. Designed for seamless performance and scalability, it provides users with an intuitive platform to explore and apply for job opportunities.

## Features

- **Job Listings:** Browse through various job openings with detailed descriptions.
- **Search and Filter:** Easily search and filter job postings based on location, job type, and more.
- **User-Friendly Interface:** Built with React and TailwindCSS for a sleek and responsive design.
- **Notifications:** Real-time updates with `react-hot-toast` for user interactions.
- **Optimized Performance:** Leveraging `@tanstack/react-query` for efficient data fetching and state management.

## Technologies Used

### Frontend

- **React 18**: Component-based architecture for building the user interface.
- **Next.js**: Server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and development server.

### State Management

- **@tanstack/react-query**: For managing server state and caching.

### Utilities

- **@phosphor-icons/react**: Scalable and customizable icons.
- **react-hot-toast**: Toast notifications.
- **react-loader-spinner**: Loading indicators.

### Development Tools

- **TypeScript**: Strongly typed programming language for better code reliability.
- **ESLint**: Code linting and formatting.
- **json-server**: Mock API for local development.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/remotic.git
   ```

2. Navigate to the project directory:
   
   ```bash
   cd remotic
   ```

3. Install dependencies:
   
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To create a fake json api with json-server:

```
npx json-server --delay 1000 --port 3000 --watch db.json
```

Access the api from [http://localhost:3000](http://localhost:3000/).

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Access the application at [http://localhost:5173](http://localhost:5173/).

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

### Linting

Run the linter to check for code issues:

```bash
npm run lint
# or
yarn lint
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature:
   
   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:
   
   ```bash
   git commit -m "Add new feature"
   ```

4. Push to your branch:
   
   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## Acknowledgments

- Icons by [Phosphor Icons](https://phosphoricons.com/)
- CSS utilities by [TailwindCSS](https://tailwindcss.com/)

---

Happy coding! 🎉
