# Personal Portfolio Website

A modern, responsive portfolio website built with Vite and vanilla JavaScript, featuring a dynamic particle background and clean design.

## ✨ Features

- **Modern Design**: Clean, professional appearance suitable for job applications
- **Dynamic Background**: Interactive particle animation using particles.js
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Built with Vite for optimal performance
- **GitHub Pages Ready**: Automated deployment workflow included
- **Sections**: Home, About, Projects, Assignments, and Contact

## 🚀 Technologies Used

- **Vite** - Build tool and development server
- **Vanilla JavaScript** - For interactions and animations
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **particles.js** - Dynamic background effects
- **HTML5** - Semantic markup
- **GitHub Actions** - Automated deployment

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── main.js          # Main JavaScript file with particles and interactions
│   └── style.css        # All styles with CSS variables and responsive design
├── public/              # Static assets
├── .github/
│   ├── workflows/
│   │   └── deploy.yml   # GitHub Actions deployment workflow
│   └── copilot-instructions.md
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information
Edit the following in `index.html`:
- Replace "Your Name" with your actual name
- Update the bio and about section
- Add your real project information
- Replace placeholder links with your actual URLs

### Colors and Styling
Customize the CSS variables in `src/style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... more variables */
}
```

### Particle Settings
Modify particle behavior in `src/main.js`:
```javascript
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: ['#667eea', '#764ba2', '#f093fb'] },
    // ... more settings
  }
});
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. The GitHub Action will automatically build and deploy your site

### Manual Deployment
```bash
npm run deploy
```

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Your site will be available at: `https://yourusername.github.io/repository-name`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive navigation with hamburger menu
- Flexible grid layouts
- Optimized typography scales
- Touch-friendly interactive elements

## 🎨 Design Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Variables**: Consistent theming system
- **Smooth Animations**: Fade-in effects and hover states
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Gradient Backgrounds**: Eye-catching color schemes

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio needs!

---

**Built with ❤️ using modern web technologies**
