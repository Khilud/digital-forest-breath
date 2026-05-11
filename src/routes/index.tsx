import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroForest from "@/assets/hero-forest.jpg";
import expForest from "@/assets/exp-forest-bathing.jpg";
import expCooking from "@/assets/exp-cooking.jpg";
import expWine from "@/assets/exp-wine.jpg";
import expWellness from "@/assets/exp-wellness.jpg";
import borgoAerial from "@/assets/borgo-aerial.jpg";
import dining from "@/assets/dining.jpg";
import sunset from "@/assets/sunset.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Borgo Musolino — Forest Experience" },
      {
        name: "description",
        content:
          "Reconnect with nature through wellness and taste. An immersive Sicilian forest sanctuary in Messina — hospitality, spa, dining and curated experiences.",
      },
      { property: "og:title", content: "Borgo Musolino — Forest Experience" },
      { property: "og:description", content: "Reconnect with nature through wellness and taste." },
      { property: "og:image", content: heroForest },
    ],
  }),
  component: Index,
});

const previewExperiences = [
  { img: expForest, title: "Forest Bathing", to: "/experiences" as const, blurb: "Slow immersion guided by breath and silence." },
  { img: expCooking, title: "Cooking Class", to: "/experiences" as const, blurb: "Sicilian tradition, from garden to flame." },
  { img: expWine, title: "Wine Tasting", to: "/experiences" as const, blurb: "Faro DOC and indigenous Sicilian wines." },
  { img: expWellness, title: "Wellness", to: "/experiences" as const, blurb: "Cedar tubs, sauna, forest rituals." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroForest}
            alt="Misty forest at golden hour at Borgo Musolino"
            className="w-full h-full object-cover kenburns"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/30" />
        {/* Gold corner ornaments */}
        <div className="absolute top-28 left-8 hidden md:block w-16 h-16 border-l border-t border-accent/60" />
        <div className="absolute top-28 right-8 hidden md:block w-16 h-16 border-r border-t border-accent/60" />
        <div className="absolute bottom-20 left-8 hidden md:block w-16 h-16 border-l border-b border-accent/60" />
        <div className="absolute bottom-20 right-8 hidden md:block w-16 h-16 border-r border-b border-accent/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <p className="eyebrow text-accent fade-up">Messina · Sicilia · Italia</p>
          <span className="gold-line my-6 fade-up-delay-1" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.02] fade-up-delay-1">
            <span className="font-script text-accent text-3xl md:text-5xl block mb-2">The breath</span>
            of the forest
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/85 font-light fade-up-delay-2">
            An immersive sanctuary where wellness, taste and ancient woodland meet.
          </p>
          <Link
            to="/experiences"
            className="mt-10 inline-block border border-accent text-accent px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-accent hover:text-[oklch(0.18_0.03_150)] transition-all duration-500 fade-up-delay-3"
          >
            Discover Experiences
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent/80 text-[0.6rem] tracking-[0.4em] uppercase flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="w-px h-10 bg-accent/60 animate-pulse" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-28 md:py-40 px-6 bg-forest text-white overflow-hidden">
        {/* Subtle gold ornament */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "var(--gradient-gold)" }} />
        <div className="mx-auto max-w-3xl text-center relative">
          <p className="eyebrow text-accent">Philosophy</p>
          <span className="gold-line my-6" />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Reconnect with nature
            <span className="block font-script text-accent text-3xl md:text-5xl mt-3">through wellness &amp; taste</span>
          </h2>
          <p className="mt-10 text-white/75 leading-relaxed text-lg font-light">
            <em className="text-accent">Digital Forest Breath</em> — the reciprocity between our breath and the
            breath of trees. At Borgo Musolino we make this exchange tangible: a place
            where ancient stones, immense woodlands and refined Italian hospitality
            invite you to remember you are not separate from nature, but embedded in
            its quiet, living web.
          </p>
        </div>
      </section>

      {/* Experiences preview */}
      <section className="py-28 px-6 bg-secondary/40 relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="eyebrow text-accent">Experiences</p>
              <span className="gold-line my-5 block" />
              <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-xl text-primary">
                Rituals between forest and table
              </h2>
            </div>
            <Link to="/experiences" className="text-xs tracking-[0.3em] uppercase text-primary gold-underline self-start md:self-auto pb-1">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewExperiences.map((e) => (
              <Link key={e.title} to={e.to} className="group block hover-zoom">
                <div className="relative overflow-hidden aspect-[3/4] bg-muted">
                  <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.03_150)]/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="block w-8 h-px bg-accent mb-3 transition-all duration-500 group-hover:w-16" />
                    <h3 className="font-serif text-2xl">{e.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{e.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stay split */}
      <section className="py-32 px-6 bg-background">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative hover-zoom overflow-hidden">
            <img src={borgoAerial} alt="Aerial view of Borgo Musolino" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -right-4 hidden md:block w-32 h-32 border-r-2 border-b-2 border-accent" />
          </div>
          <div className="lg:pl-12">
            <p className="eyebrow text-accent">Stay &amp; Wellness</p>
            <span className="gold-line my-6" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary">
              An ancient borgo,
              <span className="block font-script text-accent text-3xl md:text-4xl mt-2">tenderly restored.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
              Stone suites with forest views, a wood-clad spa, cedar tubs steaming
              into the trees. Each room is a slow conversation between heritage and
              comfort.
            </p>
            <Link to="/stay" className="mt-10 inline-block border border-primary text-primary px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors">
              Discover the rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="relative py-40 px-6 text-white overflow-hidden">
        <img src={dining} alt="Outdoor dining" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/65" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent">Dining & Bar</p>
          <span className="gold-line my-6" />
          <h2 className="font-serif text-4xl md:text-6xl">
            Tables
            <span className="font-script text-accent block text-3xl md:text-5xl my-2">among</span>
            the trees
          </h2>
          <p className="mt-6 text-white/80 font-light leading-relaxed text-lg">
            Foraged herbs, ancestral grains, indigenous wines. A cuisine that
            listens to the forest and the season.
          </p>
          <Link to="/dining" className="mt-10 inline-block border border-accent text-accent px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-[oklch(0.18_0.03_150)] transition-colors">
            View Dining
          </Link>
        </div>
      </section>

      {/* Sunset CTA */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-accent">Plan your stay</p>
            <span className="gold-line my-6" />
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-primary">
              Begin
              <span className="block font-script text-accent text-3xl md:text-5xl mt-2">the journey.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
              Tell us when you'd like to come. We'll craft an itinerary tuned to
              the forest's rhythm and your own.
            </p>
            <Link to="/contact" className="mt-10 inline-block bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
              Contact & Book
            </Link>
          </div>
          <div className="relative hover-zoom overflow-hidden">
            <img src={sunset} alt="Sunset over the valley" loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute -top-4 -left-4 hidden md:block w-32 h-32 border-l-2 border-t-2 border-accent" />
          </div>
        </div>
      </section>

      {/* Events & Weddings */}
      <section className="relative py-40 px-6 text-white overflow-hidden">
        <img src={sunset} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/75" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent">Events</p>
          <span className="gold-line my-6" />
          <h2 className="font-serif text-4xl md:text-6xl">
            We host
            <span className="font-script text-accent block text-3xl md:text-5xl my-2">exclusive</span>
            weddings
          </h2>
          <p className="mt-6 text-white/80 font-light leading-relaxed text-lg">
            A 16th-century Sicilian fiefdom, 50 hectares of woodland and the Aeolian Islands on the horizon —
            an unrepeatable setting for weddings and private celebrations.
          </p>
          <Link to="/events" className="mt-10 inline-block border border-accent text-accent px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-[oklch(0.18_0.03_150)] transition-colors">
            Discover Events
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
