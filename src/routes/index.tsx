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
          "Reconnect with nature through wellness and taste. An immersive forest sanctuary in Calabria — hospitality, spa, dining and curated experiences.",
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
  { img: expCooking, title: "Cooking Classes", to: "/experiences" as const, blurb: "Calabrian tradition, hand to flame." },
  { img: expWine, title: "Wine Tasting", to: "/experiences" as const, blurb: "Indigenous varietals among the vines." },
  { img: expWellness, title: "Wellness", to: "/experiences" as const, blurb: "Cedar tubs, sauna, forest rituals." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroForest}
          alt="Misty forest at golden hour at Borgo Musolino"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <p className="eyebrow text-accent">Calabria · Italia</p>
          <span className="gold-line my-6" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.05]">
            The breath of the forest
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 font-light">
            An immersive sanctuary where wellness, taste and ancient woodland meet.
          </p>
          <Link
            to="/experiences"
            className="mt-10 inline-block border border-white/80 px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
          >
            Discover Experiences
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[0.6rem] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent">Philosophy</p>
          <span className="gold-line my-6" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Reconnect with nature through wellness and taste.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg font-light">
            <em>Digital Forest Breath</em> — the reciprocity between our breath and the
            breath of trees. At Borgo Musolino we make this exchange tangible: a place
            where ancient stones, immense woodlands and refined Italian hospitality
            invite you to remember you are not separate from nature, but embedded in
            its quiet, living web.
          </p>
        </div>
      </section>

      {/* Experiences preview */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="eyebrow text-accent">Experiences</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-xl">
                Rituals between forest and table
              </h2>
            </div>
            <Link to="/experiences" className="text-sm tracking-[0.25em] uppercase border-b border-accent pb-1 self-start md:self-auto">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewExperiences.map((e) => (
              <Link key={e.title} to={e.to} className="group block hover-zoom">
                <div className="overflow-hidden aspect-[3/4] bg-muted">
                  <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl mt-5">{e.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stay split */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="hover-zoom overflow-hidden">
            <img src={borgoAerial} alt="Aerial view of Borgo Musolino" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="lg:pl-12">
            <p className="eyebrow text-accent">Stay & Wellness</p>
            <span className="gold-line my-6" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">An ancient borgo, restored.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
              Stone suites with forest views, a wood-clad spa, cedar tubs steaming
              into the trees. Each room is a slow conversation between heritage and
              comfort.
            </p>
            <Link to="/stay" className="mt-10 inline-block border border-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-colors">
              Discover the rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="relative py-32 px-6 text-white overflow-hidden">
        <img src={dining} alt="Outdoor dining" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent">Dining & Bar</p>
          <span className="gold-line my-6" />
          <h2 className="font-serif text-4xl md:text-5xl">Tables among the trees</h2>
          <p className="mt-6 text-white/80 font-light leading-relaxed text-lg">
            Foraged herbs, ancestral grains, indigenous wines. A cuisine that
            listens to the forest and the season.
          </p>
          <Link to="/dining" className="mt-10 inline-block border border-white px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
            View Dining
          </Link>
        </div>
      </section>

      {/* Sunset CTA */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow text-accent">Plan your stay</p>
            <span className="gold-line my-6" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Begin the journey.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
              Tell us when you'd like to come. We'll craft an itinerary tuned to
              the forest's rhythm and your own.
            </p>
            <Link to="/contact" className="mt-10 inline-block bg-foreground text-background px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
              Contact & Book
            </Link>
          </div>
          <div className="hover-zoom overflow-hidden">
            <img src={sunset} alt="Sunset over the valley" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
