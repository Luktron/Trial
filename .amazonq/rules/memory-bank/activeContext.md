# Active Context

## Current State
The application has been migrated from TXT to CSV format. The seed file is now `prova.csv` (UTF-8). Individual exam files should follow the CSV format: one header row + one row per question.

## Known Quirks
- The UTF-16 LE encoding issue from the old `prova.txt` is resolved — all CSV files are UTF-8.
- The `window.claude.use('downloads')` capability check is a Claude artifact integration hook — it will silently fall back to the copy-modal in standard browsers.
- The parser skips rows where any of the 5 alternative columns is empty or the gabarito letter is invalid.
- The header row (`titulo,enunciado,A,B,C,D,E,gabarito`) is detected by the `titulo` value being literally `"titulo"` (case-insensitive) and is skipped.

## Recent Focus
- Migration from TXT to CSV format (parser, exporter, UI labels, seed file fetch, help modal, modelo download)

## Next Likely Tasks
- Create `prova.csv` seed file from existing `prova_N.txt` content
- Add question randomisation / shuffle mode
- Add timer per exam
- Add ability to edit/rename existing exams
- Add keyboard navigation (arrow keys, Enter to confirm)
