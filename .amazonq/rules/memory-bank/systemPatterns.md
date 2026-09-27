# System Patterns

## Architecture
Single-file SPA (Single-Page Application) — all HTML, CSS, and JavaScript in `exam-protocol.html`. No build toolchain.

## Screen / State Machine
Three mutually exclusive `<main>` screens toggled via `hidden` attribute:
| Screen ID       | Purpose                        |
|-----------------|-------------------------------|
| `screen-menu`   | Exam list, add/export actions |
| `screen-quiz`   | Active question view           |
| `screen-result` | Score + per-question review    |

`showScreen(name)` switches between them.

## Data Model
```js
// Stored in localStorage as JSON array
[{
  id: 'p<timestamp><random>',  // unique string
  titulo: 'Nome da prova',
  questoes: [{
    enunciado: 'Texto da pergunta',
    alternativas: ['A text', 'B text', 'C text', 'D text', 'E text'],
    correta: 2  // 0-based index
  }]
}]
```

## Key Functions
| Function | Role |
|---|---|
| `parseMultipleProvas(texto)` | Groups CSV rows by `titulo` column, calls `parseProvaCsv` for each group |
| `parseCsvRow(line)` | RFC-4180-compatible CSV row splitter (handles quoted fields) |
| `parseProvaCsv(titulo, rows)` | Builds an exam object from pre-grouped CSV rows |
| `renderMenu()` | Renders exam cards in `#lista-provas` |
| `startProva(prova)` | Initialises `state` and shows quiz screen |
| `renderQuestion()` | Renders current question + options, updates progress bar |
| `finalizarProva()` | Calculates score, builds results list, shows result screen |
| `buildCsv(p)` | Serialises an exam object back to CSV format |
| `csvEscape(s)` | Wraps fields containing commas/quotes in double quotes |
| `salvarArquivo(filename, texto)` | Downloads file; falls back to copy-modal if API unavailable |
| `loadProvas()` / `saveProvas()` | localStorage read/write |

## CSV Format (canonical)
```
titulo,enunciado,A,B,C,D,E,gabarito
Minha Prova,Enunciado da primeira pergunta?,alt A,alt B,alt C,alt D,alt E,C
Minha Prova,Enunciado da segunda pergunta?,alt A,alt B,alt C,alt D,alt E,A
Segunda Prova,Pergunta da segunda prova?,op A,op B,op C,op D,op E,B
```
- Header row required: `titulo,enunciado,A,B,C,D,E,gabarito`
- Each row = one question
- `titulo` column defines the exam name; rows with the same title belong to the same exam
- Multiple exams in one file: use different `titulo` values
- `gabarito` = letter A–E (case-insensitive)
- Fields containing commas must be wrapped in double quotes (RFC-4180)

## CSS Design Tokens (CSS variables)
| Variable | Value | Use |
|---|---|---|
| `--bg` | `#050810` | Page background |
| `--cyan` | `#00fff2` | Primary accent, borders, text |
| `--magenta` | `#ff2bd6` | Secondary accent, selected state |
| `--purple` | `#8b5cf6` | Tertiary accent |
| `--success` | `#00ffab` | Correct answers, confirm buttons |
| `--danger` | `#ff2b6d` | Wrong answers, error text |
| `--text` | `#d6f7ff` | Body text |
| `--muted` | `#7d9aac` | Labels, metadata |
