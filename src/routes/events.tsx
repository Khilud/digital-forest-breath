import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import sunset from "@/assets/sunset.jpg";
import borgoAerial from "@/assets/borgo-aerial.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Weddings — Borgo Musolino" },
      { name: "description", content: "Exclusive weddings and private events at Borgo Musolino — a 16th-century Sicilian fiefdom with sweeping views of the Aeolian Islands." },
      { property: "og:title", content: "Events & Weddings — Borgo Musolino" },
      { property: "og:description", content: "We host exclusive weddings between forest, sea and sky." },
      { property: "og:image", content: sunset },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={sunset} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Events &amp; Weddings</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl">
            We host <span className="font-script text-accent">exclusive</span> weddings
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/85 font-light">
            A 16th-century Sicilian fiefdom, fifty hectares of woodland and the Aeolian
            Islands on the horizon — an unrepeatable setting for the most important day.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative hover-zoom overflow-hidden">
            <img src={borgoAerial} alt="Borgo Musolino aerial" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -right-4 hidden md:block w-32 h-32 border-r-2 border-b-2 border-accent" />
          </div>
          <div>
            <p className="eyebrow text-accent">A bespoke celebration</p>
            <span className="gold-line my-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              Between woodland,
              <span className="block font-script text-accent text-3xl md:text-4xl mt-2">sea &amp; sky.</span>
            </h2>
            <ul className="mt-8 space-y-4 text-muted-foreground font-light text-lg">
              <li>— Ceremonies in the chestnut grove or on the terrace overlooking the Aeolian Islands</li>
              <li>— Banquets curated by our chefs with organic produce from the Borgo's gardens</li>
              <li>— Faro DOC, Etna Bianco and Nero d'Avola from our cellar</li>
              <li>— Exclusive use of suites, garden lodges and the entire estate</li>
              <li>— Private events, anniversaries, corporate retreats</li>
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-block bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Plan your wedding
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
