import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--forest-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl text-white">Borgo Musolino</h3>
          <p className="eyebrow mt-2 text-accent">Forest Experience</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Reconnect with nature through wellness and taste. An immersive
            sanctuary where the breath of the forest meets refined Italian
            hospitality.
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/experiences" className="hover:text-accent">Experiences</Link></li>
            <li><Link to="/stay" className="hover:text-accent">Stay</Link></li>
            <li><Link to="/dining" className="hover:text-accent">Dining</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events &amp; Weddings</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/65">
            <li>Borgo Musolino</li>
            <li>Calabria, Italia</li>
            <li>info@borgomusolino.it</li>
            <li>+39 000 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} Borgo Musolino. All rights reserved.</span>
          <span>Digital Forest Breath</span>
        </div>
      </div>
    </footer>
  );
}