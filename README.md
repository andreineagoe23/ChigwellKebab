# 🥙 Chigwell King Kebab & Pizza

A modern, responsive demo website for Chigwell King Kebab & Pizza - a local takeaway restaurant in Chigwell, East London.

![Hero Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🎯 Purpose

This is a **portfolio demonstration project** showcasing modern web development practices. It's designed to present what a professional restaurant website could look like - **no backend, ordering system, or functional menus included**.

## ✨ Features

- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Modern UI/UX** - Clean design with TailwindCSS
- **Smooth Scrolling** - Seamless navigation between sections
- **Performance Optimized** - Built with Vite for lightning-fast performance
- **GitHub Pages Ready** - Configured for easy deployment

## 🧱 Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Restaurant story and key statistics
3. **Menu Section** - Featured items across 4 categories (Kebabs, Burgers, Wraps, Grill Specials)
4. **Gallery Section** - Responsive image grid showcasing food
5. **Contact Section** - Location, hours, and contact information
6. **Footer** - Social links and additional navigation

## 🎨 Design

### Color Palette

- **Primary**: Deep Red (`#8B0000`)
- **Accent**: Gold (`#F5C518`)
- **Background**: Off-white / Dark gray (theme-dependent)

### Typography

- Inter & Poppins fonts from Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ChigwellKebab.git
   cd ChigwellKebab
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Enable GitHub Pages in repository settings**

   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**

   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **Automatic deployment**
   - The GitHub Action will automatically build and deploy
   - Your site will be live at: `https://yourusername.github.io/ChigwellKebab/`

### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages** (if not already installed)

   ```bash
   npm install
   ```

2. **Deploy**

   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

## 📂 Project Structure

```
ChigwellKebab/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── kebab-icon.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Menu.jsx            # Menu section
│   │   ├── Gallery.jsx         # Gallery section
│   │   ├── Contact.jsx         # Contact section
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind imports
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing
- **GitHub Pages** - Hosting

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Demo Information

**Business Name**: Chigwell King Kebab & Pizza  
**Tagline**: Freshly Grilled. Always Local.  
**Location**: Chigwell, East London  
**Phone**: 0208 555 5555  
**Hours**: Mon–Sun 11am–11pm

_Note: All contact information is placeholder data for demonstration purposes._

## 🌟 Features Showcase

### Dark Mode

Toggle between light and dark themes with a single click. Theme preference persists across page navigation.

### Smooth Scrolling

All navigation links feature smooth scrolling animations for a polished user experience.

### Hover Effects

Interactive hover effects on menu cards, gallery images, and buttons enhance engagement.

### Mobile-First Design

Fully responsive layout adapts seamlessly from mobile devices to large desktop screens.

## 📄 License

This project is a demonstration portfolio piece. Feel free to use it as inspiration for your own projects.

## 👨‍💻 Created By

**Enso Digital**

---

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Portfolio Demo Website** | Not affiliated with any real business
