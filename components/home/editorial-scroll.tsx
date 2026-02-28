import Image from "next/image"
import Link from "next/link"

const editorials = [
  {
    title: "Autumn Essentials",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    href: "/catalog?category=outerwear",
  },
  {
    title: "Sneaker Edit",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&q=80",
    href: "/catalog?category=footwear",
  },
  {
    title: "The Foundation",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    href: "/catalog",
  },
]

export function EditorialScroll() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="px-6 lg:px-12 mb-12">
        <div className="w-10 h-[2px] bg-accent mb-6" />
        <h2 className="font-serif text-3xl lg:text-[42px] italic font-light text-foreground">
          The Edit
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 lg:px-12 pb-4 hide-scrollbar">
        {editorials.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group flex-shrink-0 relative w-[80vw] lg:w-[40vw] aspect-[16/9] overflow-hidden bg-secondary"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:brightness-75 transition-all duration-500"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-primary-foreground">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
