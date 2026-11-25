# Algo Lab — Step-by-Step Data Structures & Algorithms

Learn data structures and algorithms in 86 short lessons. Each one is a step-by-step walkthrough with an isometric diagram that moves as you go.

## Features

- **86 Interactive Lessons across 14 Chapters**:
  - Basics & Foundations
  - Arrays & Strings
  - Linked Lists
  - Stacks & Queues
  - Hash Tables
  - Trees & Binary Search Trees
  - Heaps & Priority Queues
  - Graphs & Traversal (BFS / DFS)
  - Sorting & Searching
  - Recursion & Backtracking
  - Dynamic Programming
  - Greedy Algorithms
- **Dynamic Isometric Step-by-Step Visualizations**: Visual walkthroughs that update interactively at every step.
- **Multilingual Support**: Built-in localization support across multiple languages.
- **Dark and Light Theme**: Respects system preferences and manual toggles.
- **Progress Tracking**: Tracks your completed lessons and learning progress in `localStorage`.
- **Zero-Dependency Quick Start**: Runs instantly with Node.js built-in server, with no external package downloads required.

## Quick Start (Run Locally)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The production output is generated in the `dist/` directory, ready to deploy to Vercel, Netlify, GitHub Pages, or any static hosting service.

## Deploy to Vercel

A `vercel.json` file is included for SPA route fallback. You can import this repository directly into Vercel:
- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
