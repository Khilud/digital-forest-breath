import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { toast } from "sonner";
import sunset from "@/assets/sunset.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Borgo Musolino" },
      { name: "description", content: "Begin the journey. Tell us when you'd like to come and we'll craft an itinerary." },
      { property: "og:title", content: "Contact & Book — Borgo Musolino" },
      { property: "og:description", content: "Plan your stay at Borgo Musolino." },
      { property: "og:image", content: sunset },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <SiteLayout>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={sunset} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Contact &amp; Book</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-7xl">Begin <span className="font-script text-accent">the journey</span></h1>
        </div>
      </section>
      <div className="mx-auto max-w-2xl px-6 py-24">
        <form onSubmit={onSubmit} className="grid gap-5">
          <input required name="name" placeholder="Name" className="border border-border bg-background px-4 py-3 focus:border-accent outline-none" />
          <input required type="email" name="email" placeholder="Email" className="border border-border bg-background px-4 py-3 focus:border-accent outline-none" />
          <input name="dates" placeholder="Preferred dates" className="border border-border bg-background px-4 py-3 focus:border-accent outline-none" />
          <textarea required name="message" rows={5} placeholder="Tell us about your stay" className="border border-border bg-background px-4 py-3 focus:border-accent outline-none" />
          <button disabled={sending} className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60">
            {sending ? "Sending…" : "Send inquiry"}
          </button>
        </form>
        <p className="text-center text-muted-foreground mt-10 text-sm">
          info@borgomusolino.com
        </p>
      </div>
    </SiteLayout>
  );
}
