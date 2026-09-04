# Job Application Tracker

A web app for keeping your job search in one place. Track every application on a
Kanban board, watch it move from applied to interview to offer, and stop losing
roles in a spreadsheet.

## Status

Early development. The marketing landing page is built; the product itself is not.

| Route       | State                                          |
| ----------- | ---------------------------------------------- |
| `/`         | Landing page - hero, screenshot tabs, features |
| `/sign-in`  | Placeholder                                    |
| `/sign-up`  | Placeholder                                    |
| `/dashboard`| Placeholder                                    |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com)
- [lucide-react](https://lucide.dev) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Production build                   |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Project Structure

```
app/                 App Router routes and root layout
  page.tsx           Landing page
  dashboard/         Dashboard (placeholder)
  sign-in/           Sign in (placeholder)
  sign-up/           Sign up (placeholder)
components/          Shared components
  navbar.tsx         Top navigation
  image-tabs.tsx     Tabbed product screenshots on the landing page
  ui/                shadcn/ui primitives
lib/utils.ts         Helpers (cn)
public/hero-images/  Landing page screenshots
```

## Contributing

Branches and PR titles follow [Conventional Commits](https://www.conventionalcommits.org):
`type(scope): summary`. Feature branches merge into `dev`; `dev` merges into `main`.

## License

MIT - see [LICENSE](LICENSE).
