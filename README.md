# Shadman Shahriar - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, beautiful gradients, and a professional design showcasing my skills and experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **SEO Optimized**: Ready for deployment with proper meta tags and structure
- **Auto Deployment**: Configured with gh-pages for automatic GitHub Pages deployment

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with gh-pages

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal information and education
3. **Experience**: Detailed work history and achievements
4. **Skills**: Technical skills organized by category
5. **Projects**: Featured projects with technologies used
6. **Contact**: Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shahriar0104/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🚀 Deployment

### Quick Deployment with gh-pages

The easiest way to deploy your portfolio:

```bash
# Deploy directly to GitHub Pages
npm run deploy
```

Or use the enhanced deployment script:

```bash
# Using the deployment script (recommended)
npm run deploy:script
```

Or use the bash script:

```bash
# Using the bash deployment script
./deploy.sh
```

### Manual Deployment Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Your site will be live at**: https://shahriar0104.github.io/portfolio

### Alternative Deployment Options

#### GitHub Pages (Manual)
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch and folder (dist)
4. Your site will be available at `https://username.github.io/repository-name`

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project
3. Deploy with one click

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 📁 Project Structure

```
portfolio/
├── public/
├── scripts/
│   └── deploy.js          # Deployment script
├── src/
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
├── deploy.sh              # Bash deployment script
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors and Styling
- Modify the gradient colors in `src/index.css` under the `.gradient-text` class
- Update the color scheme in `tailwind.config.js`
- Customize animations in the Tailwind config

### Content
- Update personal information in `src/App.jsx`
- Modify project details, experience, and skills
- Update contact information and social links

### Animations
- Adjust animation timings in Framer Motion components
- Modify animation variants for different effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run deploy:script` - Enhanced deployment with script
- `./deploy.sh` - Bash deployment script

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📞 Contact

- **Email**: info@shadman.tech
- **Phone**: +8801965392623
- **LinkedIn**: https://www.linkedin.com/in/swe-shadman/
- **GitHub**: https://github.com/shahriar0104

---

Built with ❤️ by Shadman Shahriar
