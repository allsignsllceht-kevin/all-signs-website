# All Signs LLC Website

The official website for All Signs LLC — a custom sign fabrication shop in Pleasantville, NJ.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Deploy to Vercel

### Option 1: Drag-and-drop (simplest)

1. Run `npm install` then `npm run build` on your machine.
2. Go to https://vercel.com/new and drag the `dist/` folder into the upload area.

### Option 2: Connect a GitHub repo

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Vercel will auto-detect Vite. Defaults are correct:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click Deploy.

The `vercel.json` file in this folder handles single-page-app routing so that
deep links work correctly.
