# vue_app_v0.2

This is a minimal Vite + Vue 3 + TypeScript project scaffold created to match the requested structure.

Project structure

```
vue_app_v0.2/
├─ public/              # Static assets served as-is (index.html, images, etc.)
├─ src/
│  ├─ assets/           # Static assets used by source (images, styles)
│  ├─ views/            # Page-level Vue components (Home.vue, etc.)
│  ├─ router/           # TypeScript-based vue-router setup (index.ts)
│  ├─ App.vue           # Root component
│  └─ main.ts           # App bootstrap
├─ tsconfig.json        # TypeScript configuration
├─ vite.config.ts       # Vite configuration
├─ package.json         # npm scripts + dependencies
└─ README.md            # This file
```

How to use

1. Install dependencies:

   npm install

2. Run dev server:

   npm run dev

3. Build for production:

   npm run build

Notes

- Router is implemented in TypeScript at `src/router/index.ts`.
- Static public files belong in the `public` folder and are referenced at the root (`/`).
