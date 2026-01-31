
# Developer Portfolio | Built with Astro

A high-performance, SEO-optimized portfolio built with **Astro**, **TypeScript**, and **Tailwind CSS**. This project leverages Astro's "Island Architecture" to deliver a blazing-fast user experience with specialized features like a custom i18n system and adaptive theming.

## Key Features

* **🚀 Astro Performance:** Zero-runtime JavaScript by default, ensuring lightning-fast load times and perfect Lighthouse scores.
* **🌍 Type-Safe i18n:** A custom-built internationalization engine supporting English and Spanish, integrated directly into Astro's build process.
* **🌓 Adaptive Theming:** Seamless Dark and Light mode transitions with specialized "Light" variants using Tailwind's `light:` modifier (custom implementation).
* **🛡️ Type Safety:** Fully typed props and data structures with **TypeScript**.
* **🎨 Modern UI/UX:** Features advanced Tailwind techniques: backdrop blurs, custom animations, and responsive grid layouts.
* **📧 Dynamic Assets:** Context-aware CV downloads and email management based on the active locale.

## Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Core:** [TypeScript](https://www.typescriptlang.org/)
* **Styles:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** Optimized for Vercel/Netlify

## Getting Started

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/JonayKB/portfolio.git
cd portfolio
```


2. **Install dependencies:**
```bash
npm install
```


3. **Start the development server:**
```bash
npm run dev
```


4. **Build for production:**
```bash
npm run build
```

## Project Structure

```text
├── src/
│   ├── components/     # Astro components (.astro)
│   ├── i18n/           # Type-safe dictionaries (es.ts, en.ts)
│   ├── layouts/        # BaseLayout and Page wrappers
│   └── pages/          # File-based routing
├── public/             # Static assets (PDF CVs, original images)
├── astro.config.mjs    # Astro configuration
└── tailwind.config.js  # Theme & Glassmorphism definitions
```
## Author

**Jonay Contreras Rodríguez**

* **LinkedIn:** [linkedin.com/in/jonaykb](https://www.linkedin.com/in/jonay-contreras-rodriguez/)
* **Portfolio:** [jonaykb.dev](https://me.jonaykb.com)
