# Grant Builder AI Platform

A comprehensive grant writing solution powered by AI to streamline the entire grant process from research to submission.

## Features

- **Smart Grant Research**: AI-powered scanning of thousands of funding sources daily to find perfect matches for your organization.
- **AI-Powered Writing Assistant**: Real-time suggestions, templates, and compliance checks to craft compelling proposals.
- **Comprehensive Review System**: Automated analysis of proposals for compliance, clarity, and competitiveness.
- **Track & Manage Applications**: Intuitive dashboard to organize deadlines, tasks, and submission status.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Webhook integrations
- Dark/Light mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/grant-builder-ai.git
cd grant-builder-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable UI components
- `public/`: Static assets
- `styles/`: Global CSS and Tailwind configuration
- `lib/`: Utility functions and shared logic
- `hooks/`: Custom React hooks

## Key Components

- Early Access Form: Collects user information and schedules demos
- Thank You Page: Provides resources and community information after form submission
- Features Section: Highlights the platform's capabilities
- Hero Section: Main landing page introduction

## Deployment

The application is configured for easy deployment on Vercel:

```bash
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)

## Contact

For questions or support, please contact [contact@grantbuilderai.com](mailto:contact@grantbuilderai.com).
