import type { Artwork } from "@/data/art"
import { site } from "@/data/site"
import { assetUrl, downloadName } from "@/lib/assets"
import { ArtImage } from "@/components/ArtImage"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

function kindLabel(piece: Artwork) {
  if (piece.wallpaper) return "Fan art · wallpaper"
  if (piece.kind === "for-people") return "For people"
  if (piece.kind === "binder") return "Binder page"
  return "Fan art"
}

export function PreviewDialog({
  piece,
  onOpenChange,
}: {
  piece: Artwork | null
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={piece !== null} onOpenChange={onOpenChange}>
      {piece ? (
        <DialogContent className="max-h-[calc(100svh-1.5rem)] overflow-y-auto bg-paper p-4 text-ink sm:max-w-3xl sm:p-6">
          <div className="grid items-center gap-5 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-8">
            <ArtImage
              artwork={piece}
              alt={piece.alt}
              loading="eager"
              framed
              className="mx-auto max-h-[68svh] w-auto max-w-full rounded-[1.2rem] object-contain ring-1 ring-ink/10"
            />
            <div className="pr-8">
              <p className="text-xs font-medium tracking-[0.18em] text-moss uppercase">
                {kindLabel(piece)}
              </p>
              <DialogTitle className="font-display mt-2 text-4xl font-semibold tracking-[-0.03em]">
                {piece.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-base leading-relaxed text-ink/75">
                {piece.description}
              </DialogDescription>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-ink/55">Size</dt>
                  <dd className="mt-1 tabular-nums">
                    {piece.width} × {piece.height}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/55">File</dt>
                  <dd className="mt-1 uppercase">{piece.file.split(".").pop()}</dd>
                </div>
              </dl>
              {piece.wallpaper ? (
                <>
                  <Button asChild className="mt-6 h-11 px-4 text-base">
                    <a href={assetUrl(piece.file)} download={downloadName(piece)}>
                      Save wallpaper
                    </a>
                  </Button>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">{site.saveHint}</p>
                </>
              ) : null}
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  )
}
