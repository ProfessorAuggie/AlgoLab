# AlgoLab — Interactive DSA Learning Platform

A responsive, client-side learning app for Data Structures and Algorithms, built with React and Vite. The interface is inspired by modern bite-sized learning platforms and is an independent implementation.

## Features

- 15 topic areas spanning foundations, data structures, and algorithms
- Guided lesson lists with examples, key takeaways, and complexity snapshots
- Interactive Big O growth-rate chart
- Sorting visualizer with shuffle, reset, and animated bubble sort
- Practice quiz with explanations and a final score
- Lesson completion tracking and course progress
- Saved lessons and personal notes
- Searchable course navigation
- Dark and light themes
- Responsive desktop and mobile layouts
- Progress, notes, saved lessons, and theme persist in browser `localStorage`

## Requirements

- Node.js 18.0 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to Vercel, Netlify, or any static hosting provider. A `vercel.json` file is included for SPA route fallback.

## Project structure

```text
algolab/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Notes

This is a complete frontend starter, not a hosted SaaS product. It does not currently include accounts, cloud sync, a server database, or remote code execution. User progress is stored locally in the browser. Code examples are educational snippets and are not executed by the app.
