# Stemaa Personal Website

A minimalist personal website with contact form built with Next.js, deployed on Cloudflare Pages with D1 database.

## Features

- Minimalist design with dark theme
- Contact form with D1 database storage
- Server-side API routes via Cloudflare Functions
- Responsive layout
- Built with Next.js 15, React 18, and TypeScript

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create D1 Database

Create a D1 database in Cloudflare:

```bash
# Create the database
wrangler d1 create stemaa-contacts

# The command will output a database_id, copy it
```

Update `wrangler.toml` with your database ID:

```toml
[[d1_databases]]
binding = "DB"
database_name = "stemaa-contacts"
database_id = "YOUR_DATABASE_ID_HERE"  # Replace with your actual database_id
```

### 3. Initialize the Database Schema

Run the schema migration:

```bash
wrangler d1 execute stemaa-contacts --file=./schema/contact.sql
```

For local development, create a local D1 database:

```bash
wrangler d1 execute stemaa-contacts --local --file=./schema/contact.sql
```

## Development

Start the development server:

```bash
pnpm dev
```

Preview with Cloudflare Pages Functions locally:

```bash
pnpm preview
```

## Build

Build for production:

```bash
pnpm pages:build
```

## Deployment

Deploy to Cloudflare Pages:

```bash
pnpm deploy
```

Or push to GitHub and connect your repository to Cloudflare Pages dashboard.

### Cloudflare Pages Configuration

- **Build command**: `pnpm build`
- **Build output directory**: `out`
- **Root directory**: `/`

⚠️ **IMPORTANT**: Don't forget to bind your D1 database in the Cloudflare Pages dashboard:
1. Go to Settings > Functions
2. Add D1 database binding with name `DB` and select `stemaa-contacts`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Database Management

View contact submissions:

```bash
# Production
wrangler d1 execute stemaa-contacts --command="SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10"

# Local
wrangler d1 execute stemaa-contacts --local --command="SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10"
```

## Project Structure

```
stemaa-web/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── HomePage.tsx
│       ├── ContactPage.tsx
│       └── ContactForm.tsx
├── functions/
│   └── api/
│       └── contact.ts    # API endpoint for contact form
├── schema/
│   └── contact.sql       # D1 database schema
├── public/               # Static assets
├── wrangler.toml         # Cloudflare configuration
└── package.json
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Cloudflare D1
- **Hosting**: Cloudflare Pages
- **Language**: TypeScript
