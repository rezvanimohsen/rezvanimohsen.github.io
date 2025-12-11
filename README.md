# Mohsen Rezvani Alile - Personal Research Website

A modern, responsive personal website for Mohsen Rezvani Alile, a researcher at Politecnico di Milano. Built with React and Vite, featuring a professional design with the primary color #102c53.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Sections**:
  - Hero section with call-to-action buttons
  - About section with research interests and statistics
  - Research & Publications showcase
  - Contact form and social links
  - Footer with quick navigation
- **Performance**: Optimized build with fast loading times
- **Accessibility**: Semantic HTML and WCAG guidelines followed

## 🎨 Color Scheme

- **Primary Color**: #102c53 (Dark Blue)
- **Primary Light**: #1a4a7a
- **Accent Color**: #e94b3c (Red)
- **Text**: #2c3e50 (Dark Gray)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      - Navigation header
│   ├── Hero.jsx        - Hero section
│   ├── About.jsx       - About section
│   ├── Research.jsx    - Research & publications
│   ├── Contact.jsx     - Contact form
│   ├── Footer.jsx      - Footer
│   └── *.css          - Component styles
├── App.jsx            - Main app component
├── App.css            - Global styles
├── main.jsx           - Entry point
└── index.css          - Global CSS variables
```

## 🔧 Development

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Building
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

## 📤 Deployment to GitHub Pages

### Option 1: Manual Deployment
```bash
# Build the project
npm run build

# Copy dist contents to root
cp -r dist/* .

# Remove dist directory
rm -rf dist

# Commit and push
git add .
git commit -m "Deploy: Update website"
git push origin main
```

### Option 2: Using Deploy Script
```bash
chmod +x deploy.sh
./deploy.sh
```

## 📝 Customization

### Update Content
Edit the component files in `src/components/` to update:
- Name and affiliation (Header.jsx)
- Bio and research interests (About.jsx)
- Publications list (Research.jsx)
- Contact information (Contact.jsx)

### Change Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #102c53;
  --accent-color: #e94b3c;
  /* ... other variables */
}
```

### Add Social Links
Update the social links in `src/components/Contact.jsx` to link to your profiles.

## 📊 Sections

### Hero Section
Main landing section with welcome message and call-to-action buttons.

### About Section
Showcases:
- Professional background
- Research interests with checkmark list
- Education and experience
- Key statistics (years of research, publications, collaborations)

### Research & Publications
Features:
- Publication cards with DOI links
- Year badges
- Research highlights with icons
- Links to Google Scholar, GitHub, and LinkedIn

### Contact Section
Includes:
- Email contact
- Affiliation information
- Social media links
- Contact form

## 🎯 Technologies Used

- **React 19.2.0** - UI framework
- **Vite 7.2.5** (rolldown) - Build tool
- **CSS3** - Styling with CSS variables and flexbox/grid
- **JavaScript ES6+** - Modern JavaScript

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Mohsen Rezvani Alile  
Researcher at Politecnico di Milano  
[mohsen.rezvani@polimi.it](mailto:mohsen.rezvani@polimi.it)

---

**Built with ❤️ using React & Vite**

