export const collectionFilters = [
  { id: "all", label: "All" },
  { id: "wallpapers", label: "Wallpapers" },
  { id: "commissions", label: "Commissions" },
  { id: "pokemon", label: "Pokémon" },
  { id: "original", label: "Original" },
] as const

export type CollectionId = Exclude<(typeof collectionFilters)[number]["id"], "all">

export type Artwork = {
  slug: string
  title: string
  seriesId: string
  collection: CollectionId
  description: string
  width: number
  height: number
  /** Full-resolution file inside `public/`. Served only when someone downloads. */
  file: string
  /** Compressed preview inside `public/`. This is what the page displays. */
  preview: string
  alt: string
}

export type Series = {
  id: string
  collection: CollectionId
  title: string
  lede: string
}

/**
 * Add a drawing:
 * 1. Put the full-resolution file in `public/art/`.
 * 2. Add an entry here, including a `preview` path such as `art/previews/mew.webp`.
 * 3. Run `npm run previews` to make the compressed file.
 *
 * The gallery filter stays hidden while every piece belongs to one collection.
 * A second collection (commissions, Pokémon, original) turns the chips on.
 * Give that work its own `series` entry so it gets a title, not an empty frame.
 */
export const series: Series[] = [
  {
    id: "wallpapers-vol-1",
    collection: "wallpapers",
    title: "Pokémon Phone Wallpapers, Vol. 1",
    lede: "Free wallpapers, made for your lock screen and home screen. Tap a piece to download.",
  },
]

export const artwork: Artwork[] = [
  {
    slug: "mew",
    title: "Mew",
    seriesId: "wallpapers-vol-1",
    collection: "wallpapers",
    description: "Mew drifting through a sky that goes from pink to blue.",
    width: 1179,
    height: 2556,
    file: "art/mew.png",
    preview: "art/previews/mew.webp",
    alt: "Illustration of Mew floating in a pink-to-blue sky, surrounded by white stars, with a long tail curling overhead.",
  },
  {
    slug: "espeon",
    title: "Espeon",
    seriesId: "wallpapers-vol-1",
    collection: "wallpapers",
    description: "Espeon on a bank of cloud, sun behind the ears.",
    width: 1179,
    height: 2556,
    file: "art/espeon.png",
    preview: "art/previews/espeon.webp",
    alt: "Illustration of Espeon sitting on clouds, lilac fur and a red forehead gem, with pale sunbeams behind the ears.",
  },
  {
    slug: "kubfu",
    title: "Kubfu",
    seriesId: "wallpapers-vol-1",
    collection: "wallpapers",
    description: "Kubfu with fists up, on a streak of evening color.",
    width: 1179,
    height: 2556,
    file: "art/kubfu.png",
    preview: "art/previews/kubfu.webp",
    alt: "Illustration of Kubfu in a fighting stance, grey fur and a white mane, against purple and peach light.",
  },
  {
    slug: "reuniclus",
    title: "Reuniclus & Solosis",
    seriesId: "wallpapers-vol-1",
    collection: "wallpapers",
    description: "Solosis, Duosion, and Reuniclus in a bright sky.",
    width: 1179,
    height: 2556,
    file: "art/reuniclus.png",
    preview: "art/previews/reuniclus.webp",
    alt: "Illustration of Solosis, Duosion, and Reuniclus, green and translucent, floating above clouds in a pale blue sky.",
  },
  {
    slug: "gourgeist",
    title: "Gourgeist & Pumpkaboo",
    seriesId: "wallpapers-vol-1",
    collection: "wallpapers",
    description: "Gourgeist on a Halloween path, with Pumpkaboo below.",
    width: 1179,
    height: 2556,
    file: "art/gourgeist.png",
    preview: "art/previews/gourgeist.webp",
    alt: "Illustration of Gourgeist holding a jack-o’-lantern bucket on a dark path, with Pumpkaboo in front and bare trees behind.",
  },
]

export const featuredSlug = "mew"

export function featuredPiece() {
  return artwork.find((piece) => piece.slug === featuredSlug) ?? artwork[0]
}

export function filtersFor(pieces: Artwork[]) {
  const present = new Set(pieces.map((piece) => piece.collection))
  return {
    chips: collectionFilters.filter((chip) => chip.id === "all" || present.has(chip.id)),
    visible: present.size > 1,
  }
}

export function seriesBlocks(pieces: Artwork[]) {
  return series
    .map((entry) => ({
      entry,
      pieces: pieces.filter((piece) => piece.seriesId === entry.id),
    }))
    .filter((block) => block.pieces.length > 0)
}
