# 🚀 Deployment Guide - Chigwell King Kebab & Pizza

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js installed (v16 or higher)
- ✅ Git installed
- ✅ GitHub account
- ✅ Repository created on GitHub

---

## Option 1: GitHub Actions (Recommended) ⭐

This method automatically builds and deploys your site when you push to the main branch.

### Step 1: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Chigwell King Kebab website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/ChigwellKebab.git

# Push to main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Wait for the action to complete (check the **Actions** tab)

### Step 3: Visit Your Site

Your site will be live at:

```
https://yourusername.github.io/ChigwellKebab/
```

🎉 That's it! Every push to main will automatically redeploy.

---

## Option 2: Manual Deployment with gh-pages

If you prefer manual control over deployments:

### Step 1: Deploy

```bash
# Install dependencies (if not done)
npm install

# Build and deploy
npm run deploy
```

### Step 2: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**

### Step 3: Wait

GitHub will deploy your site in a few minutes. Check at:

```
https://yourusername.github.io/ChigwellKebab/
```

---

## Updating the Site

### With GitHub Actions:

```bash
# Make your changes, then:
git add .
git commit -m "Update menu prices"
git push origin main
```

### With gh-pages:

```bash
# Make your changes, then:
npm run deploy
```

---

## Custom Domain (Optional)

Want to use your own domain like `chigwellking.com`?

### Step 1: Add CNAME File

Create `public/CNAME` with your domain:

```
chigwellking.com
```

### Step 2: Configure DNS

Add these records at your domain provider:

**For apex domain (chigwellking.com):**

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For www subdomain:**

```
CNAME www   yourusername.github.io
```

### Step 3: Update Vite Config

In `vite.config.js`, change base to:

```js
export default defineConfig({
  plugins: [react()],
  base: "/", // Changed from '/ChigwellKebab/'
});
```

### Step 4: Configure GitHub Pages

1. Go to Settings → Pages
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS**

---

## Troubleshooting

### ❌ 404 Error on GitHub Pages

**Fix**: Make sure `vite.config.js` has the correct base path:

```js
base: '/ChigwellKebab/',  // Must match repo name
```

### ❌ CSS Not Loading

**Fix**: Check the base path in `vite.config.js` matches your repo name exactly (case-sensitive).

### ❌ GitHub Action Failed

**Fix**:

1. Go to Settings → Actions → General
2. Under **Workflow permissions**, select **Read and write permissions**
3. Click **Save**
4. Re-run the action

### ❌ Images Not Showing

**Fix**: Images from Unsplash should work. If using local images, ensure they're in the `public` folder and paths start with `/`.

---

## Testing Before Deployment

Always test locally before deploying:

```bash
# Development server
npm run dev

# Production build preview
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## Monitoring Deployments

### GitHub Actions

- Check **Actions** tab in your repository
- View build logs
- See deployment status

### gh-pages

- Check the gh-pages branch for deployed code
- View Settings → Pages for deployment status

---

## Performance Tips

### Before Deployment:

1. **Optimize images** (if using custom images)
2. **Test on multiple devices**
3. **Check all links**
4. **Verify dark mode works**
5. **Test responsive design**

### After Deployment:

1. **Test site speed** with [PageSpeed Insights](https://pagespeed.web.dev/)
2. **Check mobile responsiveness** with [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
3. **Validate HTML** with [W3C Validator](https://validator.w3.org/)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to gh-pages (manual method)
npm run deploy

# Push to trigger GitHub Actions
git push origin main
```

---

## Support

### Useful Links:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Common Issues:

- Check FEATURES.md for feature checklist
- Review README.md for project overview
- See QUICKSTART.md for quick setup

---

**Happy Deploying! 🚀**

Your beautiful restaurant website will be live in minutes!
