import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import borgoAerial from "@/assets/borgo-aerial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Borgo Musolino" },
      { name: "description", content: "The philosophy of Borgo Musolino — Digital Forest Breath, the reciprocity between human and forest." },
      { property: "og:title", content: "About — Borgo Musolino" },
      { property: "og:description", content: "The breath of the forest, made tangible." },
      { property: "og:image", content: borgoAerial },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={borgoAerial} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Our Philosophy</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl">The breath <span className="font-script text-accent">of</span> the forest</h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-6 py-24 space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Imagine being surrounded by 50 hectares of woodland and farmland, immersed in the
          history and nature of Sicily. Borgo Musolino — a former noble Sicilian fiefdom
          dating back to the 16th century — still enchants today with its pristine beauty.
          At the heart of the estate, a charming period residence has been carefully
          restored into a restaurant, guest rooms, apartments and suites, with the
          breathtaking Aeolian Islands on the horizon.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          <em className="text-accent">Digital Forest Breath</em> is our quiet manifesto:
          a reciprocity between our breath and the breath of the trees. The Forest
          Country Experience is the perfect place for nature lovers seeking experiential
          tourism that regenerates body and soul.
        </p>
      </div>
    </SiteLayout>
  );
}
