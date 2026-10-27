# Portfolio

A personal portfolio website, built with React, TypeScript, and Vite.

## Live Deployment

🚀 **[zeletrik.eu](https://zeletrik.eu)**

## Features

- **Apple-style UI**: light and dark themes, translucent navigation, spring motion, and a native-feeling mobile layout with a floating tab bar.
- **Dynamic Content**: Fetches pinned/featured repositories directly from GitHub.
- **Tech Stack**:
  - **Frontend**: React 19, TypeScript, Vite
  - **Styling**: CSS Modules, Lucide React (Icons)
  - **Deployment**: GitHub Actions to an S3 static-website bucket behind Cloudflare

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/zeletrik/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

The site is served from the S3 static-website bucket `www.zeletrik.eu`, with Cloudflare in front.
Deploys are manual and run in GitHub Actions; no AWS keys are stored in GitHub.

### Deploying

**Actions → Deploy → Run workflow** on `main`. Tick **dry run** to list what would be uploaded and
deleted without touching the bucket.

A deploy:

1. Lints and builds the site (`npm run lint && npm run build`).
2. Signs in to AWS through GitHub's OIDC provider, assuming an IAM role that only this repo's
   `production` environment can use. The credentials last for the run only.
3. Uploads `dist/` in a safe order: the content-hashed `assets/` first (cached for a year), then other
   files (cached for an hour), then HTML (`no-cache`), so a page never references a file that isn't
   uploaded yet. Files the new build no longer has are deleted last.
4. Fetches https://www.zeletrik.eu/ and checks it references this build's entry bundle.

Every push and pull request also runs `CI` (lint and build) without any AWS access.

| Workflow | Runs on | Does |
|---|---|---|
| `ci.yml` | push, pull request | lint, build |
| `deploy.yml` | manual, `main` only | calls the shared deploy for this site |
| `deploy-static-site.yml` | called by other workflows | build (optional), S3 sync, live check |

## License

MIT
