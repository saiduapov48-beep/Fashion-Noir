import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground border-t-2 border-accent">
      <div className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-light tracking-wide text-primary-foreground mb-4">MAISON NOIR</h3>
            <p className="text-xs font-light leading-relaxed text-primary-foreground/60 max-w-xs">
              Contemporary luxury fashion house. Dressed in silence, defined by craft.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-light tracking-[0.15em] uppercase mb-6 text-primary-foreground/40">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Catalog", "Collections"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-xs font-light text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h4 className="text-[10px] font-light tracking-[0.15em] uppercase mb-6 text-primary-foreground/40">Customer</h4>
            <ul className="flex flex-col gap-3">
              {["My Account", "Cart", "Wishlist", "Size Guide"].map((item) => (
                <li key={item}>
                  <span className="text-xs font-light text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-light tracking-[0.15em] uppercase mb-6 text-primary-foreground/40">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-xs font-light text-primary-foreground/70">clientservice@maisonnoir.com</li>
              <li className="text-xs font-light text-primary-foreground/70">+1 (800) NOIR-001</li>
              <li className="text-xs font-light text-primary-foreground/70">Mon-Fri 9AM-6PM EST</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-light tracking-[0.15em] text-primary-foreground/40">
            © 2026 MAISON NOIR. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "Pinterest"].map((social) => (
              <span
                key={social}
                className="text-[10px] font-light tracking-[0.15em] text-primary-foreground/40 hover:text-accent transition-colors cursor-pointer"
              >
                {social.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
