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

const placeholder = "Info coming soon.";

export const categories: Category[] = [
  {
    key: "forest-bathing",
    title: "Forest Bathing",
    intro:
      "Immerse yourself in the silence of Borgo Musolino's ancient woods. Guided by experts, deep breathing among oaks and holm oaks becomes therapy — pure air rich in monoterpenes regenerates the body and quiets the mind.",
    items: [
      { slug: "forest-bathing", name: "Forest Bathing Experience", duration: "2h", description: "A guided Shinrin-Yoku ritual through the ancient oaks and holm oaks of the Borgo." },
    ],
  },
  {
    key: "forest-holistic",
    title: "Forest Holistic",
    intro:
      "In the Hazelnut Park and at Biolake Gibbiuni, holistic practices — yoga, meditation, tai chi and aromatherapy — are offered amid birdsong and oligomineral waters.",
    items: [
      { slug: "yoga-meditation", name: "Yoga & Meditation in the Woods", duration: "1h30", description: "Practice surrounded by silence, water and the canopy of the Hazelnut Park." },
      { slug: "biolake-ritual", name: "Biolake Gibbiuni Ritual", duration: "2h", description: "Sunbathing, massage and oligomineral immersion at our pristine biolake." },
    ],
  },
  {
    key: "forest-sea-mountains",
    title: "Forest, Sea & Mountains",
    intro:
      "A unique experience pairing Sicilian woodland with the Tyrrhenian sea — chestnut groves at sunrise, fine-sand beaches by day, the Aeolian Islands on the horizon.",
    items: [
      { slug: "sea-and-mountains-day", name: "Sea & Mountains Day", duration: "Full day", description: "From the chestnut canopy to the Tyrrhenian shore — a curated day across two landscapes." },
    ],
  },
  {
    key: "forest-trekking",
    title: "Forest Trekking",
    intro:
      "Guided treks along the secret paths of the Peloritani Mountains, with sweeping views of the 'Two Seas' — the Tyrrhenian and the Ionian.",
    items: [
      { slug: "peloritani-trek", name: "Peloritani Trek", duration: "Half day", description: "Follow expert nature guides through oaks and holm oaks to the panoramic ridges." },
    ],
  },
  {
    key: "forest-wellness",
    title: "Forest Wellness",
    intro:
      "An open-air sanctuary in the heart of the woods: outdoor gym, recirculating spring-water pools, foot Kneipp path, solarium and massages beneath majestic trees.",
    items: [
      { slug: "kneipp-path", name: "Kneipp Path & Spring Pools", duration: "2h", description: "Restorative immersion in pure spring water and the foot Kneipp circuit." },
      { slug: "forest-massage", name: "Forest Ritual Massage", duration: "60min", description: "A regenerating massage in the shade of centuries-old trees." },
    ],
  },
  {
    key: "cooking-class",
    title: "Cooking Class",
    intro:
      "At 'Boschetto Cooking' our chefs share the secrets of Sicilian cuisine — using produce from the Borgo's gardens, eggs from the Pollaio and bread of ancient Tumminia grain.",
    items: [
      { slug: "sicilian-cooking", name: "Sicilian Cooking Experience", duration: "Half day", description: "Hands-on class ending with the meal you prepared, paired with local wines." },
    ],
  },
  {
    key: "wine-tasting",
    title: "Wine Tasting",
    intro:
      "Discover Faro DOC — Sicily's only DOC wine, born in the Peloritani — tasted in the Serra degli Aromi, in the Boschetto, or by the Biolake Gibbiuni overlooking the Aeolians.",
    items: [
      { slug: "faro-doc-tasting", name: "Faro DOC Exclusive Tasting", duration: "2h", description: "An exclusive selection from the most prestigious Faro DOC wineries." },
    ],
  },
];