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
      "Step into the silence of centuries-old oaks and let the forest do the work. Guided breathing in monoterpene-rich air calms the body, clears the lungs, and resets the mind. A quiet, ancestral medicine — wrapped in Sicilian luxury.",
    items: [
      { slug: "forest-bathing", name: "Forest Bathing Experience", duration: "2h", description: "A guided Shinrin-Yoku walk through ancient oaks — slow breath, slow steps, deep calm." },
    ],
  },
  {
    key: "forest-holistic",
    title: "Forest Holistic",
    intro:
      "In the Hazelnut Park and at Biolake Gibbiuni, the woods become an open-air studio. Yoga, meditation, tai chi and aromatherapy, set to birdsong and the sound of moving water.",
    items: [
      { slug: "yoga-meditation", name: "Yoga & Meditation in the Woods", duration: "1h30", description: "Mat down beneath the hazelnuts — breath, stillness, water." },
      { slug: "biolake-ritual", name: "Biolake Gibbiuni Ritual", duration: "2h", description: "Sun-bathing and massage by pristine oligomineral waters, Aeolian Islands on the horizon." },
    ],
  },
  {
    key: "forest-sea-mountains",
    title: "Forest, Sea & Mountains",
    intro:
      "Wake to sun through the chestnut grove and the Tyrrhenian on the horizon. One day, two Sicilies: cool forest trails in the morning, fine-sand beaches by afternoon — Stromboli, Lipari and Vulcano in view.",
    items: [
      { slug: "sea-and-mountains-day", name: "Sea & Mountains Day", duration: "Full day", description: "Chestnut canopy at dawn, crystalline Tyrrhenian by afternoon — one curated day, two landscapes." },
    ],
  },
  {
    key: "forest-trekking",
    title: "Forest Trekking",
    intro:
      "Secret Peloritani paths with our naturalist guides, between oaks and holm oaks. Ridge views over the Two Seas — then a massage and a kilometre-zero meal back at the borgo.",
    items: [
      { slug: "peloritani-trek", name: "Peloritani Trek", duration: "Half day", description: "Half a day on the ridge trails — oaks, holm oaks, and the rare view where two seas meet." },
    ],
  },
  {
    key: "forest-wellness",
    title: "Forest Wellness",
    intro:
      "A sensory sanctuary in the heart of the woods. Spring-water pools, a plantar Kneipp path, sun-warmed solarium and regenerating massages in the shade of great trees.",
    items: [
      { slug: "kneipp-path", name: "Kneipp Path & Spring Pools", duration: "2h", description: "Cold and warm spring water, alternated along the plantar Kneipp circuit." },
      { slug: "forest-massage", name: "Forest Ritual Massage", duration: "60min", description: "A regenerating massage in the shade of centuries-old trees, the forest as soundtrack." },
    ],
  },
  {
    key: "cooking-class",
    title: "Cooking Class",
    intro:
      "At Boschetto Cooking, you cook what the estate gave us that morning — garden tomatoes, Serra degli Aromi herbs, Tumminia-grain bread, eggs from our henhouse. Then you sit and eat it, paired with Sicilian wines.",
    items: [
      { slug: "sicilian-cooking", name: "Sicilian Cooking Experience", duration: "Half day", description: "Half a day in the kitchen with our chefs — garden to table, local wines to close." },
    ],
  },
  {
    key: "wine-tasting",
    title: "Wine Tasting",
    intro:
      "Faro DOC — Sicily's only DOC, born in the Peloritani — poured among the aromatic plants of the Serra, beneath the oaks of the Boschetto, or by the biolake with the Aeolian Islands on the horizon.",
    items: [
      { slug: "faro-doc-tasting", name: "Faro DOC Exclusive Tasting", duration: "2h", description: "A curated flight from the Peloritani's finest cellars — greenhouse, grove or biolake." },
    ],
  },
];