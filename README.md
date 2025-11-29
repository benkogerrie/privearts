# Prive-arts.nl Website

Een moderne React website voor Prive-arts.nl - een platform voor exclusieve medische zorg met directe toegang tot specialisten.

## Features

- 🏥 **Specialisten Overzicht**: Bekijk alle beschikbare specialisten met hun specialismen, ratings en beschikbaarheid
- 📅 **Afspraak Boeken**: Boek direct een videoconsult of poliafspraak
- 🔬 **Lab Tests**: Bestel medische zelftesten en laboratoriumonderzoeken
- 📱 **Responsive Design**: Volledig responsive voor desktop, tablet en mobiel
- 🎨 **Modern UI**: Gebouwd met Tailwind CSS voor een moderne, professionele uitstraling

## Technologie Stack

- **React 18** - UI library
- **Vite** - Build tool en development server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

## Installatie

1. Installeer de dependencies:
```bash
npm install
```

2. Start de development server:
```bash
npm run dev
```

3. Open je browser en ga naar `http://localhost:5173`

## Build voor Productie

Om een productie build te maken:

```bash
npm run build
```

De gebouwde bestanden staan in de `dist` folder.

## Project Structuur

```
prive-arts/
├── src/
│   ├── App.jsx          # Hoofdcomponent met alle pagina's
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies en scripts
├── vite.config.js       # Vite configuratie
├── tailwind.config.js   # Tailwind configuratie
└── postcss.config.js    # PostCSS configuratie
```

## Beschikbare Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run preview` - Preview productie build lokaal

## GitHub Pages Deployment

De website wordt automatisch gedeployed naar GitHub Pages via GitHub Actions wanneer er code naar de `main` branch wordt gepusht.

**Om GitHub Pages in te schakelen:**

1. Ga naar de repository settings op GitHub: https://github.com/benkogerrie/privearts/settings/pages
2. Onder "Source" selecteer "GitHub Actions"
3. De workflow zal automatisch draaien bij elke push naar `main`
4. Na enkele minuten is de site live op: `https://benkogerrie.github.io/privearts/`

**Let op:** De eerste keer dat de workflow draait, moet je mogelijk GitHub Pages handmatig activeren in de repository settings.

## Licentie

© 2024 Prive-arts.nl

