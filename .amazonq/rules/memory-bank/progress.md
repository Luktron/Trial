# Progress

## What Works
- [x] Full quiz flow: menu → question navigation → results
- [x] localStorage persistence (load on start, save on add/delete)
- [x] CSV parser: groups rows by `titulo`, RFC-4180 quoted-field support
- [x] Add exam via CSV file upload or paste
- [x] Export exam to `.csv` download (with copy-modal fallback)
- [x] Delete exam (with guard: minimum 1 exam required)
- [x] Progress bar and question counter
- [x] Per-question result review with correct/wrong highlighting
- [x] Cyberpunk UI with glitch title animation and animated grid background
- [x] Responsive layout (mobile-friendly)
- [x] "Ver formato CSV" help modal
- [x] "Baixar modelo CSV" sample download

## What's Missing / Potential Improvements
- [ ] Create `prova.csv` seed file (migrate content from old `prova_N.txt` files)
- [ ] Question shuffle / randomisation mode
- [ ] Exam timer
- [ ] Edit exam title or questions in-app
- [ ] Keyboard navigation support
- [ ] Score history / attempt tracking
- [ ] Filter/search exams in menu
- [ ] Dark/light theme toggle (currently dark-only)
