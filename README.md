Hello

# Portfolio (private repo)

This repo contains your **source code**.
When you push to `main`, a GitHub Action builds the site and publishes the output to your **public repo** [`ashwinder9693/portfolio-pages`](https://github.com/ashwinder9693/portfolio-pages) on the `gh-pages` branch, which is served at **[https://onlyjobs.work](https://onlyjobs.work)**.

---

## 🚀 Prerequisites

* [Node.js](https://nodejs.org/) v20+
* Git configured with your GitHub account

---

## 💻 Local development

```bash
# install deps
npm ci

# run dev server (Vite)
npm run dev
```

---

## 📦 Update & deploy

Most common flow:

```bash
# make sure you’re up-to-date
git pull --rebase origin main

# stage everything
git add -A

# commit with a clear message
git commit -m "Update: <what you changed>"

# push to the private repo (triggers deploy workflow)
git push origin main
```

👉 The workflow in `.github/workflows/deploy.yml` then:

1. Builds the project with Vite
2. Copies `dist/` → pushes to **`portfolio-pages@gh-pages`**
3. Publishes the site at **onlyjobs.work**

⏱ Deploys usually take 30–60 seconds.

> First push on a new machine? Use:
>
> ```bash
> git push -u origin main
> ```

---

## 🔄 Manual deploy

If you want to redeploy without code changes:

* Go to the **Actions** tab in the private repo
* Select **Deploy to GitHub Pages (private ➜ public)**
* Click **Run workflow**

---

## 🛠 Optional: test production build locally

```bash
npm run build
# output is in dist/
```

---

## ❗ Troubleshooting

### Push rejected: “fetch first”

```bash
git pull --rebase origin main
# resolve any conflicts if prompted
git push origin main
```

### Nothing happens after push

* Check **Actions** tab (private repo) → see if deploy ran successfully
* Ensure the workflow file exists at `.github/workflows/deploy.yml`
* Confirm secret **PAGES\_TOKEN** exists (Settings → Secrets and variables → Actions)
* Public repo should show new commits on `gh-pages`

### Build or install issues

```bash
rm -rf node_modules package-lock.json
npm ci
```

---

## 📂 Repo layout

```
.
├─ src/              # app code
├─ public/           # static assets
├─ dist/             # production build output (generated)
├─ package.json
├─ vite.config.*     # Vite config
└─ .github/
   └─ workflows/
      └─ deploy.yml  # deploys private → public
```

---

That’s all you need: develop in this repo, **`git push origin main`**, and your changes go live at **[https://onlyjobs.work](https://onlyjobs.work)** 🎉

---

Do you also want me to include a **minimal Vite config snippet** (`base: '/'` and React Router SPA fallback) in this README so it’s self-documented?
