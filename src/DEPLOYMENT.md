# Deploying Menu Match to GitHub Pages

This guide will help you deploy your Menu Match app to GitHub Pages so it's accessible as a live website.

## Quick Start (Recommended: GitHub Actions)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it (e.g., `menu-match`)
4. Leave all other settings as default (don't initialize with README, .gitignore, or license)
5. Click **Create repository**

### Step 2: Update Base URL in vite.config.ts

Before deploying, you need to update the `base` property in `vite.config.ts`:

**Option A: For project pages** (most common - `username.github.io/menu-match/`)
```typescript
base: '/menu-match/', // Replace 'menu-match' with YOUR actual repository name
```

**Option B: For user pages** (if your repo is named `username.github.io`)
```typescript
base: '/',
```

### Step 3: Push Your Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Menu Match app"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
If your username is `johndoe` and repo is `menu-match`:
```bash
git remote add origin https://github.com/johndoe/menu-match.git
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **"Source"**, select **GitHub Actions** (not "Deploy from a branch")
5. The page will refresh - you're all set!

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running (yellow dot = in progress, green check = success)
3. Wait 2-5 minutes for the build and deployment to complete
4. Once complete, go back to **Settings** → **Pages**
5. You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"**
6. Click the link to view your app! 🎉

---

## Alternative Deployment Options

### Option 1: Vercel (Easiest, Recommended for Beginners)

Vercel offers free hosting with automatic deployments:

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click **"Deploy"**
6. Your app will be live at `your-project.vercel.app` in ~2 minutes
7. **Bonus:** Get automatic deployments on every git push!

### Option 2: Netlify

Similar to Vercel, also very beginner-friendly:

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy"**
6. Live at `your-project.netlify.app`

### Option 3: Manual GitHub Pages Deployment

If you prefer not to use GitHub Actions:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Then enable GitHub Pages:
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**
4. Save

---

## Embedding in an Existing Website

If you want to integrate Menu Match into an existing website:

### Method 1: IFrame (Simplest)

After deploying to GitHub Pages (or Vercel/Netlify), embed with:

```html
<iframe 
  src="https://YOUR-USERNAME.github.io/menu-match/" 
  width="400" 
  height="800" 
  frameborder="0"
  title="Menu Match App"
></iframe>
```

### Method 2: Build and Host Yourself

1. Run `npm run build` to create the `dist` folder
2. Upload the contents of the `dist` folder to your web hosting
3. Access via your domain: `https://yourwebsite.com/menu-match/`

### Method 3: React Component Integration

If your website is React-based:

1. Copy the `/components` and `/data` folders to your project
2. Copy the styles from `/styles/globals.css`
3. Install dependencies from `package.json`
4. Import and use: `import App from './App'`

---

## Important Configuration Notes

### Base URL Must Match Deployment

The `base` property in `vite.config.ts` MUST match where your app is hosted:

| Hosting Scenario | Base URL Setting |
|-----------------|------------------|
| `username.github.io/menu-match/` | `base: '/menu-match/'` |
| `username.github.io/` (user page) | `base: '/'` |
| `vercel.app` or `netlify.app` | `base: '/'` |
| Custom domain | `base: '/'` |

### Handling Figma Assets

Your app uses images imported from Figma. For deployment:

**Option A: Continue using Figma Make preview** (no changes needed)

**Option B: Export and host images yourself:**
1. Create a `/public` folder in your project
2. Export all images from Figma and save them there
3. Update imports from `figma:asset/...` to `/image-name.png`

---

## Testing Before Deployment

Always test your build locally before deploying:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build
npm run preview
```

This opens a local server showing exactly what will be deployed. Check:
- ✅ App loads without errors
- ✅ All images display correctly
- ✅ Swipe interactions work
- ✅ Navigation functions properly
- ✅ Dark mode toggles correctly

---

## Troubleshooting

### Problem: Blank Page After Deployment

**Solution:**
1. Check `vite.config.ts` - ensure `base` matches your repo name
2. Open browser console (F12) - look for 404 errors
3. If you see 404s for JS/CSS files, your base URL is wrong

### Problem: Images Not Loading

**Solution:**
1. Check browser console for failed image requests
2. Ensure images are in `/public` folder or accessible via Figma Make CDN
3. Update image paths if needed

### Problem: GitHub Actions Build Fails

**Solution:**
1. Go to **Actions** tab and click the failed workflow
2. Expand the logs to see the error
3. Common fixes:
   - TypeScript errors: Run `npm run build` locally to find issues
   - Missing dependencies: Ensure `package.json` is committed
   - Node version: Check the workflow uses Node 18+

### Problem: "404 Page Not Found" on GitHub

**Solution:**
1. Wait 5-10 minutes (GitHub Pages can be slow)
2. Check Settings → Pages shows "Your site is live"
3. Ensure you selected "GitHub Actions" as the source (not "branch")
4. Check the Actions tab to verify deployment succeeded

---

## Updating Your Deployed Site

### With GitHub Actions (Automatic):
```bash
git add .
git commit -m "Description of changes"
git push
```
GitHub automatically rebuilds and redeploys!

### Manual Deployment:
```bash
npm run deploy
```

---

## Domain Options

### Free Options:
- GitHub Pages: `username.github.io/menu-match/`
- Vercel: `menu-match.vercel.app`
- Netlify: `menu-match.netlify.app`

### Custom Domain:
All three platforms support custom domains:
- Buy a domain (e.g., `menumatch.app` from Namecheap, Google Domains)
- Add it in Settings → Pages (GitHub) or Domain Settings (Vercel/Netlify)
- Update DNS records as instructed

---

## Next Steps After Deployment

1. ✅ **Test on mobile devices** - Open the URL on your phone
2. ✅ **Share with friends** - Get feedback on the swipe experience
3. ✅ **Monitor traffic** - Use GitHub Pages/Vercel/Netlify analytics
4. ✅ **Keep updating** - Push changes and they'll auto-deploy

---

## Support

- **GitHub Pages Issues:** [GitHub Pages Documentation](https://docs.github.com/pages)
- **Build Errors:** Check the Actions tab for detailed logs
- **General Help:** Open an issue in your GitHub repository

---

**Your Menu Match app is ready to share with the world! 🍔🔥**
