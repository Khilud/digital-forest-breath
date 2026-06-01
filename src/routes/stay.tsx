import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import roomSuite from "@/assets/room-suite.jpg";
import roomClassic from "@/assets/room-classic.jpg";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Stay — Borgo Musolino" },
      { name: "description", content: "Sea-view rooms, junior suites with terrace, forest-view rooms, garden suites and exclusive lodges in an ancient Sicilian borgo near Messina." },
      { property: "og:title", content: "Stay — Borgo Musolino" },
      { property: "og:description", content: "Rooms, suites and lodges in a restored Sicilian borgo between the Tyrrhenian coast and the Aeolian Islands." },
      { property: "og:image", content: roomSuite },
    ],
  }),
  component: StayPage,
});

const rooms = [
  {
    img: roomSuite,
    name: "Sea View Rooms",
    meta: "Sleeps 2 · Tyrrhenian terrace",
    blurb:
      "Open your eyes and the first colour is blue. Wide terraces suspended over the Tyrrhenian, with Stromboli, Lipari and Vulcano on the horizon. At sunset the walls turn gold; at night, the stars settle on the water.",
  },
  {
    img: roomSuite,
    name: "Junior Suite with Terrace",
    meta: "Sleeps 2 · Plunge pool · Hot tub",
    blurb:
      "Open-air living rooms, a private plunge pool and daybeds wrapped in silence. From the hot tub you watch the Aeolian Islands — and understand why Ulysses paused to listen.",
  },
  {
    img: roomClassic,
    name: "Forest View Rooms",
    meta: "Sleeps 2 · Canopy windows",
    blurb:
      "You can hear the sea through the canopy, but never see it. Tall windows frame oaks, holm oaks and strawberry trees; sleep arrives with the owl, morning with sunlight through the branches.",
  },
  {
    img: roomClassic,
    name: "Garden Suites",
    meta: "Sleeps 2–4 · Woodland hideaway",
    blurb:
      "Small houses hidden in the woods, scented with myrtle and reached by stone paths. Sleeps two or four, with sea-facing sunsets and fireflies for company.",
  },
  {
    img: roomSuite,
    name: "The Exclusive Lodges",
    meta: "Sleeps 2 · Private mini-pool · Hammock",
    blurb:
      "The secret heart of the borgo. Wood-and-stone retreats beneath centuries-old camellias, citrus and pomegranate. A hammock, a glass of wine, a private mini-pool — and the forest, all yours.",
  },
];

function StayPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={roomSuite} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Stay</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl">An ancient borgo, <span className="font-script text-accent block mt-2 text-4xl md:text-5xl">tenderly restored</span></h1>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
        {rooms.map((r) => (
          <article key={r.name} className="hover-zoom">
            <div className="overflow-hidden aspect-[4/5]">
              <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-serif text-3xl mt-6 text-primary">{r.name}</h2>
            <p className="eyebrow text-accent mt-3 text-[0.7rem]">{r.meta}</p>
            <p className="copy-body mt-3">{r.blurb}</p>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
