## Goal

Replace the abstract phrase **"Digital Forest Breath"** with the brand line **"Borgo Musolino — Forest Resort Experience"** (and shorter variants where it fits), and tighten descriptions across every page so the copy is **grounded and concrete** — specific places, materials, food, and sensations instead of metaphors about "breath" or "reciprocity".

No layout, component, image, or styling changes — text only.

---

## Direct phrase replacements

| File | Current | New |
|---|---|---|
| `src/components/site/Footer.tsx` | tagline `Forest Experience` + bottom label `Digital Forest Breath` | tagline `Forest Resort Experience` + bottom label `Borgo Musolino · Forest Resort Experience` |
| `src/routes/index.tsx` (Philosophy section) | "*Digital Forest Breath* — the reciprocity between our breath and the breath of trees…" | "*Borgo Musolino · Forest Resort Experience* — fifty hectares of Sicilian woodland, sixteenth-century stone and a restored borgo where rest, food and the land are part of the same gesture." |
| `src/routes/about.tsx` (meta description) | "The philosophy of Borgo Musolino — Digital Forest Breath, the reciprocity between human and forest." | "The philosophy of Borgo Musolino — a Forest Resort Experience in a sixteenth-century Sicilian estate above the Aeolian Islands." |
| `src/routes/about.tsx` (manifesto paragraph) | "*Digital Forest Breath* is our quiet manifesto…" | "The *Forest Resort Experience* is our way of welcoming you: stone rooms restored by hand, chestnut woods that change with the season, a kitchen built around what the garden gave us that morning — and time to actually notice it." |

---

## Grounded rewrites (page by page)

### Home — `src/routes/index.tsx`
- **Hero subtitle**: replace "An immersive sanctuary where wellness, taste and ancient woodland meet." → "A sixteenth-century Sicilian borgo above the Aeolian Islands — rooms, spa, kitchen and fifty hectares of chestnut forest."
- **Philosophy heading kicker** (`through wellness & taste`) stays; rewrite the paragraph as above.
- **Stay split section** paragraph: keep, but trim "slow conversation between heritage and comfort" → "Each room is restored stone, linen and wood, opened toward the trees."
- **Dining CTA** paragraph: "Foraged herbs, ancestral grains, indigenous wines. A cuisine that listens to the forest and the season." → "Garden vegetables, ancient Sicilian grains, Faro and Etna wines. A kitchen that cooks what the day brings in."
- **Sunset CTA** paragraph: "Tell us when you'd like to come. We'll craft an itinerary tuned to the forest's rhythm and your own." → "Tell us your dates and how you like to travel. We'll put together a stay around the rooms, the table and the experiences you want."
- **Home `<title>` / og:title**: keep `Borgo Musolino — Forest Experience` → update to `Borgo Musolino — Forest Resort Experience` for consistency with the new logo tagline.
- **Home meta description**: update to "A sixteenth-century Sicilian borgo near Messina — rooms, spa, dining and curated forest experiences on fifty hectares above the Aeolian Islands."

### About — `src/routes/about.tsx`
- Update meta + manifesto paragraph as listed above.
- First paragraph: keep the historical facts (50 hectares, 16th-century fiefdom, restored residence, Aeolian Islands) — already grounded, light cleanup only.

### Experiences — `src/routes/experiences.tsx`
- **Hero subtitle**: "Seven curated paths between woodland, water and table — each shaped by the seasons of Sicily." → "Seven ways to spend a day at the borgo — in the chestnut woods, at the table, in the spa, on the trails toward the sea."
- **Meta description**: keep (already concrete).

### Stay — `src/routes/stay.tsx`
- **Meta og:description**: "Hospitality measured in breaths, not stars…" → "Rooms, suites and lodges in a restored Sicilian borgo between the Tyrrhenian coast and the Aeolian Islands."
- Room blurbs ("song of the woodland at dusk") → "Forest Classic: stone walls, oak floors, a window onto the chestnut canopy." / "Borgo Suite: private terrace, cedar tub, the woods at eye level."

### Dining — `src/routes/dining.tsx`
- Intro paragraph: keep — already concrete. Light edit: "food is lived" → "food is the point of the day".

### Events — `src/routes/events.tsx`
- Already concrete; no rewrites needed beyond ensuring no "breath" language appears (it doesn't).

### Contact — `src/routes/contact.tsx`
- **Meta description**: "Begin the journey. Tell us when you'd like to come…" → "Plan your stay at Borgo Musolino — share your dates and we'll shape a Forest Resort Experience around them."

### Footer — `src/components/site/Footer.tsx`
- Tagline under "Borgo Musolino": `Forest Experience` → `Forest Resort Experience`
- Bottom-right label: `Digital Forest Breath` → `Borgo Musolino · Forest Resort Experience`
- Brand blurb: "Reconnect with nature through wellness and taste…" → "A sixteenth-century Sicilian borgo above the Aeolian Islands — rooms, spa, kitchen and fifty hectares of chestnut forest."

---

## Out of scope

- No changes to images, layout, colors, fonts, components, routes, or data files (`src/data/experiences.ts` stays as-is — its descriptions are already grounded).
- No changes to the logo asset.
