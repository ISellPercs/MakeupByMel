# Makeup by Mel - Website

A beautiful, modern React website for a professional makeup artist in Phoenix, Arizona.

## Features

- ✨ Elegant nude, black, and gold color palette
- 📱 Fully responsive design (mobile-first)
- 🎨 Smooth animations with Framer Motion
- 📸 Portfolio gallery with filtering
- 📅 Calendly integration for booking
- 📝 Contact form
- 🔗 Instagram integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the project folder:
   ```bash
   cd makeup-by-mel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Customization

### Adding Your Photos

Replace the placeholder images in the components:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Replace the `hero-image-placeholder` div with an actual `<img>` tag

2. **About Section** (`src/components/About.jsx`):
   - Replace the `about-image-placeholder` div with your branded photo

3. **Portfolio Section** (`src/components/Portfolio.jsx`):
   - Add your portfolio images to the `portfolioItems` array
   - Place images in `src/assets/` folder

### Updating Content

1. **About Text**: Edit `src/components/About.jsx` - replace the Lorem Ipsum text
2. **Services & Pricing**: Edit `src/components/Services.jsx` - update prices and descriptions
3. **Experience Badge**: Edit the years in `src/components/About.jsx`

### Setting Up Calendly

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. In `src/components/Contact.jsx`, find the Calendly section
3. Uncomment the iframe and replace `YOUR_CALENDLY_USERNAME` with your actual username

### Contact Form

The contact form currently simulates submission. To make it functional:

**Option 1: Formspree (Easy)**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `Contact.jsx`

**Option 2: Netlify Forms**
1. Add `data-netlify="true"` to the form tag
2. Deploy on Netlify

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy - that's it!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

## Project Structure

```
makeup-by-mel/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Your images go here
│   ├── components/
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Services.jsx/.css
│   │   ├── Portfolio.jsx/.css
│   │   ├── Contact.jsx/.css
│   │   └── Footer.jsx/.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css        # Global styles & color palette
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Color Palette

```css
/* Nude (Primary) */
--nude-lightest: #FAF7F5
--nude-light: #F5EBE6
--nude-base: #E8D5C8
--nude-medium: #D4B8A5
--nude-dark: #C9A68F

/* Black (Secondary) */
--black-soft: #1A1A1A
--black-medium: #2D2D2D

/* Gold (Accent) */
--gold-light: #E8D5A3
--gold-base: #C9A962
--gold-rich: #B8963F
```

## Contact Information

- **Email**: mua.makeupbymel@gmail.com
- **Location**: Phoenix, Arizona
- **Instagram**: [@mel.anie.ruvalcaba](https://instagram.com/mel.anie.ruvalcaba)

---

Hope you like it my love - Brian ♥ 
