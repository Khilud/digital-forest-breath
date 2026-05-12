import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { categories } from "@/data/experiences";
import expForest from "@/assets/exp-forest-bathing.jpg";
import expCooking from "@/assets/exp-cooking.jpg";
import expWine from "@/assets/exp-wine.jpg";
import expWellness from "@/assets/exp-wellness.jpg";
import borgoAerial from "@/assets/borgo-aerial.jpg";
import sunset from "@/assets/sunset.jpg";
import dining from "@/assets/dining.jpg";

const categoryImages: Record<string, string> = {
  "forest-bathing": expForest,
  "forest-holistic": expWellness,
  "forest-sea-mountains": sunset,
  "forest-trekking": borgoAerial,
  "forest-wellness": expWellness,
  "cooking-class": expCooking,
  "wine-tasting": expWine,
};
const fallbackImage = dining;

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
  const [activeKey, setActiveKey] = useState<string>(categories[0].key);
  const active = categories.find((c) => c.key === activeKey) ?? categories[0];
  const activeImage = categoryImages[active.key] ?? fallbackImage;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={expForest} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/55" />
        <div className="absolute top-28 left-8 hidden md:block w-16 h-16 border-l border-t border-accent/60" />
        <div className="absolute top-28 right-8 hidden md:block w-16 h-16 border-r border-t border-accent/60" />
        <div className="absolute bottom-20 left-8 hidden md:block w-16 h-16 border-l border-b border-accent/60" />
        <div className="absolute bottom-20 right-8 hidden md:block w-16 h-16 border-r border-b border-accent/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent fade-up">Experiences</p>
          <span className="gold-line my-6 fade-up-delay-1" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-3xl leading-[1.05] fade-up-delay-1">
            <span className="font-script text-accent text-3xl md:text-5xl block mb-2">Rituals of</span>
            the forest
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 font-light fade-up-delay-2">
            Seven curated paths between woodland, water and table — each shaped by the seasons of Sicily.
          </p>
        </div>
      </section>

      {/* Sticky tab bar */}
      <div className="sticky top-[70px] z-30 bg-[oklch(0.18_0.03_150)]/95 backdrop-blur-md border-b border-accent/30">
        <div className="mx-auto max-w-7xl px-6 overflow-x-auto">
          <div className="flex gap-2 md:gap-4 py-4 min-w-max">
            {categories.map((cat) => {
              const isActive = cat.key === activeKey;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveKey(cat.key)}
                  className={`text-[0.7rem] md:text-xs tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-300 ${
                    isActive
                      ? "border-accent text-[oklch(0.18_0.03_150)] bg-accent"
                      : "border-accent/30 text-white/80 hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active category */}
      <section className="bg-background py-20 md:py-28 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-[170px]">
            <div key={active.key} className="relative overflow-hidden aspect-[4/5] hover-zoom fade-up">
              <img src={activeImage} alt={active.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.03_150)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="block w-12 h-px bg-accent mb-3" />
                <p className="font-script text-accent text-3xl">{active.title}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block w-24 h-24 border-r-2 border-b-2 border-accent" />
            </div>
          </div>

          <div key={active.key + "-content"} className="lg:col-span-7 fade-up">
            <p className="eyebrow text-accent">
              0{categories.findIndex((c) => c.key === active.key) + 1} · Category
            </p>
            <span className="gold-line my-5 block" />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">{active.title}</h2>
            <p className="text-muted-foreground mt-5 max-w-2xl font-light text-lg leading-relaxed">
              {active.intro}
            </p>

            <ul className="mt-12 space-y-4">
              {active.items.map((item, i) => (
                <li
                  key={item.slug}
                  className="group relative border border-border bg-card hover:border-accent transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:items-center">
                    <div className="md:col-span-7">
                      <p className="eyebrow text-accent/80 mb-2 text-[0.7rem]">No. 0{i + 1}</p>
                      <h3 className="font-serif text-2xl md:text-3xl text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="md:col-span-3 text-sm tracking-[0.2em] uppercase text-muted-foreground">
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Browse all grid */}
      <section className="bg-secondary/30 py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="eyebrow text-accent">Browse all</p>
            <span className="gold-line my-5 inline-block" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-2">Every ritual at a glance</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const img = categoryImages[cat.key] ?? fallbackImage;
              const isActive = cat.key === activeKey;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveKey(cat.key);
                    window.scrollTo({ top: 480, behavior: "smooth" });
                  }}
                  className="group relative overflow-hidden aspect-[3/4] text-left"
                >
                  <img
                    src={img}
                    alt={cat.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.03_150)]/90 via-[oklch(0.18_0.03_150)]/30 to-transparent" />
                  {isActive && <div className="absolute inset-0 ring-2 ring-accent ring-inset" />}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="block w-8 h-px bg-accent mb-3 transition-all duration-500 group-hover:w-16" />
                    <h3 className="font-serif text-xl md:text-2xl">{cat.title}</h3>
                    <p className="text-xs text-white/70 mt-1 tracking-wider uppercase">
                      {cat.items.length} {cat.items.length === 1 ? "experience" : "experiences"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}