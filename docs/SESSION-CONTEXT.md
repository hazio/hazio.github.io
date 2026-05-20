# Session Context — Halmetoja Model Development
## Päivitetty: 2026-05-19

---

## Projektin nykytila

### Verkkosivusto (halmetojamodel.com)
- Astro 6.1.8, custom CSS, dark theme
- 35+ artikkelia — kaikki optimoitu SEO:lle, ristiin linkitetty
- Artwork-galleria: 9 kuvaa (engineering-analogy, electrical-circuit, phase-transition, ad-converter, attractor-basin, orbit-vectors, compression-algorithm, binary-world, creation-of-adam)
- Kirja (The Invisible Gravity) lisätty navigaatioon ja etusivulle
- Puuttuu: yleisö (liikenne sivuille)

### Tieteellinen paperisarja (3 paperia)

**Paper 1 — SRF Core (v2.0)**
- `docs/papers/structural-regulation-framework-v2.0.md`
- PDF: `SRF-v2.0.pdf`
- Julkaistu Zenodossa: https://doi.org/10.5281/zenodo.20215822
- IRC, SF, ERD, REL määritelmät
- H1–H7 (alkuperäiset hypoteesit)
- REL:n uutuusarvo vs. olemassa olevat konstruktit
- Lean, clean, measurable — focus on REL novelty

**Paper 2 — Resolution Resistance (v1.0)**
- `docs/papers/resolution-resistance-v1.0.md`
- Header: `header-paper2.tex`
- Ydinväite: Defensive simplification is adaptive under insufficient holding capacity
- Primary mechanism: Resolution Resistance (H1)
- Derived predictions: Transitional Pain (J-curve), Scaffolded Integration, Domain-Selective Resolution
- Bootstrap problem, attractor basin heuristic, forced vs scaffolded change
- Sexier, riskier, more theoretical than Paper 1
- Construct mapping table (IRC vs distress tolerance, SF vs mentalization, etc.)
- 22 viitettä

**Paper 3 — Narcissistic Regulation Architecture (v1.0)**
- `docs/papers/narcissistic-regulation-architecture-v1.0.md`
- Header: `header-paper3.tex`
- Figures: `narcissistic-regulation-figure1.svg`, `narcissistic-regulation-figure2.svg`
- Narsismi SRF:n application case (ei "SRF explains narcissism")
- Vector Weighting Model: grandiose vs vulnerable = eri vektoripainotukset, ei eri tyypit
- Dependency Double Bind formalisoitu
- Domain-selective functioning (Paper 2 H4 applied)
- Therapeutic implications (speculative)
- Positioning: Kernberg, Kohut, Pincus, Back, Ronningstam

## Paperisarjan roadmap

| Paper | Question | Layer |
|---|---|---|
| 1. SRF | How does regulation work? | Mechanism |
| 2. Resolution Resistance | Why does structure resist change? | Dynamics |
| 3. Narcissistic Architecture | What does this look like clinically? | Application |
| 4. Signal-Class Architecture | Why are signals processed differently? | Structure |
| 5. Self Architecture | What is threatened? | Protected target |
| 6. Ontological Regulation | What if existence itself is threatened? | Deep phenomenology |

### Paper 4 — Signal-Class Architecture / Compression Profiles (NEXT)
- **Working title**: "Compression Profiles: A Signal-Class Architecture of Differential Psychological Resolution"
- **Core thesis**: Regulation is signal-class dependent. Different signal classes sustain different effective resolution levels. The question is not "how flexible is this person?" but "which signal classes compress, and under what conditions?"
- **Central constructs**:
  - Signal Class: psychologically meaningful category of experience (attachment, dependency, rejection, shame, status, control, intent attribution, separateness)
  - Representational Resolution: degree of affective/interpretive/symbolic differentiation
  - Compression: defensive reduction in resolution under activation (structural, not random)
  - Compression Profile: characteristic distribution of effective resolution across signal classes
- **Canonical Signal Taxonomy (v1)**: Relational (attachment, dependency, rejection, separateness) + Self-evaluative (shame, status) + Interpretive/control (control/agency, intent attribution)
- **Dynamic extension**: Baseline Resolution Profile vs Stress Resolution Profile. Optional: Resolution Retention (how much resolution survives under stress)
- **Key novelty**: Not "people process things differently" (trivial) but formal structural model of differential representational resolution across canonical signal classes, dynamically modulated by activation state and linked to regulatory architecture
- **Relationship to SRF**: Compression Profile = interface, SRF = engine. Paper 4 extends, does not replace.
- **Predictions**: (1) same person shows different resolution across signal classes, (2) stress selectively degrades vulnerable channels, (3) clinical syndromes show characteristic compression signatures, (4) empathy failure = channel-specific bandwidth collapse
- **One-line identity**: If Paper 1 was the engine paper, Paper 4 is the topology paper.

