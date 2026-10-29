import type { Artwork } from "@/data/art"
import { artwork } from "@/data/art"
import { site } from "@/data/site"
import { ArtImage } from "@/components/ArtImage"
import { Wordmark } from "@/components/Wordmark"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

function Print({
  piece,
  className,
}: {
  piece: Artwork
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-white p-2 shadow-[0_28px_50px_-32px_rgba(28,25,21,0.85)] ring-1 ring-ink/10",
        className,
      )}
    >
      <ArtImage artwork={piece} alt="" loading="eager" className="h-auto w-full" />
    </div>
  )
}

export function Hero({ onOpen }: { onOpen: (piece: Artwork) => void }) {
  const front = artwork.find((piece) => piece.slug === "mew")
  const back = artwork.find((piece) => piece.slug === "espeon")

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
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild className="h-11 px-4 text-base">
            <a href="#fan-art">See the fan art</a>
          </Button>
          <a
            href="#for-people"
            className="text-sm underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            Drawings for people
          </a>
        </div>
      </div>

      {front ? (
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:h-[540px]">
          {back ? (
            <div
              className="print-tilt pointer-events-none absolute top-8 left-1/2 w-[132px] translate-x-[-8%] rotate-[6deg] sm:w-[156px] lg:w-[180px]"
              aria-hidden="true"
            >
              <Print piece={back} />
            </div>
          ) : null}
          <button
            type="button"
            className="print-tilt absolute top-0 left-1/2 z-10 w-[150px] -translate-x-[78%] -rotate-[7deg] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry sm:w-[176px] lg:w-[204px]"
            onClick={() => onOpen(front)}
          >
            <span className="sr-only">View {front.title}</span>
            <Print piece={front} />
          </button>
          <p className="absolute right-2 bottom-0 left-2 text-center text-sm text-ink/70">
            <span className="font-display text-ink">{front.title}</span>
          </p>
        </div>
      ) : null}
    </section>
  )
}
