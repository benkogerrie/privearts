# Snelle Fix voor Cloudflare Pages

## Meest Waarschijnlijke Oplossingen

### ✅ Oplossing 1: Controleer Build Settings

Ga naar je Cloudflare Pages project → Settings → Builds & deployments

**Zorg dat deze instellingen correct zijn:**

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (LEEG LATEN - niet /)
Node.js version: 18
```

### ✅ Oplossing 2: Herdeploy

1. Ga naar je project
2. Klik op de 3 puntjes naast de laatste deployment
3. Kies "Retry deployment"

### ✅ Oplossing 3: Check Build Logs

1. Klik op de laatste deployment
2. Bekijk de "Build logs"
3. Zoek naar errors (rood gekleurd)

**Veelvoorkomende errors:**
- `npm ERR!` → Dependencies probleem
- `Cannot find module` → Missing dependency
- `Build failed` → Check de volledige error message

### ✅ Oplossing 4: Verwijder en Herconnect

Als niets werkt:

1. Ga naar je Cloudflare Pages project
2. Settings → Delete project
3. Maak een nieuw project aan
4. Connect opnieuw met GitHub
5. Gebruik dezelfde build settings

## Wat is het Probleem?

Beschrijf wat je ziet:
- [ ] Witte pagina
- [ ] 404 error
- [ ] CSS werkt niet
- [ ] Routing werkt niet
- [ ] Build faalt
- [ ] Iets anders: ___________

Deel de error message uit de build logs als je die hebt!