### Paper 5 — Self Architecture (planned)
- **Working title**: "What Must Be Protected: Self Architecture and the Topology of Psychological Threat"
- **Core thesis**: Self Architecture formalizes the vulnerability surface that determines which signal classes become destabilizing and therefore require compression. Compression shows where perception narrows; Self Architecture shows why narrowing becomes necessary.
- **7 dimensions**: Self-Coherence, Self-Concept Clarity, Worth Contingency, Shame Integration Capacity, Dependency Tolerance, Self-Other Differentiation, Ontological Self-Continuity
- **Three levels of regulatory stakes**: Affective ("this hurts"), Identity ("this threatens who I am"), Ontological ("this threatens whether I exist")
- **Bridge function**: Paper 4 (where) → Paper 5 (why) → Paper 6 (deepest level)
- **Key distinction**: Compression Profile = processing topology; Self Architecture = vulnerability topology
- **Ontological Self-Continuity**: introduced carefully, not centerpiece (Paper 6 develops fully)
- **One-line identity**: If Paper 4 is the topology of where reality compresses, Paper 5 is the topology of what reality threatens.

### Paper 6 — Ontological Regulation (planned)
- **Working title**: "Ontological Regulation: When Continuity of Being Becomes the Protected Target"
- **Core thesis**: Some regulatory architectures defend not merely against painful affect or identity threat, but against disruption of felt self-continuity. When experiential continuity becomes externally contingent, withdrawal of recognition threatens not identity but being itself.
- **Key framing**: NOT "I do not exist if unseen" (too absolute) → "felt self-continuity becomes dependent on external recognition" (operational, reviewer-safe)
- **Stake level terminology**: "continuity of being" (not "existence") — aligns with Winnicott's going-on-being
- **Inspiraatio**: "Narsistin binääriresoluutio ulkoisesta säätelystä ei ole vain hyvän ja pahan minän välillä vaan ontologinen. Eksistentiaalinen."
- **Nojaa**: Paper 5 Dimension 7 (Ontological Self-Continuity) + Laing (1960) + Giddens (1991) + Kohut fragmentation + Winnicott going-on-being
- **Predictions**: Recognition-withdrawal produces qualitatively different (not just quantitatively stronger) destabilization when continuity of being is the protected target

**The Compression Profile Manifesto**
- Lyhyempi, shareable, populaari
- Ydinidea: personality = characteristic compression profiles
- "Which signal classes collapse into low-resolution defensive encoding?"
- Closer: "Human suffering is not always caused by what is felt. Sometimes it is caused by what cannot yet be differentiated."

**The Signal-Class SRF Manifesto**
- Pidempi, teoreettisempi, SRF-sidottu
- Ydinidea: regulation is signal-class-dependent, not globally uniform
- Uusi termi: "Full-Resolution Cost" (aiemmin "Resolution Exposure Load" — nimetty uudelleen REL-terminologiakollision välttämiseksi)
- "Regulated with respect to what?" — keskeinen reframe
- Closer: "Human suffering may not emerge from weak minds. It may emerge from architectures that became selectively expensive to fully inhabit."

### REL-testaussuunnitelma
- **Valmis:** `docs/papers/rel-testaussuunnitelma.md`
- Delayed communication paradigm
- N=50-80, hierarkkinen regressio

### Building Integration Capacity -opas
- **Valmis:** `docs/building-integration-capacity.md`
- 4 komponenttia: jännitteen sieto, ristiriidan pitäminen, todellisuuskontakti, regulaatiojoustavuus

---

## Keskeiset päätökset ja oivallukset

### Teoria
1. CENTER ≠ integraatio. CENTER on regulaation sijainti, integraatio on laatu. Ortogonaalisia.
2. ORBIT voi olla integroitunut (adaptive co-regulation) tai patologinen.
3. Rigid CENTER (pseudo-CENTER) on yhtä ongelmallinen kuin pathological ORBIT.
4. REL on koko frameworkin kohtalonkysymys — jos se ei mittaa uniikkia varianssia, framework on re-labeling.
5. **Low SF on aktiivinen suojamekanismi** — ei vain puute. Matala resoluutio estää fragmentaation.
6. **Muutosresistanssi on rakenteellinen** — ei motivaation puute. Bootstrap-ongelma: tarvitset IRC:tä saadaksesi IRC:tä.
7. **Domain-selective resolution** — sama henkilö voi operoida eri resoluutiolla eri konteksteissa. Selittää "funktionaalisen narsistin".
8. **Grandiose vs vulnerable = vector weighting** — ei eri tyyppejä vaan eri vektoripainotuksia samassa arkkitehtuurissa.
9. **IRC = holding threshold** (dynamic, state-modifiable but structurally constrained) — ei energy, ei resource, ei trait.
10. **Resolution = SF:n observable effective expression** under current activation conditions — ei erillinen konstrukti.

