import type { ArtKind, Artwork } from "@/data/art"
import { piecesFor, shelves } from "@/data/art"
import { assetUrl, downloadName } from "@/lib/assets"
import { ArtImage } from "@/components/ArtImage"
import { Button } from "@/components/ui/button"

function Waiting({ kind }: { kind: ArtKind }) {
  if (kind === "binder") {
    return (
      <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-[1.35fr_0.8fr]" aria-hidden="true">
        <div className="aspect-[4/3] rounded-[1.25rem] border border-dashed border-ink/20 bg-white/40" />
        <div className="aspect-square rounded-[1.25rem] border border-dashed border-ink/20 bg-white/40" />
      </div>
    )
  }

  return (
    <div className="mt-8 max-w-[220px]" aria-hidden="true">
      <div className="aspect-[3/4] rounded-[1.25rem] border border-dashed border-ink/20 bg-white/40" />
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
  return (
    <article>
      <button
        type="button"
        className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry"
        onClick={() => onOpen(piece)}
      >
        <span className="block overflow-hidden rounded-[1.25rem] bg-blush ring-1 ring-ink/10">
          <ArtImage
            artwork={piece}
            alt=""
            className="h-auto w-full transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </span>
        <span className="font-display mt-3 block text-2xl leading-none font-semibold tracking-[-0.03em] text-ink group-hover:text-berry">
          {piece.title}
        </span>
        <span className="sr-only">View {piece.title}</span>
      </button>
      <div className="mt-2">
        {piece.wallpaper ? (
          <Button asChild variant="link" size="sm" className="h-auto px-0 text-ink">
            <a href={assetUrl(piece.file)} download={downloadName(piece)}>
              Save for your phone
            </a>
          </Button>
        ) : (
          <p className="text-xs tracking-[0.14em] text-ink/50 uppercase">
            {piece.kind === "binder" ? "Binder page" : "For someone"}
          </p>
        )}
      </div>
    </article>
  )
}

export function Shelves({ onOpen }: { onOpen: (piece: Artwork) => void }) {
  return (
    <>
      {shelves.map((shelf) => {
        const pieces = piecesFor(shelf.kind)
        return (
          <section key={shelf.id} id={shelf.id} className="border-t border-ink/10">
            <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
              <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                {shelf.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">{shelf.lede}</p>
              {pieces.length === 0 ? (
                <>
                  <Waiting kind={shelf.kind} />
                  <p className="mt-4 text-sm text-ink/55">{shelf.empty}</p>
                </>
              ) : (
                <ul
                  className={
                    shelf.kind === "fan-art"
                      ? "mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6"
                      : "mt-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {pieces.map((piece) => (
                    <li
                      key={piece.slug}
                      className={
                        piece.kind === "binder" && piece.width / piece.height > 1.15
                          ? "sm:col-span-2"
                          : undefined
                      }
                    >
                      <PieceCard piece={piece} onOpen={onOpen} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}
