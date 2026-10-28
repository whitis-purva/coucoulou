import { useState } from "react"
import type { Wallpaper } from "@/data/wallpapers"
import { wallpapers } from "@/data/wallpapers"
import { site } from "@/data/site"
import { assetUrl, downloadName } from "@/lib/assets"
import { WallpaperImage } from "@/components/WallpaperImage"
import { Button } from "@/components/ui/button"

function collectionsOf(items: Wallpaper[]) {
  return [...new Set(items.map((item) => item.collection))]
}

export function Gallery({ onOpen }: { onOpen: (wallpaper: Wallpaper) => void }) {
  const collections = collectionsOf(wallpapers)
  const [collection, setCollection] = useState("All")
  const visible =
    collection === "All"
      ? wallpapers
      : wallpapers.filter((item) => item.collection === collection)
  const hasSamples = wallpapers.some((item) => item.sample)

  return (
    <section id="wallpapers" className="border-t border-ink/10">
      {hasSamples ? (
        <div className="border-b border-ink/10 bg-butter/45">
          <p className="mx-auto max-w-6xl px-5 py-4 text-sm leading-relaxed text-ink md:px-8">
            {site.sampleNotice}
          </p>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
              Wallpapers
            </h2>
            <p className="mt-2 text-sm text-ink/65">
              {visible.length} {visible.length === 1 ? "picture" : "pictures"}
              {collection !== "All" ? ` in ${collection}` : ""}
            </p>
          </div>
          {collections.length > 1 ? (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by set">
              {["All", ...collections].map((name) => {
                const selected = name === collection
                return (
                  <Button
                    key={name}
                    type="button"
                    size="sm"
                    variant={selected ? "default" : "outline"}
                    aria-pressed={selected}
                    onClick={() => setCollection(name)}
                  >
                    {name}
                  </Button>
                )
              })}
            </div>
          ) : null}
        </div>

        {wallpapers.length === 0 ? (
          <p className="mt-12 max-w-md text-lg leading-relaxed text-ink/75">
            Nothing on the wall yet. Finished wallpapers will show up here.
          </p>
        ) : visible.length === 0 ? (
          <p className="mt-12 text-lg text-ink/75">Nothing in this set.</p>
        ) : (
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 xl:grid-cols-4">
            {visible.map((wallpaper, index) => (
              <li key={wallpaper.slug}>
                <article>
                  <button
                    type="button"
                    className="group block w-full rounded-[1.35rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
                    onClick={() => onOpen(wallpaper)}
                  >
                    <span className="block overflow-hidden rounded-[1.35rem] bg-blush ring-1 ring-ink/10">
                      <WallpaperImage
                        wallpaper={wallpaper}
                        alt=""
                        className="w-full object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </span>
                    <span className="mt-3 flex items-baseline justify-between gap-3">
                      <span className="font-display text-2xl leading-none font-semibold tracking-[-0.03em] text-ink group-hover:text-berry">
                        {wallpaper.title}
                      </span>
                      <span aria-hidden="true" className="text-xs text-ink/45 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </button>
                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="min-w-0 text-xs leading-relaxed text-ink/60 tabular-nums">
                      {wallpaper.width} × {wallpaper.height}
                      {wallpaper.sample ? (
                        <span className="ml-2 tracking-[0.14em] text-berry uppercase">
                          Stand-in
                        </span>
                      ) : null}
                    </p>
                    <Button asChild variant="link" size="sm" className="h-auto px-0 text-ink">
                      <a
                        href={assetUrl(wallpaper.file)}
                        download={downloadName(wallpaper)}
                      >
                        Save
                      </a>
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
