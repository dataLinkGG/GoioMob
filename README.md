# Description

This project was generated using v0, for a client to has he's app allowed to be published on Google Play and App Store.

The processedure was to generate the react app using a prompt, adjust it and download the app. After downloading the app,
unzip it, open in editor (VS Code).

```bash
git init
git add .
git commit -m "Initial commit from v0" # example
```

I'm using bun for this project 

```bash
wsl
sudo apt update
curl -fsSL https://bun.com/install | bash
```

Verify bun installtion by verifying the version:

```bash
bun --version
```

```bash
echo $SHELL
```

Verify the shell

```bash
echo $SHEL
```

Open (if it's bashrc, for example)

```bash
nano ~/.bashrc
```

Make sure you have the following lines on `️nano ~/.bashrc`:

```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

Install dependencies:

```bash
bun install
```

This also generates `public/print_phone.webp` from the hero PNG (smaller LCP). Re-run manually if needed:

```bash
bun run optimize:images
```

Run the development server:

```bash
bun run dev
```

# Lighthouse Metrics:

- Performance: 97%
- Accessibility: 96%
- Best Practices: 100%
- SEO: 100%

# Deploy (GitHub Actions → GitHub Pages)

The site is a static export (`output: 'export'`) and deploys automatically when you push to `main`.

## One-time GitHub setup

1. Push this repo to GitHub (public is fine).
2. In the repo: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
3. If the site URL is `https://<user>.github.io/GoioMob/` (project site, not a user `.github.io` root repo), add a repository variable:
   - **Settings → Secrets and variables → Actions → Variables**
   - Name: `NEXT_PUBLIC_BASE_PATH`
   - Value: `/GoioMob` (match your repo name exactly, with leading slash)
4. Push to `main`. The workflow **Deploy to GitHub Pages** runs and publishes `out/`.

## Workflows

| File | Purpose |
|------|---------|
| `.github/workflows/ci.yml` | Build on every push/PR |
| `.github/workflows/deploy-pages.yml` | Build + deploy to GitHub Pages on `main` |

## Local production build

```bash
bun run build
```

Static files are in `out/`. Serve locally with any static server, for example:

```bash
npx serve out
```