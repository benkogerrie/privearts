# Cloudflare Pages Deployment - Stap voor Stap

## Stap 1: Maak een Cloudflare Account (als je die nog niet hebt)

1. Ga naar https://dash.cloudflare.com/sign-up
2. Maak een gratis account aan (of log in als je al een account hebt)
3. Cloudflare Pages is volledig gratis voor persoonlijke projecten!

## Stap 2: Ga naar Cloudflare Pages

1. In je Cloudflare dashboard, klik op **"Pages"** in de linker navigatie
2. Klik op **"Create a project"** of **"Connect to Git"**

## Stap 3: Verbind met GitHub Repository

1. Klik op **"Connect to Git"**
2. Je ziet een lijst met Git providers - selecteer **"GitHub"**
3. Als je nog niet verbonden bent, autoriseer Cloudflare om toegang te krijgen tot je GitHub account
4. Selecteer de repository: **`benkogerrie/privearts`**
5. Klik op **"Begin setup"**

## Stap 4: Configureer Build Instellingen

Vul de volgende instellingen in:

- **Project name**: `privearts` (of een andere naam naar keuze)
- **Production branch**: `main`
- **Framework preset**: `Vite` (Cloudflare detecteert dit meestal automatisch)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (laat leeg of zet `/`)

## Stap 5: Environment Variables (optioneel)

Voor nu hoef je geen environment variables in te stellen. Klik op **"Save and Deploy"**

## Stap 6: Wacht op Build

1. Cloudflare begint nu automatisch met het builden van je site
2. Dit duurt meestal 1-3 minuten
3. Je ziet de build progress in real-time

## Stap 7: Je Site is Live!

Na een succesvolle build krijg je een URL zoals:
- `https://privearts.pages.dev` (of een custom subdomain)

## Stap 8: Custom Domain Toevoegen (optioneel)

Als je een eigen domeinnaam wilt gebruiken:

1. Ga naar je project in Cloudflare Pages
2. Klik op **"Custom domains"**
3. Voeg je domeinnaam toe (bijv. `prive-arts.nl`)
4. Volg de DNS instructies om je domein te verbinden

## Automatische Deployments

Vanaf nu wordt je site automatisch opnieuw gebouwd en gedeployed bij elke push naar de `main` branch op GitHub!

## Troubleshooting

### Build faalt?
- Controleer de build logs in Cloudflare Pages dashboard
- Zorg dat alle dependencies correct zijn geïnstalleerd
- Check of `npm run build` lokaal werkt

### Site werkt niet?
- Controleer of het `_redirects` bestand in de `public` folder staat
- Zorg dat de build output directory `dist` is
- Check de deployment logs voor errors

## Voordelen van Cloudflare Pages

✅ **Gratis** voor persoonlijke projecten  
✅ **Snelle CDN** wereldwijd  
✅ **Automatische HTTPS**  
✅ **Automatische deployments** bij elke Git push  
✅ **Preview deployments** voor pull requests  
✅ **Onbeperkte bandbreedte**  

