import { useState } from "react"
import type { Wallpaper } from "@/data/wallpapers"
import { assetUrl } from "@/lib/assets"
import { cn } from "cn"

export function WallpaperImage({
  wallpaper,
  alt,
  className,
  loading = "lazy",
}: {
  wallpaper: Wallpaper
  alt: string
  className?: string
  loading?: "lazy" | "eager"
}) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-blush px-4 text-center text-sm leading-snug text-ink",
          className,
        )}
        style={{ aspectRatio: `${wallpaper.width} / ${wallpaper.height}` }}
      >
        This file isn’t in the wallpapers folder yet.
      </div>
    )
  }

  return (
    <img
      src={assetUrl(wallpaper.file)}
      alt={alt}
      width={wallpaper.width}
      height={wallpaper.height}
      loading={loading}
      decoding="async"
      onError={() => setBroken(true)}
      className={className}
      style={{ aspectRatio: `${wallpaper.width} / ${wallpaper.height}` }}
    />
  )
}
