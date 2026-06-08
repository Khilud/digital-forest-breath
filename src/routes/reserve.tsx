import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import roomSuite from "@/assets/room-suite.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve — Borgo Musolino" },
      { name: "description", content: "Request your stay at Borgo Musolino. Tell us your dates and we'll confirm availability by email." },
      { property: "og:title", content: "Reserve — Borgo Musolino" },
      { property: "og:description", content: "Request your stay in a restored Sicilian borgo between forest and sea." },
      { property: "og:image", content: roomSuite },
    ],
  }),
  component: ReservePage,
});

const roomOptions = [
  "Sea View Rooms",
  "Junior Suite with Terrace",
  "Forest View Rooms",
  "Garden Suites",
  "The Exclusive Lodges",
];

const bookingSchema = z
  .object({
    guest_name: z.string().trim().min(2, "Please enter your full name").max(100),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    check_in: z.string().min(1, "Select a check-in date"),
    check_out: z.string().min(1, "Select a check-out date"),
    guests: z.coerce.number().int().min(1).max(20),
    room_type: z.string().max(60).optional().or(z.literal("")),
    notes: z.string().max(1000).optional().or(z.literal("")),
  })
  .refine((d) => new Date(d.check_out) > new Date(d.check_in), {
    message: "Check-out must be after check-in",
    path: ["check_out"],
  });

function ReservePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries());

    const parsed = bookingSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("bookings").insert({
      guest_name: parsed.data.guest_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      check_in: parsed.data.check_in,
      check_out: parsed.data.check_out,
      guests: parsed.data.guests,
      room_type: parsed.data.room_type || null,
      notes: parsed.data.notes || null,
      status: "pending",
    });
    setSubmitting(false);

    if (error) {
      toast.error("Could not submit your request. Please try again.");
      return;
    }
    setSubmitted(true);
    form.reset();
    toast.success("Request received — we'll confirm by email.");
  };

  return (
    <SiteLayout>
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img src={roomSuite} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.03_150)]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="eyebrow text-accent">Reserve</p>
          <span className="gold-line my-5" />
          <h1 className="font-serif text-5xl md:text-6xl">Request your stay</h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-20">
        {submitted ? (
          <div className="text-center">
            <h2 className="font-serif text-4xl text-primary">Thank you</h2>
            <span className="gold-line my-6 inline-block" />
            <p className="copy-body">
              Your request has been received and is marked as <strong>pending</strong>.
              Our team will confirm availability by email within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 border border-accent text-accent px-6 py-3 text-[0.85rem] tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              New request
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-6">
            <p className="copy-body text-center">
              Tell us your dates — we will confirm by email within 24 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full name" name="guest_name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" type="tel" />
              <Field label="Guests" name="guests" type="number" defaultValue="2" min={1} max={20} required />
              <Field label="Check-in" name="check_in" type="date" required />
              <Field label="Check-out" name="check_out" type="date" required />
            </div>

            <label className="block">
              <span className="eyebrow text-accent text-[0.7rem]">Room type</span>
              <select
                name="room_type"
                defaultValue=""
                className="mt-2 w-full border border-primary/20 bg-transparent px-4 py-3 font-serif text-lg focus:outline-none focus:border-accent"
              >
                <option value="">No preference</option>
                {roomOptions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="eyebrow text-accent text-[0.7rem]">Notes (optional)</span>
              <textarea
                name="notes"
                rows={4}
                maxLength={1000}
                placeholder="Special requests, dietary needs, arrival time…"
                className="mt-2 w-full border border-primary/20 bg-transparent px-4 py-3 font-serif text-lg focus:outline-none focus:border-accent"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <Link to="/contact" className="text-primary/60 hover:text-accent text-sm tracking-[0.2em] uppercase">
                Or contact us directly
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="border border-accent bg-accent text-accent-foreground px-8 py-3 text-[0.85rem] tracking-[0.3em] uppercase hover:bg-transparent hover:text-accent transition-colors disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request stay"}
              </button>
            </div>
          </form>
        )}
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type,
  required,
  defaultValue,
  min,
  max,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-accent text-[0.7rem]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        min={min}
        max={max}
        className="mt-2 w-full border border-primary/20 bg-transparent px-4 py-3 font-serif text-lg focus:outline-none focus:border-accent"
      />
    </label>
  );
}