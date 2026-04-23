# Zürich Openair 2026 – Landingpage

Eine moderne, responsive Landingpage für das **Zürich Openair 2026** (26.–29.08.2026 in Glattbrugg). Das Design orientiert sich am offiziellen Plakat: holografische Farbverläufe (Pink, Lila, Blau, Türkis) mit schillernden Regenbogen-Effekten und Stencil-Typografie für die Headliner.

## Inhalt

- Hero-Bereich mit Keyvisual (animierter holografischer Hintergrund)
- Live-Countdown bis zum Festival-Start
- Line-up aufgeteilt nach den vier Festivaltagen (Mi/Do/Fr/Sa)
- Headliner visuell hervorgehoben (Stencil-Stil wie auf dem Plakat)
- Ticket-CTA-Bereich mit drei Ticket-Varianten
- Info-Sektion (Location, Daten, Camping, Altersfreigabe)
- Footer mit Social-Media-Links (Instagram, TikTok, Spotify)

## Dateistruktur

```
zuerich-openair-landingpage/
├── index.html      # Haupt-HTML mit Struktur/Inhalten
├── styles.css      # Gesamtes Styling inkl. holografischer Animationen
├── script.js       # Countdown + Scroll-Animationen
└── README.md       # Diese Datei
```

## Technologie

- **Reines HTML/CSS/JavaScript** – keine Build-Tools, kein Framework
- Fonts via Google Fonts: `Archivo Black`, `Orbitron`, `Inter`
- Fully responsive (Desktop, Tablet, Mobile)
- Unterstützt `prefers-reduced-motion` für Barrierefreiheit

## Lokale Vorschau

Einfach die `index.html` im Browser öffnen – kein Server nötig.

Alternativ mit einem kleinen lokalen Server:

```bash
# Python 3
python3 -m http.server 8000

# oder Node
npx serve .
```

Dann im Browser: `http://localhost:8000`

## Deployment auf GitHub Pages

### 1. Repository erstellen

```bash
git init
git add .
git commit -m "Initial commit: Zürich Openair 2026 Landingpage"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/zoa26-landingpage.git
git push -u origin main
```

### 2. GitHub Pages aktivieren

1. Im GitHub-Repo auf **Settings → Pages** klicken
2. Unter **Branch** `main` auswählen und Root-Ordner (`/`) wählen
3. **Save** klicken
4. Nach ein paar Minuten ist die Seite online unter:
   `https://DEIN-USERNAME.github.io/zoa26-landingpage/`

### 3. Optional: Custom Domain

Lege eine `CNAME`-Datei mit deiner Domain an (z. B. `zoa26.ch`) und konfiguriere die DNS entsprechend.

## Anpassungen

### Farben ändern

Alle Farben sind als CSS-Variablen in `styles.css` im `:root`-Block definiert:

```css
:root {
  --holo-pink:    #ffb8e0;
  --holo-magenta: #e38dff;
  --holo-purple:  #a8a1ff;
  --holo-blue:    #9bd0ff;
  --holo-teal:    #a8f5e6;
  --accent-purple: #8a3ffc;
  --accent-pink:   #ff3ea5;
  --accent-ink:    #0a0a14;
  /* ... */
}
```

### Inhalte ändern

- **Line-up**: In der Sektion `<section id="lineup">` in `index.html` anpassen
- **Tickets / Preise**: In `<section id="tickets">`
- **Social-Links**: Im Footer die `href`-Attribute aktualisieren
- **Countdown-Ziel**: In `script.js` die Variable `TARGET_DATE` ändern

### Ticket-Link

Der Ticket-Button verlinkt aktuell auf `https://www.zurichopenair.ch`. Für den echten Shop einfach den Link im `href`-Attribut der `.btn-primary`-Buttons im Ticket-Bereich austauschen.

## Design-Hinweise

- **Headliner** (Nina Chuba, Empire Of The Sun, Post Malone, Apache 207) sind visuell mit Stencil-Outline-Typografie hervorgehoben – analog zum Plakat
- Jeder Tag hat eine eigene Akzentfarbe passend zur holografischen Palette
- Hintergrund animiert sich langsam für lebendigen Look – mit `prefers-reduced-motion` wird die Animation automatisch deaktiviert

## Browser-Support

Getestet auf:
- Chrome / Edge (aktuelle Versionen)
- Firefox
- Safari (macOS / iOS)

Für ältere Browser wird der `backdrop-filter`-Effekt ggf. nicht angezeigt, die Seite bleibt aber voll funktionsfähig.

## Lizenz

Dieses Projekt wurde als Lernprojekt / Schulprojekt erstellt. Die Marke "Zürich Openair" sowie Künstlernamen sind Eigentum der jeweiligen Rechteinhaber.
