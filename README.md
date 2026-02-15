# Mirage Tech Website

Marketing website and admin dashboard for **Mirage Tech AI** — intelligent automation for the Middle East.

Built with [Next.js](https://nextjs.org), Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.local.example` or create `.env.local` with the following:

| Variable | Description |
|---|---|
| `SMTP_USER` | Email sender address |
| `SMTP_PASS` | SMTP password |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `DATABASE_URL` | PostgreSQL connection string (pooled) |
| `OPENAI_API_KEY` | OpenAI API key for chatbot and proposal generation |
| `BOK_API_URL` | Best of Kuwait API base URL |
| `INTERNAL_API_TOKEN` | Token for BOK API authentication |
| `ADMIN_PASSWORD` | Password for the admin dashboard login |

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── leads/          # Restaurant leads pipeline dashboard
│   │   └── login/          # Admin login page
│   ├── api/
│   │   ├── admin/auth/     # Admin authentication (login/logout)
│   │   ├── bok/leads/      # BOK API proxy for leads
│   │   ├── chat/           # AI chatbot endpoint
│   │   └── proposals/      # Proposal generation & email sending
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── how-it-works/
│   ├── portfolio/
│   ├── pricing/
│   └── services/
├── components/
│   ├── home/               # Homepage sections (Hero, ServicesOverview, etc.)
│   ├── layout/             # Header, Footer
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── lib/                    # Utilities (BOK API client, etc.)
└── middleware.ts            # Auth guard for /admin/* routes
```

## Admin Dashboard

The admin area at `/admin/leads` is password-protected.

- **Login:** Visit `/admin/login` and enter the `ADMIN_PASSWORD`
- **Session:** Stored as an HttpOnly cookie (24h expiry, HMAC-SHA256 signed)
- **Logout:** Click the Logout button on the leads dashboard

### Deployment Note

The `ADMIN_PASSWORD` environment variable must be set in your Vercel project settings for the login to work in production.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a production deploy.
