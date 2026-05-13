# Session Context — Halmetoja Model Development
## Päivitetty: 2026-05-11

---

## Projektin nykytila

### Verkkosivusto (halmetojamodel.com)
- Astro 6.1.8, custom CSS, dark theme
- 35 artikkelia — kaikki optimoitu SEO:lle, ristiin linkitetty
- Kirja (The Invisible Gravity) lisätty navigaatioon ja etusivulle
- 2 kesken jäänyttä artikkelia täydennetty (Korppi, Why Integration Fails)
- Sivusto teknisesti kunnossa (sitemap, robots.txt, meta-kuvaukset)
- Puuttuu: yleisö (liikenne sivuille)

### Tieteellinen paperi
- **v1.0 valmis:** `docs/papers/center-orbit-framework-v1.0.md`
- Integroitu v0.1–v0.4 + Back et al. (2026) -tutkimus
- Sisältää Integration Theory (osio 5A) — 4 komponenttia
- REL (Regulation Externalization Latency) on pääkonstrukti
- Preprint-julkaisuvalmis PsyArXiviin

### REL-testaussuunnitelma
- **Valmis:** `docs/papers/rel-testaussuunnitelma.md`
- Delayed communication paradigm
- N=50-80, hierarkkinen regressio
- Kriittinen testi: selittääkö REL uniikkia varianssia yli ECR-R, DTS, IUS, DSI
- Aikataulu: 4.5 kuukautta

### Building Integration Capacity -opas
- **Valmis:** `docs/building-integration-capacity.md`
- 4 komponenttia: jännitteen sieto, ristiriidan pitäminen, todellisuuskontakti, regulaatiojoustavuus
- Hermostollinen + relationaalinen + käytännöllinen taso
- Potentiaalinen tuote (kurssi, kirja, Substack)

---

## Keskeiset päätökset ja oivallukset

### Teoria
1. CENTER ≠ integraatio. CENTER on regulaation sijainti, integraatio on laatu. Ortogonaalisia.
2. ORBIT voi olla integroitunut (adaptive co-regulation) tai patologinen.
3. Rigid CENTER (pseudo-CENTER) on yhtä ongelmallinen kuin pathological ORBIT.
4. REL on koko frameworkin kohtalonkysymys — jos se ei mittaa uniikkia varianssia, framework on re-labeling.

### Back et al. (2026) -tutkimuksen vaikutus
- Jaettu perheympäristö EI selitä narsismia → peili-narratiivi siirretty pois vanhemmuuskeskeisyydestä
- Genetiikka 50% + yksilöspesifiset ympäristötekijät 50% → framework linjassa
- Assortatiivinen parinvalinta haastaa empaatti–narsisti-dynamiikan piirretasolla
- Dopamiini/reward salience tukee v0.4:n neurobiologista osiota

### Monetisointi
- Kirja olemassa (The Invisible Gravity, Amazon) — myynti nolla
- Ongelma: näkyvyys, ei tuote
- Polku: Reddit + Substack + SEO → liikenne → kirja/kurssi
- "Building Integration Capacity" on se tuote jota ihmiset ostavat

---

## Seuraavat askeleet (prioriteettijärjestys)

1. **REL-pilottitutkimus** — ratkaisee onko framework tieteellisesti perusteltu
2. **Yleisön rakentaminen** — Reddit, Substack, Google Search Console
3. **Building Integration Capacity** → artikkeli/sarja sivustolle
4. **Paperin julkaisu** PsyArXiviin (preprint)
5. **Kurssi** Building Integration Capacity -pohjalta

---

## Tiedostorakenne

```
kirja/halmetojamodel.com/
├── docs/
│   ├── papers/
│   │   ├── center-orbit-framework-v0.1.md (alkuperäinen)
│   │   ├── center-orbit-framework-v0.2.md (patch)
│   │   ├── center-orbit-framework-v0.3.md (REL lisätty)
│   │   ├── center-orbit-framework-v0.4.md (neurobiologia)
│   │   ├── center-orbit-framework-v1.0.md ← INTEGROITU VERSIO
│   │   └── rel-testaussuunnitelma.md ← PILOTTISUUNNITELMA
│   ├── building-integration-capacity.md ← OPAS
│   └── SESSION-CONTEXT.md ← TÄMÄ TIEDOSTO
├── src/content/articles/ (35 artikkelia, optimoitu)
└── src/pages/ (etusivu päivitetty, kirja näkyvissä)
```

---

## Avoimet kysymykset

- Onko REL oikeasti uniikki konstrukti vai redundantti?
- Miten "contradiction holding" ja "reality contact" operationalisoidaan COS-mittariin?
- Miten assortatiivinen parinvalinta ja empaatti–narsisti-dynamiikka sovitetaan yhteen?
- Onko CENTER universaalisesti adaptatiivinen vai kontekstiriippuvainen?
- Miten kulttuuriset erot vaikuttavat CENTER/ORBIT-ilmenemiseen?
