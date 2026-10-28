import type { Wallpaper } from "@/data/wallpapers"
import { wallpapers } from "@/data/wallpapers"
import { site } from "@/data/site"
import { WallpaperImage } from "@/components/WallpaperImage"
import { Wordmark } from "@/components/Wordmark"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

function Phone({
  wallpaper,
  className,
}: {
  wallpaper: Wallpaper
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-[1.7rem] border border-ink/15 bg-paper p-1.5 shadow-[0_28px_50px_-32px_rgba(28,25,21,0.85)]",
        className,
      )}
    >
      <WallpaperImage
        wallpaper={wallpaper}
        alt=""
        loading="eager"
        className="w-full rounded-[1.25rem] object-cover"
      />
    </div>
  )
}

export function Hero({ onOpen }: { onOpen: (wallpaper: Wallpaper) => void }) {
  const front = wallpapers[0]
  const back = wallpapers[1]

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
            <a href="#wallpapers">Browse the wallpapers</a>
          </Button>
          <a
            href="#about"
            className="text-sm underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            About the drawings
          </a>
        </div>
      </div>

      {front ? (
        <div className="relative mx-auto h-[390px] w-full max-w-md sm:h-[440px] lg:h-[500px]">
          {back ? (
            <div className="phone-tilt pointer-events-none absolute top-6 left-1/2 w-[148px] translate-x-[-18%] rotate-[7deg] sm:w-[170px] lg:w-[196px]" aria-hidden="true">
              <Phone wallpaper={back} />
            </div>
          ) : null}
          <button
            type="button"
            className="phone-tilt absolute top-0 left-1/2 z-10 w-[168px] -translate-x-[78%] -rotate-[8deg] rounded-[1.8rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry sm:w-[190px] lg:w-[220px]"
            onClick={() => onOpen(front)}
          >
            <span className="sr-only">Preview {front.title}</span>
            <Phone wallpaper={front} />
          </button>
          <p className="absolute right-2 bottom-0 left-2 text-center text-sm text-ink/70">
            <span className="font-display text-ink">No. 01</span>
            <span className="px-2 text-ink/30">/</span>
            {front.title}
          </p>
        </div>
      ) : null}
    </section>
  )
}
