export type ArtKind = "fan-art" | "for-people" | "binder"

export type Artwork = {
  slug: string
  title: string
  kind: ArtKind
  description: string
  width: number
  height: number
  /** Path inside `public/`, for example `art/mew.png`. */
  file: string
  alt: string
  /** People can save this file and set it as a phone wallpaper. */
  wallpaper?: boolean
}

export type Shelf = {
  id: string
  kind: ArtKind
  title: string
  lede: string
  empty: string
}

/**
 * Add a drawing:
 * 1. Put the image in `public/art/`.
 * 2. Add an entry here.
 *    - `kind: "fan-art"` for Pokémon fan art
 *    - `kind: "for-people"` for a ponysona or fursona
 *    - `kind: "binder"` for a Michi-method binder page
 * 3. Set `wallpaper: true` only when the file should be downloadable for a phone.
 */
export const artwork: Artwork[] = [
  {
    slug: "mew",
    title: "Mew",
    kind: "fan-art",
    description: "Mew drifting through a sky that goes from pink to blue.",
    width: 1179,
    height: 2556,
    file: "art/mew.png",
    alt: "Illustration of Mew floating in a pink-to-blue sky, surrounded by white stars, with a long tail curling overhead.",
    wallpaper: true,
  },
  {
    slug: "espeon",
    title: "Espeon",
    kind: "fan-art",
    description: "Espeon on a bank of cloud, sun behind the ears.",
    width: 1179,
    height: 2556,
    file: "art/espeon.png",
    alt: "Illustration of Espeon sitting on clouds, lilac fur and a red forehead gem, with pale sunbeams behind the ears.",
    wallpaper: true,
  },
  {
    slug: "kubfu",
    title: "Kubfu",
    kind: "fan-art",
    description: "Kubfu with fists up, on a streak of evening color.",
    width: 1179,
    height: 2556,
    file: "art/kubfu.png",
    alt: "Illustration of Kubfu in a fighting stance, grey fur and a white mane, against purple and peach light.",
    wallpaper: true,
  },
  {
    slug: "reuniclus",
    title: "Reuniclus",
    kind: "fan-art",
    description: "Solosis, Duosion, and Reuniclus in a bright sky.",
    width: 1179,
    height: 2556,
    file: "art/reuniclus.png",
    alt: "Illustration of Solosis, Duosion, and Reuniclus, green and translucent, floating above clouds in a pale blue sky.",
    wallpaper: true,
  },
  {
    slug: "gourgeist",
    title: "Gourgeist",
    kind: "fan-art",
    description: "Gourgeist on a Halloween path, with Pumpkaboo below.",
    width: 1179,
    height: 2556,
    file: "art/gourgeist.png",
    alt: "Illustration of Gourgeist holding a jack-o’-lantern bucket on a dark path, with Pumpkaboo in front and bare trees behind.",
    wallpaper: true,
  },
]

export const shelves: Shelf[] = [
  {
    id: "fan-art",
    kind: "fan-art",
    title: "Fan art",
    lede: "Pokémon drawings from the sketchbook. These ones can also be saved for a phone.",
    empty: "Fan art will be hung here.",
  },
  {
    id: "for-people",
    kind: "for-people",
    title: "For people",
    lede: "Ponysona and fursona drawings, made for the person the character belongs to.",
    empty: "Portraits for people will hang here.",
  },
  {
    id: "binder",
    kind: "binder",
    title: "Binder pages",
    lede: "Illustrations for a Michi-method Pokémon binder. Each page is drawn to the proportion of that spread, so the shape changes from piece to piece.",
    empty: "Binder pages will hang here, each in its own proportion.",
  },
]

export function piecesFor(kind: ArtKind) {
  return artwork.filter((piece) => piece.kind === kind)
}
