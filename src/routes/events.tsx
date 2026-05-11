import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import dining from "@/assets/dining.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Dining — Borgo Musolino" },
      { name: "description", content: "Foraged herbs, ancestral grains and indigenous wines — a cuisine that listens to the forest." },
      { property: "og:title", content: "Dining — Borgo Musolino" },
      { property: "og:description", content: "Tables among the trees." },
      { property: "og:image", content: dining },
    ],
  }),
  component: DiningPage,
});

function DiningPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={dining} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Dining &amp; Bar</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl">Tables <span className="font-script text-accent">among</span> the trees</h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          In Borgo Musolino food isn't served — it is lived. Ancient Sicilian grain bread,
          warm ricotta, honey from our bees, eggs from our chicken coop, vegetables picked
          in the greenhouse, paired with Faro DOC, Etna Bianco, Nero d'Avola and Passito di
          Pantelleria. A cuisine that listens to the forest, the season and the sea.
        </p>
      </div>
    </SiteLayout>
  );
}
