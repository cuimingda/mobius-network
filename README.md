# mobius-network

Static company website built with Astro and deployed to GitHub Pages via GitHub Actions.

## Requirements

- Node.js `>=22.12.0`
- npm

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
├── astro.config.mjs
├── package-lock.json
└── package.json
```

## Scripts

| Command | Purpose |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `http://localhost:4321` |
| `npm run check` | Run Astro type/content checks |
| `npm run build` | Build static output into `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm test` | Repository-wide validation (`astro check` + `astro build`) |

## GitHub Pages Deployment

The repository includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which deploys the site to GitHub Pages on every push to `main` and also supports manual runs from the Actions tab.

Current Pages target:

- Local development URL: `http://localhost:4321/`
- Production site URL: `https://mingda.dev`
- Base path: `/mobius-network`
- Final public URL: `https://mingda.dev/mobius-network/`

One-time GitHub setup:

1. Go to the repository `Settings`.
2. Open `Pages`.
3. Set `Source` to `GitHub Actions`.

The Astro config uses `/` during `npm run dev`, and uses `/mobius-network` for production builds so local development stays on the root path while GitHub Pages output stays under the repository path.
