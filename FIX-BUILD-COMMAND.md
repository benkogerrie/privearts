# Fix: Build Command Ontbreekt

## Het Probleem

Cloudflare Pages kan het build command niet vinden, dus wordt de site niet gebouwd en de `dist` folder wordt niet aangemaakt.

## Oplossing

### Stap 1: Voeg Build Command Toe

1. Ga naar je Cloudflare Pages project
2. Klik op **"Settings"** (tandwiel icoon)
3. Ga naar **"Builds & deployments"**
4. Scroll naar **"Build configuration"**

### Stap 2: Vul deze instellingen in

**BELANGRIJK:** Vul deze velden exact zo in:

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (LEEG LATEN - niet invullen!)
Node.js version: 18 of 20
Deploy command: (LEEG LATEN - niet invullen!)
```

### Stap 3: Sla Op en Herdeploy

1. Klik op **"Save"**
2. Ga terug naar je project overzicht
3. Klik op de 3 puntjes (⋯) naast de laatste deployment
4. Kies **"Retry deployment"**

## Belangrijk

- **Build command** MOET zijn: `npm run build`
- **Build output directory** MOET zijn: `dist`
- **Deploy command** moet LEEG zijn (niet invullen!)
- **Root directory** moet LEEG zijn (niet invullen!)

## Waarom Dit Werkt

1. `npm run build` bouwt je Vite/React site
2. Dit maakt de `dist` folder aan met alle bestanden
3. Cloudflare Pages detecteert automatisch de `dist` folder
4. De site wordt gedeployed zonder extra deploy command

