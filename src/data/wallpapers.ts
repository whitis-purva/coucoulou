export type Wallpaper = {
  slug: string
  title: string
  collection: string
  description: string
  width: number
  height: number
  /** Path inside `public/`, for example `wallpapers/hello.png`. */
  file: string
  alt: string
  /**
   * Studio placeholder. Cards show a stand-in label, and the notice above
   * the wall stays up, while any wallpaper still has this set.
   */
  sample?: boolean
}

/**
 * Add a wallpaper:
 * 1. Put a PNG in `public/wallpapers/`.
 * 2. Add an entry at the top of this list.
 * 3. Remove the `sample: true` stand-ins when your own files are ready.
 *
 * A tall phone size works best: 1170×2532, or a larger master such as 1440×3200.
 */
export const wallpapers: Wallpaper[] = [
  {
    slug: "hello",
    title: "Hello",
    collection: "Studio dots",
    description: "A paper bird and a row of dots. A stand-in for a character wallpaper.",
    width: 1080,
    height: 2340,
    file: "wallpapers/hello.png",
    alt: "A black paper-cut bird with a berry beak on a cream field, standing over a curve of dots.",
    sample: true,
  },
  {
    slug: "margin",
    title: "Margin",
    collection: "Studio dots",
    description: "A notebook spine and a berry ring.",
    width: 1080,
    height: 2340,
    file: "wallpapers/margin.png",
    alt: "A butter-colored notebook spine with punched holes, beside a berry ring on cream paper.",
    sample: true,
  },
  {
    slug: "hour",
    title: "Hour",
    collection: "Studio dots",
    description: "A butter moon on ink, for a dark lock screen.",
    width: 1080,
    height: 2340,
    file: "wallpapers/hour.png",
    alt: "A butter crescent moon on a black field, with small paper-colored stars below it.",
    sample: true,
  },
  {
    slug: "seeds",
    title: "Seeds",
    collection: "Studio dots",
    description: "Dots unwinding over moss, with a paper sun at the bottom.",
    width: 1080,
    height: 2340,
    file: "wallpapers/seeds.png",
    alt: "A spiral of cream, butter, and berry dots on moss green, over a large cream circle.",
    sample: true,
  },
]
