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
      { property: "og:description", content: "Hospitality measured in breaths, not stars — between the Tyrrhenian and the Aeolian Islands." },
      { property: "og:image", content: roomSuite },
    ],
  }),
  component: StayPage,
});

const rooms = [
  { img: roomClassic, name: "Forest Classic", blurb: "Warm stone walls and views of the chestnut canopy." },
  { img: roomSuite, name: "Borgo Suite", blurb: "A private terrace, cedar tub and the song of the woodland at dusk." },
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
            <p className="text-muted-foreground mt-3 leading-relaxed">{r.blurb}</p>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
