import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import dining from "@/assets/dining.jpg";

export const Route = createFileRoute("/dining")({
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
          At Borgo Musolino food is lived. Garden vegetables, honey from our bees and
          ancient Sicilian grains, paired with Etna and Faro wines — a cuisine that
          listens to the forest and the sea.
        </p>
      </div>

      {/* Two restaurants */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10">
          {[
            {
              tag: "Indoor",
              blurb: "Restored stone walls, candlelight and a centuries-old hearth.",
            },
            {
              tag: "Outdoor",
              blurb: "Open-air tables under the chestnut canopy, wood-fired grill.",
            },
          ].map((r) => (
            <article key={r.tag} className="border border-accent/30 p-10 bg-secondary/20 hover:border-accent transition-colors">
              <p className="eyebrow text-accent">{r.tag}</p>
              <span className="gold-line my-4 block" />
              <p className="mt-4 text-muted-foreground leading-relaxed font-light">{r.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Cuisines */}
      <section className="bg-secondary/40 py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Sicilian Cuisine",
                where: "Indoor · La Sala del Borgo",
                blurb:
                  "Pasta alla Norma, swordfish involtini, caponata and ancient Tumminia grain bread — the soul of the island.",
              },
              {
                name: "Steakhouse",
                where: "Outdoor · Boschetto Terrace",
                blurb:
                  "Aged cuts seared on the wood-fired grill, smoked under the open sky, served with foraged herbs.",
              },
              {
                name: "Dinner at Sena",
                where: "Indoor & Outdoor",
                blurb:
                  "A vegetable-forward tasting menu built each morning from the greenhouse harvest — fresh, light, alive.",
              },
            ].map((c) => (
              <article key={c.name} className="bg-background p-8 border-t-2 border-accent hover-zoom">
                <h3 className="font-serif text-2xl text-primary">{c.name}</h3>
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-accent mt-2">{c.where}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">{c.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
