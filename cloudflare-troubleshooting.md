# Cloudflare Pages Troubleshooting

## Veelvoorkomende Problemen en Oplossingen

### 1. Witte Pagina / Site Laadt Niet

**Mogelijke oorzaken:**
- Build output directory is verkeerd ingesteld
- Node.js versie mismatch
- Build faalt zonder dat je het ziet

**Oplossing:**
1. Ga naar je Cloudflare Pages project
2. Klik op "Settings" → "Builds & deployments"
3. Controleer:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leeg laten)
   - **Node.js version**: `18` of `20`

### 2. 404 Errors bij Navigatie (Routing Werkt Niet)

**Oorzaak:** Het `_redirects` bestand wordt niet correct gedeployed.

**Oplossing:**
1. Zorg dat `public/_redirects` bestaat met inhoud: `/*    /index.html   200`
2. Vite kopieert automatisch bestanden uit `public/` naar `dist/`
3. Herdeploy de site

### 3. CSS Laadt Niet / Styling Ontbreekt

**Oorzaak:** Tailwind CSS wordt niet correct gebouwd.

**Oplossing:**
1. Controleer of `tailwind.config.js` correct is
2. Controleer of `postcss.config.js` bestaat
3. Check build logs voor errors
4. Zorg dat `src/index.css` de Tailwind imports bevat

### 4. Build Faalt

**Check de build logs:**
1. Ga naar je project in Cloudflare Pages
2. Klik op de laatste deployment
3. Bekijk de build logs voor specifieke errors

**Veelvoorkomende build errors:**
- `npm ci` faalt → Check of `package-lock.json` bestaat
- Dependency errors → Update dependencies
- Memory errors → Verhoog Node.js versie

### 5. Environment Variables

**Als je environment variables nodig hebt:**
1. Ga naar "Settings" → "Environment variables"
2. Voeg variabelen toe voor Production, Preview, en Development

## Correcte Cloudflare Pages Instellingen

### Build Settings:
```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: / (leeg)
Node.js version: 18 of 20
```

### Environment Variables:
Geen nodig voor deze site (tenzij je API keys gebruikt)

## Verificatie Checklist

- [ ] Build command is: `npm run build`
- [ ] Build output directory is: `dist`
- [ ] Root directory is leeg of `/`
- [ ] Node.js version is 18 of 20
- [ ] `public/_redirects` bestand bestaat
- [ ] Build logs tonen geen errors
- [ ] Deployment is succesvol (groen vinkje)

## Handmatige Build Test

Test lokaal of de build werkt:

```bash
npm install
npm run build
```

Als dit lokaal werkt, zou het ook op Cloudflare moeten werken.

## Contact

Als niets werkt, deel de volgende informatie:
1. De exacte error message uit de build logs
2. Screenshot van je Cloudflare Pages build settings
3. De URL waar de site live staat

