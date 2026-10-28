import type { Wallpaper } from "@/data/wallpapers"

export function assetUrl(file: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${file.replace(/^\/+/, "")}`
}

export function downloadName(wallpaper: Wallpaper) {
  const ext = wallpaper.file.split(".").pop() || "png"
  return `cou-cou-lou-${wallpaper.slug}.${ext}`
}
