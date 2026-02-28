export interface Product {
  id: string
  name: string
  category: "tops" | "bottoms" | "outerwear" | "footwear" | "accessories"
  price: number
  originalPrice: number | null
  brand: string
  color: string
  colorHex: string
  sizes: string[]
  outOfStock: string[]
  image: string
  imageHover: string
  description: string
  isNew: boolean
  isSale: boolean
}

export const products: Product[] = [
  // === FOOTWEAR — LV SKATE ===
  {
    id: "1",
    name: "LV Skate Sneaker Green",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Green",
    colorHex: "#2D5A27",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    outOfStock: ["45"],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OGR65_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OGR65_PM1_Worn%20view.png",
    description: "The LV Skate sneaker in striking green features a mix of technical mesh and suede calf leather. Designed by creative director Pharrell Williams, this shoe merges skate culture with Louis Vuitton's savoir-faire.",
    isNew: true,
    isSale: false
  },
  {
    id: "2",
    name: "LV Skate Sneaker Black",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Black",
    colorHex: "#0A0A0A",
    sizes: ["39", "40", "41", "42", "43", "44"],
    outOfStock: [],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ONOE5_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ONOE5_PM1_Worn%20view.png",
    description: "The iconic LV Skate sneaker in timeless black. Crafted with premium calf leather and suede panels, featuring the signature LV monogram on the side. A bold streetwear statement from the House.",
    isNew: true,
    isSale: false
  },
  {
    id: "3",
    name: "LV Skate Sneaker White Blue",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "White/Blue",
    colorHex: "#4A90D9",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    outOfStock: ["39"],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OBBC1_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OBBC1_PM1_Worn%20view.png",
    description: "A fresh take on the LV Skate sneaker with white leather and vivid blue accents. The mixed-material construction combines Monogram denim with calf leather for a luxurious streetwear look.",
    isNew: false,
    isSale: false
  },
  {
    id: "4",
    name: "LV Skate Sneaker Beige",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Beige",
    colorHex: "#C8B898",
    sizes: ["40", "41", "42", "43", "44"],
    outOfStock: [],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OBIC7_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OBIC7_PM1_Worn%20view.png",
    description: "The LV Skate sneaker in warm beige tones. Crafted from premium suede calf leather with Monogram canvas inserts, this silhouette is the perfect blend of skate heritage and Maison elegance.",
    isNew: true,
    isSale: false
  },
  {
    id: "5",
    name: "LV Skate Sneaker Red",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Red",
    colorHex: "#C41E3A",
    sizes: ["39", "40", "41", "42", "43"],
    outOfStock: ["43"],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ORC81_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ORC81_PM1_Worn%20view.png",
    description: "Bold and statement-making, the LV Skate in vibrant red. Features a mix of grained calf leather, suede, and technical mesh with the iconic Monogram Flower motif on the outsole.",
    isNew: false,
    isSale: true
  },
  {
    id: "6",
    name: "LV Skate Sneaker Denim",
    category: "footwear",
    price: 1440,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Denim",
    colorHex: "#4A6FA5",
    sizes: ["40", "41", "42", "43", "44", "45"],
    outOfStock: [],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ODDC6_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5ODDC6_PM1_Worn%20view.png",
    description: "The LV Skate sneaker in Monogram denim — a unique blend of house codes and skate culture. The washed indigo fabric pairs with leather trims for a deconstructed luxury aesthetic.",
    isNew: true,
    isSale: false
  },
  // === FOOTWEAR — NIKE AIR MAX 95 ===
  {
    id: "7",
    name: "Nike Air Max 95 OG Neon",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Neon Yellow",
    colorHex: "#CCFF00",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    outOfStock: [],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3e7dead-5088-4ea4-b583-2c5e9c740793/NIKE+AIR+MAX+95.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8838413-b21e-4d4f-a367-6c9ee0b3a80a/NIKE+AIR+MAX+95.png",
    description: "The original that started it all. The Nike Air Max 95 OG Neon features the iconic gradient design inspired by the human anatomy, with visible Air units in the forefoot and heel.",
    isNew: false,
    isSale: false
  },
  {
    id: "8",
    name: "Nike Air Max 95 Triple Black",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Triple Black",
    colorHex: "#111111",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "US 13"],
    outOfStock: ["US 13"],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1dbff9e-b7f5-4578-a882-57b4e0e8a498/NIKE+AIR+MAX+95.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ca85e60-b54b-4127-89ca-4e112092060e/NIKE+AIR+MAX+95.png",
    description: "Sleek and stealthy, the Air Max 95 Triple Black wraps the iconic silhouette in all-black leather, synthetic, and mesh for a murdered-out look that works with everything.",
    isNew: true,
    isSale: false
  },
  {
    id: "9",
    name: "Nike Air Max 95 Essential White",
    category: "footwear",
    price: 185,
    originalPrice: 200,
    brand: "NIKE",
    color: "White/Grey",
    colorHex: "#E8E8E8",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    outOfStock: [],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb1e3da-e tried-4b32-96d6-aaf50b965dda/NIKE+AIR+MAX+95+ESSENTIAL.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9aaf564-36f5-4e2a-abfc-8c74be7a4e2c/NIKE+AIR+MAX+95+ESSENTIAL.png",
    description: "Clean and versatile, the Air Max 95 Essential in White/Grey brings the timeless gradient design into a refined, tonal colorway. Mesh and leather upper with Max Air cushioning.",
    isNew: false,
    isSale: true
  },
  {
    id: "10",
    name: "Nike Air Max 95 Olive Green",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Olive Green",
    colorHex: "#556B2F",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    outOfStock: ["US 12"],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70ee232a-cec1-4680-b1d9-c48e1e881a6e/NIKE+AIR+MAX+95.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00076b77-38e5-4e3d-978f-96db8c06ae55/NIKE+AIR+MAX+95.png",
    description: "Military-inspired tones meet Air Max innovation. The Olive Green AM95 features rugged earth tones across its layered upper, with visible Air units for signature comfort.",
    isNew: true,
    isSale: false
  },
  {
    id: "11",
    name: "Nike Air Max 95 Navy Blue",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Navy Blue",
    colorHex: "#1B2A4A",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    outOfStock: [],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4b57cac-fdf3-4956-ae76-c92aec9b9da8/NIKE+AIR+MAX+95+ESSENTIAL.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1be4d204-c9c2-4e37-837d-3fc9d8fde791/NIKE+AIR+MAX+95+ESSENTIAL.png",
    description: "Deep navy tones make this Air Max 95 a sophisticated pick. The signature wave-like design runs across a premium mesh and synthetic upper with Max Air heel unit.",
    isNew: false,
    isSale: false
  },
  {
    id: "12",
    name: "Nike Air Max 95 Bordeaux",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Bordeaux",
    colorHex: "#6D2E46",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    outOfStock: ["US 7"],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38af0fef-e657-4f97-aaba-a7f8fcdbe4a5/NIKE+AIR+MAX+95.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd7c4fbb-62c6-4d3b-9c66-a5c56ca1a3d0/NIKE+AIR+MAX+95.png",
    description: "Rich bordeaux hues drape this Air Max 95 for a luxurious take on the classic runner. Premium materials with tonal shading across the graduated panel upper.",
    isNew: true,
    isSale: false
  },
  // === TOPS ===
  {
    id: "13",
    name: "Oversized Wool Blazer",
    category: "tops",
    price: 2800,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Charcoal",
    colorHex: "#2C2C2C",
    sizes: ["XS", "S", "M", "L", "XL"],
    outOfStock: ["XS"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    description: "A deconstructed oversized blazer in charcoal virgin wool. Drop-shoulder construction with raw-edge detailing. Unlined for a relaxed, modern silhouette. Made in Italy.",
    isNew: true,
    isSale: false
  },
  {
    id: "14",
    name: "Silk Drape Shirt",
    category: "tops",
    price: 1200,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Ivory",
    colorHex: "#FFFFF0",
    sizes: ["XS", "S", "M", "L"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    description: "Pure mulberry silk shirt with flowing drape collar. Minimal construction with hidden button placket. The epitome of understated luxury. Dry clean only.",
    isNew: false,
    isSale: false
  },
  {
    id: "15",
    name: "Cashmere Mock Neck",
    category: "tops",
    price: 980,
    originalPrice: 1200,
    brand: "MAISON NOIR",
    color: "Camel",
    colorHex: "#C19A6B",
    sizes: ["S", "M", "L", "XL"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a98?w=800&q=80",
    description: "Luxurious 100% Mongolian cashmere mock neck sweater. Ribbed cuffs and hem. Relaxed fit with dropped shoulders for effortless layering. 12-gauge knit.",
    isNew: false,
    isSale: true
  },
  {
    id: "16",
    name: "Structured Cotton Tee",
    category: "tops",
    price: 420,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Black",
    colorHex: "#0A0A0A",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    description: "Heavyweight 280gsm organic cotton tee with a boxy, architectural fit. Reinforced seams and ribbed crew neck. The foundation of any considered wardrobe.",
    isNew: true,
    isSale: false
  },
  // === BOTTOMS ===
  {
    id: "17",
    name: "Wide Leg Wool Trouser",
    category: "bottoms",
    price: 1600,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Black",
    colorHex: "#0A0A0A",
    sizes: ["XS", "S", "M", "L", "XL"],
    outOfStock: ["XS"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    description: "Double-pleated wide-leg trousers in Italian virgin wool. High rise with side adjusters. Full break length for a dramatic, flowing silhouette.",
    isNew: true,
    isSale: false
  },
  {
    id: "18",
    name: "Raw Denim Jean",
    category: "bottoms",
    price: 680,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Indigo",
    colorHex: "#1F0954",
    sizes: ["S", "M", "L", "XL"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    description: "14oz Japanese selvedge denim in deep indigo. Straight-leg cut with a slightly high rise. Chain-stitched hem. Will develop beautiful fades with wear.",
    isNew: false,
    isSale: false
  },
  // === OUTERWEAR ===
  {
    id: "19",
    name: "Double Face Wool Coat",
    category: "outerwear",
    price: 3400,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Black",
    colorHex: "#0A0A0A",
    sizes: ["XS", "S", "M", "L"],
    outOfStock: ["XS"],
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    description: "A statement piece in double-face virgin wool cashmere. Belted waist with oversized notch lapels. Unlined — the fabric speaks for itself. Mid-calf length.",
    isNew: true,
    isSale: false
  },
  {
    id: "20",
    name: "Technical Parka",
    category: "outerwear",
    price: 2200,
    originalPrice: 2800,
    brand: "MAISON NOIR",
    color: "Olive",
    colorHex: "#556B2F",
    sizes: ["S", "M", "L", "XL"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1544923246-77307dd270b5?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    description: "Weather-resistant technical parka in olive with sealed seams and adjustable hood. Insulated with recycled PrimaLoft. Oversized fit with interior drawcord at waist.",
    isNew: false,
    isSale: true
  },
  // === ACCESSORIES ===
  {
    id: "21",
    name: "Leather Card Holder",
    category: "accessories",
    price: 340,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Black",
    colorHex: "#0A0A0A",
    sizes: ["ONE SIZE"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&q=80",
    description: "Minimalist card holder in full-grain calfskin leather. Four card slots and one central pocket. Blind debossed logo. Handmade in a small Florentine atelier.",
    isNew: false,
    isSale: false
  },
  {
    id: "22",
    name: "Wool Cashmere Scarf",
    category: "accessories",
    price: 560,
    originalPrice: null,
    brand: "MAISON NOIR",
    color: "Grey",
    colorHex: "#808080",
    sizes: ["ONE SIZE"],
    outOfStock: [],
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1601924921557-45e8c0344f68?w=800&q=80",
    description: "Generous oversized scarf in wool-cashmere blend. Subtle tonal logo jacquard. Fringed edges. 200cm x 70cm. The perfect layering piece for transitional dressing.",
    isNew: true,
    isSale: false
  },
  {
    id: "23",
    name: "LV Skate Sneaker Orange",
    category: "footwear",
    price: 1340,
    originalPrice: null,
    brand: "LOUIS VUITTON",
    color: "Orange",
    colorHex: "#FF6B00",
    sizes: ["39", "40", "41", "42", "43", "44"],
    outOfStock: ["44"],
    image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OOR65_PM2_Front%20view.png",
    imageHover: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-skate-sneaker--BQHE5OOR65_PM1_Worn%20view.png",
    description: "A vibrant orange colorway of the LV Skate sneaker, featuring technical mesh and grained calf leather. The bold hue makes this a standout piece in any rotation.",
    isNew: true,
    isSale: false
  },
  {
    id: "24",
    name: "Nike Air Max 95 Grey Fog",
    category: "footwear",
    price: 185,
    originalPrice: null,
    brand: "NIKE",
    color: "Grey Fog",
    colorHex: "#B0B0B0",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    outOfStock: [],
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81e21a48-a818-4846-badf-0e47bfbc5667/NIKE+AIR+MAX+95.png",
    imageHover: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9bf5c64-c120-49e2-9c5e-8c4e8b1e4f30/NIKE+AIR+MAX+95.png",
    description: "The Air Max 95 in cool Grey Fog tones. Subtle gradient panels in shades of grey across a breathable mesh and synthetic upper. Clean, understated, versatile.",
    isNew: false,
    isSale: false
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter(p => p.category === category)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
