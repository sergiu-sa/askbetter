# AskBetter – A Clear Way to Talk to AI

**AskBetter** is a visual interface for crafting better prompts—built for clarity, expression, and emotional alignment. It’s designed to support both casual and advanced users in refining how they interact with AI. The app balances human nuance with AI precision, helping users frame their intentions through mood, tone, goal, and context-based inputs.

> “Instead of learning prompt engineering, let the interface learn you.”

---

## Key Features

- **Step-by-step UI**  
  Users progress through mood, tone, urgency, complexity, goal, and assistant selection.

- **Real-time prompt preview**  
  The interface builds and displays the full prompt as the user moves through each step.

- **Dynamic visual feedback**  
  Color themes and animations respond to selected inputs, enhancing engagement and clarity.

- **UI Modes (planned)**  
  Designed to support both beginner and advanced (Pro) modes.

- **Modern UX**  
  Keyboard shortcuts, transitions, animated feedback, and a minimal but expressive design system.

- **Built with Tailwind CSS**  
  The interface uses utility-first styling for consistency and scalability.

---

## Tech Stack

- **React** – Component-based UI framework  
- **Vite** – Development environment for fast builds  
- **Tailwind CSS** – Utility-first styling  
- **Lucide React** – Icon set  
- **Framer Motion** (optional/WIP) – Animation support

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sergiu-sa/askbetter.git
cd askbetter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Project Structure Overview

```
askbetter/
├── src/
│   ├── App.jsx            # Entry point
│   ├── AskBetter.jsx      # Main UI logic
│   ├── assets/            # Visual and icon assets
│   ├── components/        # (optional modular structure)
│   └── index.css          # Tailwind setup
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Concept and Purpose

AskBetter is designed as a clarity tool—not just a productivity tool. It helps people express complex intent in simpler language. Whether you're new to AI or use it daily, this project gives you a guided path to building structured, thoughtful prompts.

---

## Current Status

This is the **initial development version**. Core functionality is in place, but several improvements are planned:

- Dark/light mode support  
- Theme personalization and saved moods  
- Mobile responsiveness refinements  
- Assistant profiles and dynamic role switching  
- Accessibility and keyboard navigation improvements

---

## License

MIT License — Open source and available for modification or use. Please give credit if you adapt it for public or commercial projects.
