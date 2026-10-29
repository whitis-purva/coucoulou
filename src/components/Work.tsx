import { useMemo, useState } from "react"
import { artwork, filtersFor, seriesBlocks, type Artwork, type CollectionId } from "@/data/art"
import { assetUrl, downloadName, fileLabel } from "@/lib/assets"
import { ArtImage } from "@/components/ArtImage"
import { cn } from "cn"

function PieceMeta({ piece }: { piece: Artwork }) {
  return (
    <div className="mt-3">
      <h3 className="font-display text-lg leading-tight font-semibold tracking-[-0.02em]">
        {piece.title}
      </h3>
      <p className="mt-1 text-xs tabular-nums text-ink/55">{fileLabel(piece)}</p>
      {piece.collection === "wallpapers" ? (
        <a
          href={assetUrl(piece.file)}
          download={downloadName(piece)}
          className="mt-2 inline-flex h-7 items-center rounded-md border border-ink/20 px-2.5 text-xs text-ink/75 hover:border-ink hover:text-ink"
        >
          Download<span className="sr-only"> {piece.title}</span>
        </a>
      ) : null}
    </div>
  )
}

function PieceCard({
  piece,
  onOpen,
}: {
  piece: Artwork
  onOpen: (piece: Artwork) => void
}) {
  const frame =
    piece.collection === "wallpapers" ? (
      <span className="block rounded-[1.65rem] bg-ink p-[7px] shadow-[0_18px_36px_-26px_rgba(41,34,36,0.85)]">
        <span className="relative block overflow-hidden rounded-[1.2rem]">
          <span
            className="absolute top-1.5 left-1/2 z-10 h-3 w-11 -translate-x-1/2 rounded-full bg-ink"
            aria-hidden="true"
          />
          <ArtImage artwork={piece} alt={piece.alt} className="block h-auto w-full" />
        </span>
      </span>
    ) : (
      <span className="block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
        <ArtImage artwork={piece} alt={piece.alt} className="block h-auto w-full" />
      </span>
    )

  return (
    <article>
      <button
        type="button"
        className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
        onClick={() => onOpen(piece)}
      >
        {frame}
      </button>
      <PieceMeta piece={piece} />
    </article>
  )
}

export function Work({ onOpen }: { onOpen: (piece: Artwork) => void }) {
  const filters = filtersFor(artwork)
  const [filter, setFilter] = useState<"all" | CollectionId>("all")
  const visible = useMemo(
    () => (filter === "all" ? artwork : artwork.filter((piece) => piece.collection === filter)),
    [filter],
  )
  const blocks = seriesBlocks(visible)

  return (
    <section id="work" className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {filters.visible ? (
          <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter the work">
            {filters.chips.map((chip) => {
              const selected = filter === chip.id
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(chip.id)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-sm",
                    selected
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 text-ink/75 hover:border-ink/50",
                  )}
                >
                  {chip.label}
                </button>
              )
            })}
          </div>
        ) : null}

        <div className="space-y-16">
          {blocks.map(({ entry, pieces }) => (
            <div key={entry.id}>
              <h2 className="font-display max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {entry.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">{entry.lede}</p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                {pieces.map((piece) => (
                  <PieceCard key={piece.slug} piece={piece} onOpen={onOpen} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
