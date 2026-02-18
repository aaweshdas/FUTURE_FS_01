# FUTURE_FS_01
# 🚀 Personal Portfolio Website

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, and **Vite**. This project features a responsive design, smooth animations, and a glassmorphism aesthetic to showcase professional skills, projects, and experience.

## ✨ Features

- **🎨 Modern Aesthetics**: Dark theme with glassmorphism effects, gradients, and custom scrollbars.
- **⚡ High Performance**: Built on Vite for lightning-fast HMR and bundles.
- **📱 Fully Responsive**: Optimized for all devices (Mobile, Tablet, Desktop).
- **🌊 Animated Backgrounds**: Interactive particle and star animations using Canvas and CSS.
- **✨ Smooth Animations**: Scroll reveal and entry animations powered by **Framer Motion**.
- **🛠️ Dynamic Sections**:
  - **Hero**: Engaging introduction with resume download.
  - **About**: Personal bio and highlights.
  - **Skills**: Visual representation of technical expertise.
  - **Projects**: Showcase of key projects with GitHub/Live links.
  - **Experience & Education**: Timeline-based history.
  - **Contact**: Integrated contact form (Mailto) and social links.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 + CSS Variables (No external CSS frameworks)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing/Scroll**: [React Scroll](https://www.npmjs.com/package/react-scroll)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have **Node.js** (v18+) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-project.git
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

Create a production-ready build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```bash
src/
├── assets/            # Static assets (images, etc.)
├── components/        # Reusable React components
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact form section
│   ├── Hero.tsx       # Landing area
│   ├── Navbar.tsx     # Navigation bar
│   ├── Projects.tsx   # Projects showcase
│   └── ...            # Other sections
├── App.tsx            # Main application layout
├── index.css          # Global styles & CSS variables
└── main.tsx           # Entry point
```

## 🎨 Customization

### Updating Content
All data (Projects, Experience, Skills) is contained within the component files in various data arrays. You can easily modify these arrays to update your portfolio content.

### Changing Theme Colors
The entire color palette is defined in `src/index.css` under the `:root` variable scope. 

```css
:root {
  --accent-primary: #7c3aed;  /* Change primary color */
  --accent-secondary: #06b6d4; /* Change secondary color */
  /* ... */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the Aarav License - see the [LICENSE](LICENSE) file for details.

