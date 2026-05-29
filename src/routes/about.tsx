import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import borgoAerial from "@/assets/borgo-aerial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Borgo Musolino" },
      { name: "description", content: "The philosophy of Borgo Musolino — a Forest Resort Experience in a sixteenth-century Sicilian estate above the Aeolian Islands." },
      { property: "og:title", content: "About — Borgo Musolino" },
      { property: "og:description", content: "A Forest Resort Experience in a sixteenth-century Sicilian estate." },
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
          The <em className="text-accent">Forest Resort Experience</em> is our way of
          welcoming you: stone rooms restored by hand, chestnut woods that change with
          the season, a kitchen built around what the garden gave us that morning —
          and time to actually notice it.
        </p>
      </div>
    </SiteLayout>
  );
}
