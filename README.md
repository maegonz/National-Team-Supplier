# Elite Sports Equipment - National Team Supplier Website

A modern, responsive website for a national team equipment supplier built with React and Vite.

## Features

- 🎨 Modern, clean UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Interactive navigation with smooth scrolling
- 📝 Contact form with validation
- 🎭 Component-based architecture
- ✨ Modern CSS with gradients and animations

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Modern CSS** - Custom styling with CSS variables
- **Inter Font** - Google Fonts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
national-team-supplier/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Eye-catching hero section with call-to-action buttons
- **About** - Company information and statistics
- **Products** - Product showcase grid
- **Services** - Service offerings
- **Testimonials** - Customer testimonials
- **Contact** - Contact form and information
- **Footer** - Footer with links and newsletter signup

## Customization

The website uses CSS variables for easy theming. Edit the `:root` variables in `src/index.css` to change colors:

```css
:root {
  --primary-color: #1a73e8;
  --secondary-color: #34a853;
  --accent-color: #ea4335;
  /* ... */
}
```

## License

MIT

