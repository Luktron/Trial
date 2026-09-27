# Tech Context

## Stack
| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS (inline `<style>`) with CSS custom properties |
| Logic | Vanilla JavaScript ES5-compatible (IIFE, `var`, no modules) |
| Persistence | `localStorage` (key: `examProtocolProvas_v1`) |
| File I/O | `FileReader` API (upload), `Blob` + `<a download>` (export) |
| Build | None — open directly in browser |

## Browser APIs Used
- `localStorage.getItem / setItem`
- `FileReader.readAsText`
- `document.createElement / querySelector`
- `Blob` + `URL.createObjectURL` for file download
- `document.execCommand('copy')` as clipboard fallback
- Optional: `window.claude.use('downloads')` — Claude artifact download capability (gracefully ignored if absent)

## File Structure
```
Prova/
├── exam-protocol.html   # Entire application
├── prova.csv            # Default seed exam file (multi-exam, UTF-8)
├── prova_1.csv          # Exam 1 — Assistente de Tecnologia
├── prova_2.csv          # Exam 2 — Assistente de Tecnologia
├── prova_3.csv          # Exam 3 — Assistente de Tecnologia
├── prova_4.csv          # Exam 4 — Assistente de Tecnologia
├── prova_5.csv          # Exam 5 — Assistente de Tecnologia
└── .amazonq/rules/memory-bank/
    ├── projectbrief.md
    ├── productContext.md
    ├── systemPatterns.md
    ├── techContext.md
    ├── activeContext.md
    └── progress.md
```

## Encoding Note
All CSV files are **UTF-8** (no BOM). The app reads uploaded files with `FileReader.readAsText(f, 'utf-8')` and fetches the seed file via `fetch('prova.csv')`.

## Exam Content Domain
All exams cover the "Assistente de Tecnologia" exam syllabus:
- Computer hardware (CPU, RAM, HD/SSD, motherboard, GPU, PSU)
- Operating systems (Windows, Linux, macOS)
- Networking (IP, DNS, DHCP, HTTP/S, FTP, SMTP, LAN/WAN, Wi-Fi)
- Information security (phishing, ransomware, malware, 2FA, backup, firewall)
- Microsoft Excel (formulas: SOMA, MÁXIMO, CONT.NÚM, SE, PROCV, MÉDIA, CONCATENAR, HOJE, ARRUMAR)
- Portuguese language (grammar, spelling, verbal agreement, conjunctions)
- Basic math / proportional reasoning
