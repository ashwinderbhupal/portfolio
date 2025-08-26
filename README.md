Here’s a clean **README** you can drop into your **private** repo. It keeps only what you need to develop locally and deploy by pushing to `main`.

---

# Portfolio (private repo)

This repo is your **source code**. When you push to `main`, a GitHub Action builds the site and publishes the output to your **public** repo `ashwinder9693/portfolio-pages` on the `gh-pages` branch (served at **[https://onlyjobs.work](https://onlyjobs.work)**).

## Prerequisites

* Node.js 20+
* Git set up with your GitHub account

## Local development

```bash
# install deps
npm ci

# run dev server (Vite)
npm run dev
```

## Update & deploy (most common)

```bash
# see what changed
git status

# stage everything (add/modify/delete)
git add -A

# commit with a clear message
git commit -m "Update: <what you changed>"

# push to the private repo
git push origin main
```

> First time on this machine? Use:
>
> ```bash
> git push -u origin main
> ```

After the push, GitHub Actions runs **Deploy to GitHub Pages (private → public)** and publishes the new build to `portfolio-pages@gh-pages`. Give it \~30–60 seconds.

## Manually trigger a deploy

If you need to force a rebuild without changing code:

* GitHub → **Actions** → **Deploy to GitHub Pages (private → public)** → **Run workflow**.

## Optional: test a production build locally

```bash
npm run build
# output is in dist/
```

## Troubleshooting

* **Push rejected / out-of-date branch**

  ```bash
  git pull --rebase origin main
  # fix any conflicts if prompted
  git push origin main
  ```

* **Nothing happens after push**

  * Check **Actions** tab for the latest run logs.
  * Ensure the workflow file exists at `.github/workflows/deploy.yml`.
  * Make sure the secret **PAGES\_TOKEN** exists (repo Settings → Secrets → Actions).

* **Install issues**

  ```bash
  rm -rf node_modules package-lock.json
  npm ci
  ```

---

That’s all you need. Copy-paste this into your `README.md`.
