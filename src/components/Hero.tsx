import type { Artwork } from "@/data/art"
import { featuredPiece } from "@/data/art"
import { site } from "@/data/site"
import { ArtImage } from "@/components/ArtImage"
import { Wordmark } from "@/components/Wordmark"
import { Button } from "@/components/ui/button"

export function Hero({ onOpen }: { onOpen: (piece: Artwork) => void }) {
  const piece = featuredPiece()

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
      <div>
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-moss uppercase">
          <span className="inline-flex items-center gap-1.5" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-ink" />
            <span className="size-1.5 rounded-full bg-berry" />
            <span className="size-1.5 rounded-full bg-ink" />
          </span>
          {site.tagline}
        </p>
        <h1 className="font-display mt-5 text-[3.25rem] leading-[0.86] font-semibold tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5.4rem]">
          <Wordmark stacked />
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">{site.hero}</p>
        <div className="mt-8">
          <Button asChild className="h-11 px-4 text-base">
            <a href="#work">
              See the work <span aria-hidden="true">↓</span>
            </a>
          </Button>
        </div>
      </div>

      {piece ? (
        <div className="mx-auto w-[196px] sm:w-[220px] lg:w-[240px]">
          <button
            type="button"
            className="print-tilt block w-full -rotate-2 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
            onClick={() => onOpen(piece)}
          >
            <span className="block bg-white p-2 shadow-[0_28px_50px_-32px_rgba(28,25,21,0.85)] ring-1 ring-ink/10">
              <ArtImage
                artwork={piece}
                alt={piece.alt}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full"
              />
            </span>
          </button>
          <p className="mt-4 text-center text-sm text-ink/70">
            <span className="font-display text-base text-ink">{piece.title}</span>
          </p>
        </div>
      ) : null}
    </section>
  )
}
