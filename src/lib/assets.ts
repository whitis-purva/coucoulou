import type { Artwork } from "@/data/art"

export function assetUrl(file: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${file.replace(/^\/+/, "")}`
}

export function downloadName(artwork: Artwork) {
  const ext = artwork.file.split(".").pop() || "png"
  return `cou-cou-lou-${artwork.slug}.${ext}`
}

export function fileLabel(artwork: Artwork) {
  const ext = (artwork.file.split(".").pop() || "png").toUpperCase()
  return `${artwork.width} × ${artwork.height}, ${ext}`
}

/** One line when every piece in a series shares a phone-screen proportion. */
export function proportionNote(pieces: Artwork[]) {
  const [first] = pieces
  if (!first) return null
  const same = pieces.every(
    (piece) => piece.width === first.width && piece.height === first.height,
  )
  if (!same) return null
  const ratio = first.height / first.width
  if (ratio < 1.9) return null
  return `${first.width} × ${first.height}, close to a recent iPhone screen.`
}
