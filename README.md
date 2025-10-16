README TAILWIND.txt

# 🚀 tailwind-landing-page

Buid a Modern UI (User Interface), responsive landing page template built entirely with **Tailwind CSS v4.1 (Latest)**. This project is designed to be a clean, fast, and highly customizable starting point for your next product, service, or personal website, leveraging the high-performance features of the new Tailwind CSS engine.

-----

## ✨ Demo

Modern User Interface: Vercel

-----

## ✨ Features

This landing page is packed with essential sections, all styled with utility-first classes:

  * **Built on Tailwind CSS v4.1.x** for maximum performance (up to 5x faster builds).
  * **Responsive Design** (Mobile-first approach).
  * **Hero Section** with a strong call-to-action (CTA).
  * **Feature Sections** to highlight key benefits.
  * **Header** and **Footer** components.
  * **Dark Mode Support** included by default.
  * Uses the modern, simplified CSS-first configuration.

Tailwind [UI Blocks](https://tailwindcss.com/plus/ui-blocks/marketing) used : 

  * Navbar
  * Mode
  * Prices
  * Testimonials
  * Newsletter
  * Team
  * Contact

-----

## 🛠 Getting Started

Follow these instructions to set up the project locally using **Vite** as the build tool and the recommended **@tailwindcss/vite** plugin.

### Prerequisites

You need [Node.js](https://nodejs.org/en/) and npm (or yarn/pnpm) installed on your machine.

```bash
# Check if Node.js is installed
node -v
# Check if npm is installed
npm -v
```

### Installation (Vite/React Setup)

1.  **Create your project (if not already done):**

    If you are setting up a new React project with Vite:

    ```bash
    npm create vite@latest my-project
    cd my-project
    ```

2.  **Install Tailwind CSS:**

    Install `tailwindcss` and the dedicated `tailwindcss/vite` plugin.

    ```bash
    npm install tailwindcss @tailwindcss/vite
    ```

3.  **Configure the Vite plugin:**

    Add the `@tailwindcss/vite` plugin to your Vite configuration file (`vite.config.js` or `vite.config.ts`).

    ```javascript
    // vite.config.ts (or vite.config.js)
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        // Add the Tailwind CSS plugin here
        tailwindcss(),
      ],
    })
    ```

4.  **Import Tailwind CSS:**

    Add the required `@import` statement to your main CSS file (e.g., `src/index.css` or `src/App.css`).

    ```css
    /* src/index.css or your main CSS file */
    @import "tailwindcss";

    /* You can add your custom global styles below this line */
    ```

### Development

Run the command configured in your `package.json` to start the development server:

```bash
npm run dev
```
### Use Tailwind in your HTML

Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

```HTML
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/src/index.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</body>
</html>
```

### Building for Production

To create an optimized, minified production build:

```bash
npm run build
```

The Tailwind v4 engine automatically handles importing, vendor prefixing, and purging unused CSS, resulting in the smallest possible production bundle.

-----

## 🎨 Customization (CSS-First Configuration)

In Tailwind CSS v4.1, customization primarily happens directly in CSS using the new directives.

### Theme Variables and Inter Font

The primary way to customize colors, spacing, and typography is through CSS variables in a `@theme` block.

To use the recommended **Inter** typeface for a modern UI look:

1.  Include the CDN link in your main HTML file (e.g., `index.html`):

    ```html
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    ```

2.  Set the font in your project's theme:

    ```css
    /* In your main CSS file */
    @theme {
      --font-sans: InterVariable, sans-serif;
      --font-sans--font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    }

    Or
    /* If you get an error, use this config */
    :root {
      --font-sans: InterVariable, sans-serif;
      --font-sans--font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    }

    @import "tailwindcss";
    /* ... rest of your CSS */
    ```

### Dark Mode Support

The template supports the `class` strategy for dark mode. Apply the following classes to your root `<html>` element (or component containing your page structure):

```html
<html class="bg-white dark:bg-gray-950 scheme-light dark:scheme-dark">
  </html>
```

-----

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

-----

