# Fix voor Cloudflare Pages Deploy Error

## Het Probleem

Cloudflare Pages probeert automatisch `npx wrangler deploy` uit te voeren, maar dat is niet nodig voor een statische React site. Dit veroorzaakt de error.

## Oplossing

### Stap 1: Verwijder het Deploy Command

1. Ga naar je Cloudflare Pages project
2. Klik op **"Settings"** (tandwiel icoon)
3. Ga naar **"Builds & deployments"**
4. Scroll naar beneden naar **"Build configuration"**
5. Zoek het veld **"Deploy command"** (of "Publish command")
6. **Maak dit veld LEEG** of verwijder de waarde
7. Klik op **"Save"**

### Stap 2: Controleer Build Settings

Zorg dat deze instellingen correct zijn:

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (LEEG)
Node.js version: 18 of 20
Deploy command: (LEEG - NIET invullen!)
```

### Stap 3: Herdeploy

1. Ga terug naar je project overzicht
2. Klik op de 3 puntjes (⋯) naast de laatste deployment
3. Kies **"Retry deployment"**

## Waarom?

Voor statische sites (zoals Vite/React) hoeft Cloudflare Pages alleen:
1. Dependencies te installeren (`npm install`)
2. De site te bouwen (`npm run build`)
3. De `dist` folder automatisch te deployen

Er is **geen** deploy command nodig - Cloudflare detecteert automatisch de `dist` folder na een succesvolle build.

## Alternatief: Als Deploy Command Verplicht Is

Als Cloudflare Pages vereist dat je een deploy command invult, gebruik dan:

```
echo "Deployment handled automatically by Cloudflare Pages"
```

Maar normaal gesproken moet het veld gewoon leeg zijn.

