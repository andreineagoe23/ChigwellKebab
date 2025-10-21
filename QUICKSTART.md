# 🚀 Quick Start Guide

Get your Chigwell King Kebab & Pizza website up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:5173**

## Step 3: Explore the Site

- **Toggle Dark Mode** - Click the sun/moon icon in the navbar
- **Smooth Scrolling** - Click any navigation link
- **Responsive Design** - Resize your browser or check on mobile

## Step 4: Deploy to GitHub Pages

### Quick Deploy:

```bash
npm run deploy
```

Then go to your repository settings and enable GitHub Pages from the `gh-pages` branch.

### Or use GitHub Actions:

Just push to main:

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

---

## 📝 Customization Tips

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#8B0000',  // Your primary color
  accent: '#F5C518',   // Your accent color
}
```

### Update Content

Each section is in `src/components/`:

- `Hero.jsx` - Main banner
- `About.jsx` - About section
- `Menu.jsx` - Menu items
- `Gallery.jsx` - Photo gallery
- `Contact.jsx` - Contact info
- `Footer.jsx` - Footer content

### Add Images

Replace the Unsplash URLs with your own images:

1. Add images to `public/assets/`
2. Update image sources in components
3. Use `/assets/your-image.jpg` as the path

---

## 🎨 Key Features

✅ **Fully Responsive** - Works on all screen sizes  
✅ **Dark Mode** - Beautiful dark theme included  
✅ **Modern Design** - Clean TailwindCSS styling  
✅ **Fast Performance** - Vite-powered build  
✅ **SEO Ready** - Semantic HTML structure  
✅ **Accessible** - ARIA labels and keyboard navigation

---

## 🆘 Troubleshooting

### Port already in use?

Change the port in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/ChigwellKebab/",
  server: {
    port: 3000, // Use any available port
  },
});
```

### Build errors?

Try deleting `node_modules` and reinstalling:

```bash
rm -rf node_modules
npm install
```

---

## 📞 Need Help?

This is a demo project, but feel free to:

- Check the main [README.md](README.md) for detailed documentation
- Review the code comments in each component
- Inspect the Tailwind classes for styling examples

---

**Happy coding! 🎉**
