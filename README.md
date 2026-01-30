<div align="center">

# ZenYukti Website

**Modern, Fast, and Accessible Web Experience**

[![Live Website](https://img.shields.io/badge/%20Live%20Website-Visit%20Now-blue?style=for-the-badge)](https://zenyukti.in/)
[![GitHub Stars](https://img.shields.io/github/stars/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=yellow)](https://github.com/ZenYukti/zenyukti.github.io/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=green)](https://github.com/ZenYukti/zenyukti.github.io/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=red)](https://github.com/ZenYukti/zenyukti.github.io/issues)

[![Build Status](https://img.shields.io/github/actions/workflow/status/ZenYukti/zenyukti.github.io/deploy.yml?style=flat-square&logo=github-actions)](https://github.com/ZenYukti/zenyukti.github.io/actions)
[![License](https://img.shields.io/github/license/ZenYukti/zenyukti.github.io?style=flat-square)](LICENSE)
[![Code Size](https://img.shields.io/github/languages/code-size/ZenYukti/zenyukti.github.io?style=flat-square)](https://github.com/ZenYukti/zenyukti.github.io)
[![Last Commit](https://img.shields.io/github/last-commit/ZenYukti/zenyukti.github.io/dev?style=flat-square&label=last%20commit%20(dev))](https://github.com/ZenYukti/zenyukti.github.io/commits/dev)

---

**[Live Demo](https://zenyukti.in/) • [Documentation](https://github.com/ZenYukti/zenyukti.github.io/wiki) • [Report Bug](https://github.com/ZenYukti/zenyukti.github.io/issues) • [Request Feature](https://github.com/ZenYukti/zenyukti.github.io/issues)**

</div>

---

## Table of Contents

<details>
<summary>Click to expand</summary>

- [ZenYukti Website](#zenyukti-website)
  - [Table of Contents](#-table-of-contents)
  - [About The Project](#about-the-project)
    - [Key Features](#-key-features)
  - [Built With](#built-with)
    - [Technology Stack](#technology-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Development Workflow](#development-workflow)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Roadmap](#roadmap)
    - [Upcoming Features](#upcoming-features)
    - [Recent Achievements](#recent-achievements)
  - [Contributing](#contributing)
    - [Quick Start for Contributors](#quick-start-for-contributors)
    - [Development Guidelines](#development-guidelines)
    - [Code of Conduct](#code-of-conduct)
  - [Testing](#testing)
    - [Testing Strategy](#testing-strategy)
  - [Deployment](#deployment)
    - [Automatic Deployment](#automatic-deployment)
    - [Development Branch](#development-branch)
    - [Manual Deployment](#manual-deployment)
    - [Environment Variables](#environment-variables)
  - [Performance](#performance)
    - [Performance Optimizations](#performance-optimizations)
  - [Browser Support](#browser-support)
  - [License](#license)
  - [Contact](#contact)
  - [Contributors](#contributors)
  - [Acknowledgments](#acknowledgments)

</details>

---

## About The Project

<div align="center">
  <img src="public\assets\landing-page.png" alt="Zenyukti Website Screenshot" width="800">
</div>

<br>

Zenyukti Website is a modern, responsive web application built with cutting-edge technologies to deliver exceptional user experiences. Our mission is to provide a fast, accessible, and visually appealing platform that serves our community's needs.

### Key Features

- 📱 **Fully Responsive** - Seamless experience across all devices and screen sizes
- ⚡ **Lightning Fast** - Optimized performance with <3s load times
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 🎨 **Modern Design** - Clean, intuitive user interface
- 🌙 **Dark Mode Support** - Toggle between light and dark themes (Coming Soon)
- 🔧 **Developer Friendly** - Well-documented codebase with modern tooling
- 🚀 **CI/CD Pipeline** - Automated testing and deployment (Coming Soon)
- 🔍 **Detailed Info** - Visit Wiki pages [Home Page - wiki | ZenYukti](https://github.com/ZenYukti/zenyukti.github.io/wiki)

---

## Built With

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.ecma-international.org/ecma-262/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ | Core web technologies |
| **Build Tool** | Vite | Fast build tool and dev server |
| **Package Manager** | npm | Dependency management |
| **Version Control** | Git | Source code management |
| **Hosting** | GitHub Pages | Static site hosting |
| **CI/CD** | GitHub Actions | Automated workflows |

---

## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
# Node.js (LTS version recommended)
node --version  # Should be v16.0.0 or higher

# npm (comes with Node.js)
npm --version   # Should be v7.0.0 or higher

# Git
git --version   # Any recent version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZenYukti/zenyukti.github.io.git
   cd zenyukti.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (if needed)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   
   Visit `http://localhost:5173` (or the URL shown in your terminal)

3. **Start coding!**
   
   The app will automatically reload when you make changes.

4. **Want to contribute?**
   
   Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed information on our development workflow, branch strategy, and how to submit pull requests.

---

## Usage

### Basic Usage

The website is designed to be intuitive and user-friendly. Simply navigate to the [live site](https://zenyukti.github.io/) to explore all features.

### Development Workflow

> **IMPORTANT:** We use a `dev` branch for development. Please see our [Branch Strategy](BRANCH_STRATEGY.md) document for details on our branching model.

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure
```
website/
├── 📁 .github/                    # GitHub configuration
│   └── 📄 PULL_REQUEST_TEMPLATE.md # PR template
├── 📁 public/                     # Public assets served as-is
│   ├── 📁 assets/                 # Static assets
│   │   ├── � favicons/           # Favicon files
│   │   ├── 📁 profile/            # Team member profile images
│   │   └── � teamImages/         # Team photos
│   ├── 📄 events.json             # Events data
│   ├── � favicon.ico             # Main favicon
│   ├── 📄 robots.txt              # Robots crawl instructions
│   └── 📄 sitemap.xml             # Site map for SEO
├── 📁 src/                        # Source code
│   ├── 📁 assets/                 # Application assets
│   │   └── � teamdata/           # Team data files
│   ├── 📁 components/             # Reusable React components
│   │   ├── 📁 ui/                 # UI components
│   │   ├── 📄 DomainsPreview.tsx  # Domain preview component
│   │   ├── � EventCard.tsx       # Event card component
│   │   ├── 📄 Footer.tsx          # Footer component
│   │   ├── 📄 Header.tsx          # Header component
│   │   ├── 📄 Hero.tsx            # Hero section component
│   │   ├── � icons.ts            # Icon components
│   │   ├── 📄 Purpose.tsx         # Purpose section component
│   │   ├── 📄 ScrollToHash.tsx    # Scroll to hash helper
│   │   └── 📄 ScrollToTop.tsx     # Scroll to top component
│   ├── 📁 hooks/                  # Custom React hooks
│   │   ├── 📄 use-mobile.tsx      # Mobile detection hook
│   │   └── 📄 use-toast.ts        # Toast notification hook
│   ├── 📁 lib/                    # Utility libraries
│   │   └── 📄 utils.ts            # Utility functions
│   ├── 📁 media/                  # Media files
│   ├── 📁 pages/                  # Page components
│   │   ├── 📄 About.tsx           # About page
│   │   ├── 📄 CodeOfConduct.tsx   # Code of conduct page
│   │   ├── 📄 Community.tsx       # Community page
│   │   ├── 📄 Contact.tsx         # Contact page
│   │   ├── 📄 Index.tsx           # Home page
│   │   ├── 📄 Join-us.tsx         # Join us page
│   │   ├── 📄 NotFound.tsx        # 404 page
│   │   ├── 📄 Privacy.tsx         # Privacy policy page
│   │   ├── 📄 Projects.tsx        # Projects page
│   │   ├── 📄 Team.tsx            # Team page
│   │   └── 📄 TermsOfService.tsx  # Terms of service page
│   ├── 📄 App.css                 # Main application styles
│   ├── 📄 App.tsx                 # Root React component
│   ├── 📄 index.css               # Global styles
│   └── 📄 main.tsx                # Application entry point
├── 📄 .gitignore                  # Git ignore patterns
├── 📄 BRANCH_STRATEGY.md          # Branch strategy documentation
├── 📄 components.json             # shadcn/ui component configuration
├── 📄 CONTRIBUTING.md             # Contributing guidelines
├── 📄 eslint.config.js            # ESLint configuration
├── 📄 index.html                  # HTML template
├── 📄 LICENSE                     # License information
├── 📄 package-lock.json           # Locked dependency versions
├── 📄 package.json                # Project configuration & dependencies
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 README.md                   # Project documentation (this file)
├── 📄 tailwind.config.ts          # Tailwind CSS configuration
├── 📄 tsconfig.app.json           # TypeScript config for app
├── 📄 tsconfig.json               # Main TypeScript configuration
├── 📄 tsconfig.node.json          # TypeScript config for Node.js
├── 📄 vercel.json                 # Vercel deployment configuration
└── 📄 vite.config.ts              # Vite build tool configuration
```
---

## Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | Start development server | Development |
| `npm run build` | Build for production | Deployment |
| `npm run preview` | Preview production build | Testing |
| `npm run lint` | Run ESLint | Code quality |
| `npm run lint:fix` | Fix ESLint issues | Code quality |
| `npm run format` | Format with Prettier | Code style |
| `npm test` | Run test suite | Testing |
| `npm run test:watch` | Run tests in watch mode | Development |
| `npm run deploy` | Deploy to GitHub Pages | Deployment |

---

## Roadmap

See the [open issues](https://github.com/ZenYukti/zenyukti.github.io/issues) for a full list of proposed features and known issues.

### Upcoming Features

- [ ] **Progressive Web App** - PWA capabilities
- [ ] **Advanced Community Features** - Enhanced community engagement tools
- [ ] **Event Management System** - Improved event handling and registration
- [ ] **Member Dashboard** - Personalized dashboard for community members
- [ ] **Project Showcase Expansion** - Enhanced project portfolio display

### Recent Achievements

- [x] **Responsive Design** - Mobile-first approach
- [x] **SEO Optimization** - Search engine optimization
- [x] **Community Portal** - Dedicated community pages
- [x] **Events Integration** - Community events display

---

## Contributing

We love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements.

### Quick Start for Contributors

1. **Fork the repo**
2. **Create your feature branch from the `dev` branch** (`git checkout -b feature/AmazingFeature upstream/dev`)
3. **Make your changes**
4. **Run tests** (`npm test`)
5. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
6. **Push to the branch** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request targeting the `dev` branch**

> **IMPORTANT:** All pull requests must target the `dev` branch, not the `main` branch. We use `dev` for development and integration before merging to `main` for production.

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure CI/CD pipeline passes

### Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Testing

We maintain high code quality through comprehensive testing.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

### Testing Strategy

- **Unit Tests** - Individual component testing
- **Integration Tests** - Feature testing
- **End-to-End Tests** - Full user journey testing
- **Performance Tests** - Load and performance testing

---

## Deployment

### Automatic Deployment

The project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Development Branch

We use a `dev` branch for development and integration. All feature work and pull requests should target this branch. After thorough testing, changes from `dev` are merged into `main` for production deployment.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `VITE_APP_TITLE` | App title | `Zenyukti` |
| `VITE_API_URL` | API endpoint | `undefined` |

---

## Performance

<div align="center">

| Metric | Desktop | Mobile |
|--------|---------|--------|
| **Performance** | 98 | 95 |
| **Accessibility** | 100 | 100 |
| **Best Practices** | 100 | 95 |
| **SEO** | 100 | 100 |

*Lighthouse scores (out of 100)*

</div>

### Performance Optimizations

- **Code Splitting** - Lazy loading of components
- **Image Optimization** - WebP format with fallbacks
- **Bundle Analysis** - Regular bundle size monitoring
- **Caching Strategy** - Aggressive caching for static assets
- **CDN Usage** - Fast content delivery

---

## Browser Support

<div align="center">

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

</div>

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## Contact

<div align="center">

**Zenyukti Team**

[![Website](https://img.shields.io/badge/Website-zenyukti.github.io-blue?style=flat-square&logo=github)](https://zenyukti.in/)
[![Email](https://img.shields.io/badge/Email-info@zenyukti.in-red?style=flat-square&logo=gmail)](mailto:info@zenyukti.in)
[![Twitter](https://img.shields.io/badge/Twitter-@zenyukti-1DA1F2?style=flat-square&logo=twitter)](https://twitter.com/zenyukti)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Zenyukti-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/company/zenyukti)

**Project Links**

[🏠 Homepage](https://zenyukti.in/) • [📊 Issues](https://github.com/ZenYukti/zenyukti.github.io/issues) • [🚀 Releases](https://github.com/ZenYukti/zenyukti.github.io/releases) • [📈 Insights](https://github.com/ZenYukti/zenyukti.github.io/pulse)

</div>

---

## Contributors

<div align="center">

**Meet the amazing people who contribute to this project:**

<a href="https://github.com/ZenYukti/zenyukti.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ZenYukti/zenyukti.github.io" alt="ZenYukti Contributors" />
</a>

</div>

Want to be on this list? Check out our [Contributing Guide](CONTRIBUTING.md) to get started!

## Acknowledgments

<div align="center">

**Special Thanks To:** 

</div>

- The open-source community for inspiration and resources
- 🛠️ [Vite](https://vitejs.dev/) team for the amazing build tool
- 🎨 [GitHub](https://github.com/) for hosting and CI/CD capabilities
- 📚 [MDN Web Docs](https://developer.mozilla.org/) for comprehensive documentation

---

<div align="center">

**Made with  by the Zenyukti Team**

**Star this repository if you find it helpful!**

[![GitHub Stars](https://img.shields.io/github/stars/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/watchers)

</div>
