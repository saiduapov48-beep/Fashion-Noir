export function Marquee() {
  const text = "LV SKATE \u00B7 NIKE AIR MAX 95 \u00B7 MAISON NOIR \u00B7 NEW ARRIVALS \u00B7 CONTEMPORARY LUXURY \u00B7 FREE SHIPPING OVER $500 \u00B7 "

  return (
    <div className="overflow-hidden bg-foreground py-3 border-y border-accent/30">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="text-[10px] font-light tracking-[0.2em] text-primary-foreground/50 mx-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
