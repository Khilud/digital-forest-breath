import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { categories } from "@/data/experiences";
import expForest from "@/assets/exp-forest-bathing.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Borgo Musolino" },
      { name: "description", content: "Forest bathing, holistic rituals, trekking on the Peloritani, cooking classes, Faro DOC wine tasting and forest wellness — curated experiences at Borgo Musolino, Messina." },
      { property: "og:title", content: "Experiences — Borgo Musolino" },
      { property: "og:description", content: "Curated forest, table and wellness experiences." },
      { property: "og:image", content: expForest },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={expForest} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Experiences</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl">Rituals of the forest</h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {categories.map((cat, idx) => (
          <section key={cat.key} className={idx > 0 ? "mt-24" : ""}>
            <div className="border-b border-border pb-6 mb-8">
              <p className="eyebrow text-accent">0{idx + 1}</p>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">{cat.title}</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl font-light">{cat.intro}</p>
            </div>
            <ul className="divide-y divide-border">
              {cat.items.map((item) => (
                <li
                  key={item.slug}
                  className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:items-center"
                >
                  <div className="md:col-span-7">
                    <h3 className="font-serif text-2xl">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="md:col-span-3 text-sm text-muted-foreground tracking-wide">
                    {item.duration}
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <Link
                      to="/contact"
                      className="inline-block text-xs tracking-[0.25em] uppercase border border-primary text-primary px-5 py-3 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}