# Project Brief — EXAM://PROTOCOL

## Purpose
A self-contained, single-file HTML quiz application for practicing multiple-choice exams ("provas"). Designed for a Brazilian Portuguese audience preparing for the "Assistente de Tecnologia" civil-service exam.

## Core Requirements
- Load and display multiple-choice exams from `.csv` files
- Allow users to add new exams via file upload or paste
- Navigate questions one by one with progress tracking
- Show final score and per-question review after completion
- Persist exams across sessions using `localStorage`
- Export any exam back to `.csv` format
- Work entirely client-side — no server, no build step

## Constraints
- Single HTML file (`exam-protocol.html`) — all CSS and JS are inline
- No external dependencies or frameworks
- Must work offline (after initial load)
- Language: Brazilian Portuguese UI
