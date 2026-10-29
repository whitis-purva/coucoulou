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
