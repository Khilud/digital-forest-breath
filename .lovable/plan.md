## Goal

Make all descriptions on the **Stay** and **Experiences** pages short (≤4 lines), attractive, and visually more prominent — using a slightly larger, more elegant description font.

---

## 1. `src/routes/stay.tsx` — full room menu from the doc

Replace the current 2-item `rooms` array with the 5 room types from the source, each with a 2–4 line evocative blurb. Names stay close to the source.

- **Sea View Rooms** — "Open your eyes and the first colour is blue. Wide terraces suspended over the Tyrrhenian, with Stromboli, Lipari and Vulcano on the horizon. At sunset the walls turn gold; at night, the stars settle on the water."
- **Junior Suite with Terrace** — "Open-air living rooms, a private plunge pool and daybeds wrapped in silence. From the hot tub you watch the Aeolian Islands — and understand why Ulysses paused to listen."
- **Forest View Rooms** — "You can hear the sea through the canopy, but never see it. Tall windows frame oaks, holm oaks and strawberry trees; sleep arrives with the owl, morning with sunlight through the branches."
- **Garden Suites** — "Small houses hidden in the woods, scented with myrtle and reached by stone paths. Sleeps two or four, with sea-facing sunsets and fireflies for company."
- **The Exclusive Lodges** — "The secret heart of the borgo. Wood-and-stone retreats beneath centuries-old camellias, citrus and pomegranate. A hammock, a glass of wine, a private mini-pool — and the forest, all yours."

Each card gets a small line of metadata pulled from the doc (e.g. "Sleeps 2 · Tyrrhenian view") to add density without lengthening the prose.

Apply the new `.copy-body` class (defined below) to the `<p>` blurb so it reads larger and warmer than the current `text-muted-foreground`.

No image, layout, or grid changes — still the 2-column grid; it will simply now render 5 cards.

## 2. `src/data/experiences.ts` — tighten every description to ≤4 lines

Keep names, slugs, durations, categories. Rewrite each `intro` and each item `description` so the **intro is 3–4 short lines** and each **item description is 1–2 lines**. Examples:

- **Forest Bathing intro**: "Step into the silence of centuries-old oaks and let the forest do the work. Guided breathing among monoterpene-rich air calms the body, clears the lungs, and resets the mind. A quiet, ancestral medicine — wrapped in Sicilian luxury."
- **Forest Bathing item**: "A guided Shinrin-Yoku ritual through ancient oaks — slow breath, slow steps, deep calm."
- **Forest Holistic intro**: "In the Hazelnut Park and at Biolake Gibbiuni, the woods become an open-air studio. Yoga, meditation, tai chi and aromatherapy, set to birdsong and moving water."
- **Forest, Sea & Mountains intro**: "Wake to sun through the chestnut grove and the Tyrrhenian on the horizon. One day, two Sicilies: cool forest trails in the morning, fine-sand beaches by afternoon — with Stromboli, Lipari and Vulcano in view."
- **Forest Trekking intro**: "Secret Peloritani paths with our naturalist guides, between oaks and holm oaks. Ridge views over the Two Seas, then a massage and a kilometre-zero meal back at the borgo."
- **Forest Wellness intro**: "A sensory sanctuary in the heart of the woods. Spring-water pools, a plantar Kneipp path, sun-warmed solarium and massages under great trees."
- **Cooking Class intro**: "At Boschetto Cooking, you cook what the estate gave us that morning — garden tomatoes, Serra degli Aromi herbs, Tumminia-grain bread, eggs from our henhouse. Then you sit and eat it, paired with Sicilian wines."
- **Wine Tasting intro**: "Faro DOC — Sicily's only DOC, born in the Peloritani — poured among the aromatic plants of the Serra, beneath the oaks of the Boschetto, or by the biolake with the Aeolian Islands on the horizon."

Same shortening pass for every item `description`. No structural changes to the file.

## 3. `src/routes/experiences.tsx` — apply new description style

- Hero subtitle stays as-is (already concise).
- Add `.copy-body` class to:
  - the category **intro** `<p>` (currently `text-muted-foreground mt-5 max-w-2xl font-light text-lg`)
  - each item `description` `<p>` (currently `text-sm text-muted-foreground`)
- Replace `text-sm` / `font-light` with the new utility so descriptions become more visible and consistent across the page.

## 4. `src/styles.css` — new description utility

Add a single utility class so descriptions across Stay & Experiences feel larger, warmer, and more readable:

```css
.copy-body {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.18rem;          /* ~19px */
  line-height: 1.65;
  color: oklch(0.35 0.03 145);  /* softened forest, more visible than muted */
  font-weight: 400;
  letter-spacing: 0.005em;
}
@media (min-width: 768px) {
  .copy-body { font-size: 1.25rem; }
}
```

This keeps the existing serif identity (`Cormorant Garamond`) but applies it to body copy at a hospitality-brand scale — distinctly more elegant and more visible than the current small Inter muted text.

---

## Out of scope

- No changes to images, layout, navigation, hero sections, or other pages (home, about, dining, events, contact, footer).
- No changes to room images — the same two photos rotate behind the 5 cards for now (we can source more later if you want).
- Item count, slugs, durations and category structure on Experiences stay the same; only copy is shortened.
