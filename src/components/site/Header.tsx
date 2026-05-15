import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-borgo.png";

const nav = [
  { to: "/experiences", label: "Experiences" },
  { to: "/stay", label: "Rooms" },
  { to: "/dining", label: "Dining & Bar" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"IT" | "EN">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[oklch(0.18_0.03_150)]/95 backdrop-blur-md border-b border-accent/30 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Borgo Musolino — Home">
          <img
            src={logo}
            alt="Borgo Musolino"
            className={`transition-all duration-500 ${scrolled || open ? "h-14" : "h-20 md:h-24"} w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.95rem] tracking-[0.22em] uppercase text-white/85 hover:text-accent transition-colors"
              activeProps={{ className: "!text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang((l) => (l === "EN" ? "IT" : "EN"))}
            className="text-[0.85rem] tracking-[0.3em] text-white/70 hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            {lang}
          </button>
          <Link
            to="/contact"
            className="border border-accent text-accent px-5 py-2 text-[0.85rem] tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Book
          </Link>
        </nav>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-accent/20 mt-2 bg-[oklch(0.18_0.03_150)]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-accent text-base tracking-[0.18em] uppercase text-sm"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setLang((l) => (l === "EN" ? "IT" : "EN"))}
              className="self-start text-xs tracking-[0.3em] text-accent border border-accent/50 px-3 py-1 mt-2"
            >
              {lang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}