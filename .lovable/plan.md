## Goal

Rewrite the Experiences page copy so each category's **intro** and each **experience item** matches the source brief — translated to English in a precise, descriptive, immersive, marketing-grade voice. No layout, image, or component changes.

All edits land in **`src/data/experiences.ts`** (the file the Experiences page reads from). The hero subtitle on `src/routes/experiences.tsx` also gets a small tightening.

---

## File: `src/data/experiences.ts`

Each category below gets a new `intro` (the long descriptive paragraph rendered next to the image) and each `item` gets a new `description` (the line under the item title). Names stay; only copy changes.

### 1. Forest Bathing
- **Intro**: "Step into the silence of Borgo Musolino's centuries-old woods and let nature do its quiet work. Guided by expert practitioners, deep breathing among oaks and holm oaks becomes a true therapy: the pure air, rich in monoterpenes released by the trees, oxygenates the lungs, supports the immune system, and offers natural relief for respiratory health, blood pressure, and inflammation. A living lavage of the lungs — cells regenerate, blood purifies, and a new vitality settles in that only an untouched ecosystem can give."
- **Item — Forest Bathing Experience**: "A guided Shinrin-Yoku ritual through ancient oaks and holm oaks — slow breath, slow steps, the forest doing the healing."

### 2. Forest Holistic
- **Intro**: "In the Hazelnut Park and at Biolake Gibbiuni, the forest becomes a holistic studio. Yoga, meditation, tai chi and aromatherapy unfold under the canopy, accompanied by birdsong and the sound of moving water. The oligomineral waters of the biolake are made for sun-bathing and slow massage; the silence is made for coming back to yourself."
- **Item — Yoga & Meditation in the Woods**: "Mat down beneath the hazelnuts — breath, stillness, and the sound of water shaping the practice."
- **Item — Biolake Gibbiuni Ritual**: "Sun-bathing, massage and immersion in the pristine oligomineral waters of our biolake, with the Aeolian Islands on the horizon."

### 3. Forest, Sea & Mountains
- **Intro**: "Wake to sunlight filtering through the chestnut grove and the Tyrrhenian opening at the horizon. A full day moving between two Sicilies — the cool of the woodland trails and the fine-sand beaches of the reserve, with Stromboli, Lipari and Vulcano in view. Forest bathing in the morning, the sea after lunch, the borgo's table at sunset."
- **Item — Sea & Mountains Day**: "From the chestnut canopy at dawn to a crystalline Tyrrhenian shore by afternoon — one curated day across two landscapes."

### 4. Forest Trekking
- **Intro**: "Walk the secret paths of the Peloritani Mountains with our naturalist guides. Long stretches of undergrowth between oaks and holm oaks open onto the ridges of the Two Seas — the Tyrrhenian on one side, the Ionian on the other. Local flora and fauna along the way; a massage, a spring-water soak and a kilometre-zero meal waiting back at the borgo."
- **Item — Peloritani Trek**: "A half-day on the ridge trails with an expert guide — oaks, holm oaks, and the rare view where two seas meet."

### 5. Forest Wellness
- **Intro**: "At the beating heart of the woods, Forest Wellness is a sensory sanctuary where wellbeing marries wild nature. An open-air gym, recirculating pools fed by living spring water, a plantar Kneipp path, regenerating massages in the shade of great trees, a solarium under Sicilian sun, and the cool touch of spring showers. Every breath becomes care — an ancestral practice that turns relaxation into an intimate dialogue with the forest."
- **Item — Kneipp Path & Spring Pools**: "Alternating cold and warm spring water along the plantar Kneipp circuit — circulation, clarity, calm."
- **Item — Forest Ritual Massage**: "A regenerating massage in the shade of centuries-old trees, with the forest as the only soundtrack."

### 6. Cooking Class
- **Intro**: "At the heart of the borgo, *Boschetto Cooking* opens the door to authentic Sicilian cuisine. Working alongside our chefs, you cook with what the estate gave us that morning — tomatoes, basil and melon from the Musolino gardens, fresh herbs from the *Serra degli Aromi*, bread made from ancient Tumminia grain, eggs from the borgo's own henhouse. Antipasti, primi, secondi and Sicilian desserts, paired with local wines, then eaten together at the end of the class. A guided tour of the herb greenhouse, a Faro DOC tasting and a walk through the borgo's natural and historical landmarks can be added on."
- **Item — Sicilian Cooking Experience**: "A half-day in the kitchen with our chefs, garden to table — and the meal you prepared, paired with local wines, to close it."

### 7. Wine Tasting
- **Intro**: "Discover Faro DOC — Sicily's only DOC wine, born for centuries in the Peloritani — selected from the region's most respected cellars. Taste it among the aromatic plants of the *Serra degli Aromi*, beneath the centuries-old oaks of the *Boschetto*, or by Biolake Gibbiuni with the Aeolian Islands on the horizon. An intense, complex bouquet, a view of the borgo and the reserve, and the rest of the estate's experiences within reach — cooking class, trekking, forest bathing, yoga."
- **Item — Faro DOC Exclusive Tasting**: "A curated flight of Faro DOC from the Peloritani's finest cellars, poured in the greenhouse, the grove, or by the biolake."

---

## File: `src/routes/experiences.tsx`

- Hero subtitle: replace current line with
  > "Seven ways to spend a day at the borgo — chestnut woods and Peloritani trails, the open-air spa, the kitchen garden, and Faro DOC poured with the Aeolian Islands on the horizon."

No other changes to this file.

---

## Out of scope

- No images, layout, components, routes, fonts or colors touched.
- Other pages (home, about, stay, dining, events, contact, footer) are not edited in this pass — the doc's hospitality and food sections are a separate copy job; happy to handle next if you want.
