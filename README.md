# Prive-arts.nl Website

🌐 **[Live Site](https://privearts.pages.dev)** | 📦 [GitHub Repository](https://github.com/benkogerrie/privearts)

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

## 🌐 Live Site

**De website is live op:** [https://privearts.pages.dev](https://privearts.pages.dev)

*(Vervang deze URL met je eigen Cloudflare Pages URL als deze anders is)*

## Cloudflare Pages Deployment

De website is geconfigureerd voor deployment naar Cloudflare Pages. Zie [cloudflare-pages.md](./cloudflare-pages.md) voor gedetailleerde stap-voor-stap instructies.

**Snelle Setup:**

1. Ga naar https://dash.cloudflare.com en log in
2. Klik op **"Pages"** → **"Create a project"** → **"Connect to Git"**
3. Selecteer **GitHub** en kies de repository `benkogerrie/privearts`
4. Build instellingen:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Klik **"Save and Deploy"**

Na enkele minuten is je site live op een `*.pages.dev` URL!

**Voordelen:**
- ✅ Gratis hosting met onbeperkte bandbreedte
- ✅ Wereldwijde CDN voor snelle laadtijden
- ✅ Automatische HTTPS
- ✅ Automatische deployments bij elke Git push

## Licentie

© 2024 Prive-arts.nl

