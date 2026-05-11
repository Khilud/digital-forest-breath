export type Experience = {
  slug: string;
  name: string;
  duration: string;
  priceFrom: string;
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
      "Slow, sensorial immersion in the living forest — a practice of presence guided by breath and silence.",
    items: [
      { slug: "forest-bathing-classic", name: "Forest Bathing Classic", duration: "2h", priceFrom: "da 45,00", description: "A gentle introduction to Shinrin-Yoku among ancient trees." },
      { slug: "forest-bathing-intensive", name: "Forest Bathing Intensive", duration: "3h", priceFrom: "da 75,00", description: "Experience a deeper immersion in the forest's energy through breath and awareness." },
      { slug: "forest-bathing-sunrise", name: "Sunrise Forest Bathing", duration: "2h", priceFrom: "da 60,00", description: placeholder },
    ],
  },
  {
    key: "trekking",
    title: "Forest Trekking",
    intro: "Guided walks through hidden paths, springs and panoramic ridges of Aspromonte.",
    items: [
      { slug: "trek-easy", name: "Easy Trek", duration: "3h", priceFrom: "da 35,00", description: placeholder },
      { slug: "trek-full-day", name: "Full Day Trek", duration: "6h", priceFrom: "da 85,00", description: placeholder },
    ],
  },
  {
    key: "cooking",
    title: "Cooking Classes",
    intro: "Hands-on Calabrian tradition with our chef — from foraged herbs to wood-fired bread.",
    items: [
      { slug: "pasta-class", name: "Fresh Pasta Class", duration: "3h", priceFrom: "da 95,00", description: placeholder },
      { slug: "bread-class", name: "Wood-Fired Bread", duration: "4h", priceFrom: "da 110,00", description: placeholder },
      { slug: "menu-class", name: "Full Menu Experience", duration: "5h", priceFrom: "da 150,00", description: placeholder },
    ],
  },
  {
    key: "wine",
    title: "Wine Tasting",
    intro: "Indigenous Calabrian varietals tasted in vineyard, cellar and forest clearing.",
    items: [
      { slug: "tasting-classic", name: "Classic Tasting", duration: "1h30", priceFrom: "da 35,00", description: placeholder },
      { slug: "tasting-premium", name: "Premium Tasting", duration: "2h", priceFrom: "da 65,00", description: placeholder },
    ],
  },
  {
    key: "wellness",
    title: "Wellness",
    intro: "Sauna, cedar tubs, massage rituals — restoration drawn from the forest.",
    items: [
      { slug: "spa-access", name: "Spa Access", duration: "2h", priceFrom: "da 40,00", description: placeholder },
      { slug: "forest-massage", name: "Forest Ritual Massage", duration: "60min", priceFrom: "da 90,00", description: placeholder },
      { slug: "couples-spa", name: "Couples Spa Ritual", duration: "2h", priceFrom: "da 180,00", description: placeholder },
    ],
  },
  {
    key: "borgo",
    title: "A Day at the Borgo",
    intro: "Curated full-day journeys through the village and its surrounding wild.",
    items: [
      { slug: "day-at-borgo", name: "A Day at the Borgo", duration: "8h", priceFrom: "da 180,00", description: placeholder },
    ],
  },
  {
    key: "sunset",
    title: "Borgo at Sunset",
    intro: "An evening of golden light, aperitivo and quiet music among the stones.",
    items: [
      { slug: "sunset-aperitivo", name: "Sunset Aperitivo", duration: "2h", priceFrom: "da 50,00", description: placeholder },
      { slug: "sunset-dinner", name: "Sunset Dinner", duration: "3h", priceFrom: "da 120,00", description: placeholder },
    ],
  },
  {
    key: "excursions",
    title: "Excursions",
    intro: "Off-borgo adventures into Aspromonte and the Ionian coast.",
    items: [
      { slug: "aspromonte-jeep", name: "Aspromonte Jeep Tour", duration: "5h", priceFrom: "da 130,00", description: placeholder },
      { slug: "coast-day", name: "Ionian Coast Day", duration: "8h", priceFrom: "da 160,00", description: placeholder },
    ],
  },
];