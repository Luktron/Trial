# Product Context

## Problem Solved
Candidates preparing for the "Assistente de Tecnologia" exam need a way to practice multiple-choice questions repeatedly. This tool provides a portable, offline-capable quiz environment without requiring any installation or internet connection.

## How It Works
1. On first load, the app fetches `prova.csv` from the same directory and parses it into exam objects stored in `localStorage`.
2. On subsequent loads, exams are read directly from `localStorage` (key: `examProtocolProvas_v1`).
3. Users can add more exams at any time via the "+ Adicionar prova" modal (CSV upload or paste).
4. Each exam session tracks answers per question; the user can navigate freely and must answer before advancing.
5. After finishing, a results screen shows score, percentage, and a per-question breakdown with correct/wrong highlighting.

## User Experience Goals
- Cyberpunk / neon aesthetic (cyan, magenta, purple on dark background)
- Animated glitch title effect
- Animated CSS grid background
- Responsive layout (max-width 720 px, mobile-friendly)
- Minimal friction: one file, open in browser, start studying
