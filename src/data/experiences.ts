export type Experience = {
  slug: string;
  name: string;
  duration: string;
  description: string;
};

export type Category = {
  key: string;
  title: string;
  intro: string;
  items: Experience[];
};

export const categories: Category[] = [
  {
    key: "forest-bathing",
    title: "Forest Bathing",
    intro:
      "Step into the silence of Borgo Musolino's centuries-old woods and let nature do its quiet work. Guided by expert practitioners, deep breathing among oaks and holm oaks becomes a true therapy: the pure air, rich in monoterpenes released by the trees, oxygenates the lungs, supports the immune system, and offers natural relief for respiratory health, blood pressure, and inflammation. A living lavage of the lungs — cells regenerate, blood purifies, and a new vitality settles in that only an untouched ecosystem can give.",
    items: [
      { slug: "forest-bathing", name: "Forest Bathing Experience", duration: "2h", description: "A guided Shinrin-Yoku ritual through ancient oaks and holm oaks — slow breath, slow steps, the forest doing the healing." },
    ],
  },
  {
    key: "forest-holistic",
    title: "Forest Holistic",
    intro:
      "In the Hazelnut Park and at Biolake Gibbiuni, the forest becomes a holistic studio. Yoga, meditation, tai chi and aromatherapy unfold under the canopy, accompanied by birdsong and the sound of moving water. The oligomineral waters of the biolake are made for sun-bathing and slow massage; the silence is made for coming back to yourself.",
    items: [
      { slug: "yoga-meditation", name: "Yoga & Meditation in the Woods", duration: "1h30", description: "Mat down beneath the hazelnuts — breath, stillness, and the sound of water shaping the practice." },
      { slug: "biolake-ritual", name: "Biolake Gibbiuni Ritual", duration: "2h", description: "Sun-bathing, massage and immersion in the pristine oligomineral waters of our biolake, with the Aeolian Islands on the horizon." },
    ],
  },
  {
    key: "forest-sea-mountains",
    title: "Forest, Sea & Mountains",
    intro:
      "Wake to sunlight filtering through the chestnut grove and the Tyrrhenian opening at the horizon. A full day moving between two Sicilies — the cool of the woodland trails and the fine-sand beaches of the reserve, with Stromboli, Lipari and Vulcano in view. Forest bathing in the morning, the sea after lunch, the borgo's table at sunset.",
    items: [
      { slug: "sea-and-mountains-day", name: "Sea & Mountains Day", duration: "Full day", description: "From the chestnut canopy at dawn to a crystalline Tyrrhenian shore by afternoon — one curated day across two landscapes." },
    ],
  },
  {
    key: "forest-trekking",
    title: "Forest Trekking",
    intro:
      "Walk the secret paths of the Peloritani Mountains with our naturalist guides. Long stretches of undergrowth between oaks and holm oaks open onto the ridges of the Two Seas — the Tyrrhenian on one side, the Ionian on the other. Local flora and fauna along the way; a massage, a spring-water soak and a kilometre-zero meal waiting back at the borgo.",
    items: [
      { slug: "peloritani-trek", name: "Peloritani Trek", duration: "Half day", description: "A half-day on the ridge trails with an expert guide — oaks, holm oaks, and the rare view where two seas meet." },
    ],
  },
  {
    key: "forest-wellness",
    title: "Forest Wellness",
    intro:
      "At the beating heart of the woods, Forest Wellness is a sensory sanctuary where wellbeing marries wild nature. An open-air gym, recirculating pools fed by living spring water, a plantar Kneipp path, regenerating massages in the shade of great trees, a solarium under Sicilian sun, and the cool touch of spring showers. Every breath becomes care — an ancestral practice that turns relaxation into an intimate dialogue with the forest.",
    items: [
      { slug: "kneipp-path", name: "Kneipp Path & Spring Pools", duration: "2h", description: "Alternating cold and warm spring water along the plantar Kneipp circuit — circulation, clarity, calm." },
      { slug: "forest-massage", name: "Forest Ritual Massage", duration: "60min", description: "A regenerating massage in the shade of centuries-old trees, with the forest as the only soundtrack." },
    ],
  },
  {
    key: "cooking-class",
    title: "Cooking Class",
    intro:
      "At the heart of the borgo, Boschetto Cooking opens the door to authentic Sicilian cuisine. Working alongside our chefs, you cook with what the estate gave us that morning — tomatoes, basil and melon from the Musolino gardens, fresh herbs from the Serra degli Aromi, bread made from ancient Tumminia grain, eggs from the borgo's own henhouse. Antipasti, primi, secondi and Sicilian desserts, paired with local wines, then eaten together at the end of the class. A guided tour of the herb greenhouse, a Faro DOC tasting and a walk through the borgo's natural and historical landmarks can be added on.",
    items: [
      { slug: "sicilian-cooking", name: "Sicilian Cooking Experience", duration: "Half day", description: "A half-day in the kitchen with our chefs, garden to table — and the meal you prepared, paired with local wines, to close it." },
    ],
  },
  {
    key: "wine-tasting",
    title: "Wine Tasting",
    intro:
      "Discover Faro DOC — Sicily's only DOC wine, born for centuries in the Peloritani — selected from the region's most respected cellars. Taste it among the aromatic plants of the Serra degli Aromi, beneath the centuries-old oaks of the Boschetto, or by Biolake Gibbiuni with the Aeolian Islands on the horizon. An intense, complex bouquet, a view of the borgo and the reserve, and the rest of the estate's experiences within reach — cooking class, trekking, forest bathing, yoga.",
    items: [
      { slug: "faro-doc-tasting", name: "Faro DOC Exclusive Tasting", duration: "2h", description: "A curated flight of Faro DOC from the Peloritani's finest cellars, poured in the greenhouse, the grove, or by the biolake." },
    ],
  },
];