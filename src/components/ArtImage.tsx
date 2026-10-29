import { useState } from "react"
import type { Artwork } from "@/data/art"
import { assetUrl } from "@/lib/assets"
import { cn } from "cn"

export function ArtImage({
  artwork,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  framed = false,
}: {
  artwork: Artwork
  alt: string
  className?: string
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
  /** Keep the file’s own proportions. Turn off when the parent crops the picture. */
  framed?: boolean
}) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-blush px-4 text-center text-sm leading-snug text-ink",
          className,
        )}
        style={{ aspectRatio: `${artwork.width} / ${artwork.height}` }}
      >
        This picture isn’t in the art folder yet.
      </div>
    )
  }

  return (
    <img
      src={assetUrl(artwork.preview)}
      alt={alt}
      width={artwork.width}
      height={artwork.height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onError={() => setBroken(true)}
      className={className}
      style={framed ? undefined : { aspectRatio: `${artwork.width} / ${artwork.height}` }}
    />
  )
}
