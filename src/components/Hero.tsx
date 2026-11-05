import { featuredPiece } from "@/data/art"
import { site } from "@/data/site"
import { assetUrl, downloadName } from "@/lib/assets"
import { ArtImage } from "@/components/ArtImage"
import { SwashText } from "@/components/SwashText"
import { Wordmark } from "@/components/Wordmark"
import { Button } from "@/components/ui/button"

export function Hero() {
  const piece = featuredPiece()

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
      <div className="@container min-w-0">
        <h1 className="text-[clamp(2.35rem,16cqi,7.5rem)] leading-[1.15] whitespace-nowrap text-ink">
          <Wordmark />
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
          <SwashText text={site.hero} />
        </p>
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
          <a
            href={assetUrl(piece.file)}
            download={downloadName(piece)}
            className="print-tilt block w-full -rotate-2 touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
          >
            <span className="block bg-white p-2 shadow-[0_28px_50px_-32px_rgba(41,34,36,0.85)] ring-1 ring-ink/10">
              <ArtImage
                artwork={piece}
                alt={piece.alt}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full"
              />
            </span>
            <span className="sr-only">Download</span>
          </a>
        </div>
      ) : null}
    </section>
  )
}