### Back et al. (2026) -tutkimuksen vaikutus
- Jaettu perheympäristö EI selitä narsismia → peili-narratiivi siirretty pois vanhemmuuskeskeisyydestä
- Genetiikka 50% + yksilöspesifiset ympäristötekijät 50% → framework linjassa
- Assortatiivinen parinvalinta haastaa empaatti–narsisti-dynamiikan piirretasolla

### Paperien review-palaute ja korjaukset (itsearviointi)
- "This is not a metaphor" → poistettu. Paperi käyttää metaforia (compression, bit depth, attractor basin) — rehellisempi: "formal conceptual model"
- Psykoositasoinen fragmentaatio → "acute self-state fragmentation, identity incoherence"
- IRC conceptual creep → rajattu: holding threshold, ei energy/resource
- Attractor basin → "heuristic interpretation, not formal mathematical model"
- "Functional narcissist" → "domain-preserved functioning under attachment-specific compression"
- H1–H4 → restructured: Primary mechanism + Derived predictions
- Narsismi → general theory, narcissism as example case (Paper 3 handles application)
- Falsification circularity → eksplisiittinen vaatimus: IRC must be independently operationalized
- Bootstrap → "severely constrained under these assumptions" (ei "impossible")
- Existing models → "offers one possible structural interpretation" (ei "explains")

### Monetisointi
- Kirja olemassa (The Invisible Gravity, Amazon) — myynti nolla
- Ongelma: näkyvyys, ei tuote
- Polku: Reddit + Substack + SEO → liikenne → kirja/kurssi
- "Building Integration Capacity" on se tuote jota ihmiset ostavat
- Manifestot voivat toimia viral-sisältönä

---

## Seuraavat askeleet (prioriteettijärjestys)

1. **Paper 2 & 3 PDF-generointi** — pandoc + xelatex (librsvg tarvitaan SVG-kuville)
2. **Manifestojen sijoittaminen** — halmetojamodel.com artikkeleiksi tai Substack-postauksiksi
3. **REL-pilottitutkimus** — ratkaisee onko framework tieteellisesti perusteltu
4. **Yleisön rakentaminen** — Reddit, Substack, Google Search Console
5. **Paperien julkaisu** — Zenodo (preprint) tai conceptual/theoretical venue
6. **Artwork-sivujen laajentaminen** — resolution-resistance artwork mahdollinen

---

## Tiedostorakenne

```
kirja/halmetojamodel.com/
├── docs/
│   ├── papers/
│   │   ├── center-orbit-framework-v1.0.md (integroitu versio)
│   │   ├── structural-regulation-framework-v2.0.md ← PAPER 1
│   │   ├── SRF-v2.0.pdf
│   │   ├── resolution-resistance-v1.0.md ← PAPER 2
│   │   ├── header-paper2.tex
│   │   ├── narcissistic-regulation-architecture-v1.0.md ← PAPER 3
│   │   ├── header-paper3.tex
│   │   ├── narcissistic-regulation-figure1.svg
│   │   ├── narcissistic-regulation-figure2.svg
│   │   ├── rel-construct-paper-v1.0.md (REL-erillispaper)
│   │   ├── rel-testaussuunnitelma.md
│   │   └── header.tex (Paper 1 header)
│   ├── building-integration-capacity.md
│   └── SESSION-CONTEXT.md ← TÄMÄ TIEDOSTO
├── public/artwork/ (9 kuvaa)
├── src/pages/artwork/ (9 artwork-sivua + index)
├── src/pages/articles/ (35+ artikkelia)
├── src/pages/research/ (tutkimussivu)
└── src/pages/halmetoja-model/ (framework-sivu)
```

---

## Avoimet kysymykset

- Onko REL oikeasti uniikki konstrukti vai redundantti?
- Miten "contradiction holding" ja "reality contact" operationalisoidaan?
- Onko "Full-Resolution Cost" (manifestosta) uusi konstrukti vai ERD:n/aktivaation synonyymi?
- Miten assortatiivinen parinvalinta ja empaatti–narsisti-dynamiikka sovitetaan yhteen?
- Onko IRC universaalisesti adaptatiivinen vai kontekstiriippuvainen?
- Miten kulttuuriset erot vaikuttavat IRC/ERD-ilmenemiseen?
- Mikä on IRC_crit — universaali vai yksilöllinen kynnys?
- Voiko "minimum viable resolution increment" (1-bit → 2-bit) operationalisoida?
- Onko Paper 1 (Zenodo preprint) tarpeeksi uskottava pohja Paper 2 & 3:lle peer review -kontekstissa?
- Mihin venue Paper 2 sopii? (Conceptual/theoretical niche, discussion paper?)
