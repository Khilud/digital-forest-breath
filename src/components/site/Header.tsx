import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/stay", label: "Stay" },
  { to: "/dining", label: "Dining" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl tracking-wide ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}
          >
            Borgo Musolino
          </span>
          <span
            className={`eyebrow text-[0.55rem] mt-1 ${
              scrolled || open ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            Forest Experience
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-accent"
                  : "text-white/85 hover:text-white"
              }`}
              activeProps={{ className: "!text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-current px-5 py-2 text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            style={{ color: scrolled ? "var(--accent)" : "white" }}
          >
            Book
          </Link>
        </nav>

        <button
          className={`lg:hidden ${scrolled || open ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border mt-3 bg-background">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-accent text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}