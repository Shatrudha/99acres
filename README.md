# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Real Estate Portal

This is a real-estate portal frontend project built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.
The project is designed similar to a property listing website where users can explore properties, search locations, view curated sections, check testimonials, open mobile app pages, and interact with different homepage menus.

## Project Features

* 99acres-style homepage UI
* Buy, Rent, New Launch, Commercial, Plots/Land, Projects sections
* Sticky top search bar on scroll
* Hover menus for:

  * All India
  * For Buyers
  * For Tenants
  * For Owners
  * For Dealers / Builders
  * Contact support
* Search box with mic and location icons
* Tooltip popup on mic and location hover
* Explore popup for Buy, Rent, Plots/Land, and PG/Co-living
* Curated Quick Links with working Buy / Rent tabs
* Left and right arrow slider for Curated Quick Links
* Article tabs for News, Tax & Legal, Help Guides, and Investment
* Testimonials page
* Mobile Apps page
* Owner Services page
* View Number popup
* Post Property route
* Responsive UI styling using Tailwind CSS

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Lucide React Icons

## Project Structure

```txt
real-estate-portal/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Buy.tsx
│   │   ├── Rent.tsx
│   │   ├── Commercial.tsx
│   │   ├── PlotsLand.tsx
│   │   ├── MobileApps.tsx
│   │   ├── OwnerServices.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── README.md
└── vite.config.ts
```

## Install Dependencies

Run this command inside the project folder:

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

After running this command, open the local URL shown in the terminal.

Usually it is:

```txt
http://localhost:5173
```

## Build Project

To create a production build:

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## GitHub Push Guide

### 1. Check current branch

```bash
git branch
```

The branch with `*` is your current branch.

Example:

```bash
* main
```

or

```bash
* SCRUM-99-homepage-ui-fixes
```

### 2. Check changed files

```bash
git status
```

This command shows all modified, added, or deleted files.

Example:

```bash
modified: src/pages/Home.tsx
modified: src/App.tsx
```

### 3. Add changed files

To add all changed files:

```bash
git add .
```

To add only one file:

```bash
git add src/pages/Home.tsx
```

### 4. Commit changes

```bash
git commit -m "Update homepage UI and interactions"
```

Use a clear commit message based on the work done.

Examples:

```bash
git commit -m "Fix curated quick links slider"
git commit -m "Add testimonials and mobile apps pages"
git commit -m "Update owner and dealer menu UI"
```

### 5. Push code to GitHub

If the branch already exists on GitHub:

```bash
git push
```

If pushing this branch for the first time:

```bash
git push -u origin branch-name
```

Example:

```bash
git push -u origin SCRUM-99-homepage-ui-fixes
```

### 6. Check current branch name

```bash
git branch --show-current
```

Then use that branch name while pushing:

```bash
git push -u origin your-branch-name
```

## Common Git Commands

### See file changes

```bash
git status
```

### See branch name

```bash
git branch --show-current
```

### Add all files

```bash
git add .
```

### Commit changes

```bash
git commit -m "Your commit message"
```

### Push changes

```bash
git push
```

### Pull latest code

```bash
git pull origin main
```

## Notes

* Do not directly edit files without checking the current branch.
* Always run `git status` before pushing code.
* Always commit with a meaningful message.
* If working on a feature, use a separate branch instead of directly changing `main`.
* Run the project locally before pushing to make sure there are no UI or TypeScript errors.
