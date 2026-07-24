# Pesonident — Stomatološka ordinacija

Zvaničan sajt stomatološke ordinacije **Pesonident** (TC Zeleni Venac, 2. sprat, Lomina 5, Beograd).
Mobile-first, konverzijski orijentisan sajt čiji je cilj više poziva i zakazanih pregleda.

## Tehnologije

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** — brend paleta: medicinsko plava (poverenje), topla bež (porodična briga), prirodno zelena (zdravlje)
- **React Router** — višestranična SPA struktura sa per-route SEO metapodacima
- **JSON-LD** strukturirani podaci (`Dentist` / LocalBusiness) u `index.html`

## Pokretanje

```bash
npm install
npm run dev      # razvojni server
npm run build    # produkcijski build u dist/
npm run preview  # pregled produkcijskog builda
```

## Struktura

| Ruta | Sadržaj |
| --- | --- |
| `/` | Hero, usluge, poverenje, profil doktorke, iskustvo pacijenta, lokacija |
| `/usluge` | Pregled svih usluga |
| `/usluge/:slug` | Pojedinačne SEO stranice (izbeljivanje zuba, lečenje kanala, lečenje desni…) |
| `/o-nama` | Priča o 35 godina rada i filozofija ordinacije |
| `/pitanja` | Česta pitanja (strahovi pacijenata) |
| `/kontakt` | Telefoni, formular za zakazivanje, mapa, radno vreme |

## Sadržaj i podaci

Sav uredljiv sadržaj je izdvojen u `src/data/` (CMS-ready):

- `site.ts` — kontakt, adresa, radno vreme
- `services.ts` + `serviceDetails.ts` — usluge i SEO tekstovi
- `faq.ts` — česta pitanja

## Hero video (Higgsfield)

Hero sekcija ima pripremljen slot za kinematski video klinike. Kada asset bude
generisan, ubacite `hero.mp4` i `hero-poster.jpg` u `public/` i otkomentarišite
`<video>` blok u `src/pages/Home.tsx`.

## Konverzijski elementi

- Sticky donja traka na mobilnom: **Pozovi** / **Zakaži**
- Dugme za poziv u zaglavlju (uvek vidljivo)
- CTA traka na dnu svake stranice
- Formular za zakazivanje na kontakt stranici i svakoj stranici usluge
