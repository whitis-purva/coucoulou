import { series, type Artwork } from "@/data/art"
import { site } from "@/data/site"
import { assetUrl, downloadName, fileLabel } from "@/lib/assets"
import { ArtImage } from "@/components/ArtImage"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

export function PreviewDialog({
  piece,
  onOpenChange,
}: {
  piece: Artwork | null
  onOpenChange: (open: boolean) => void
}) {
  const entry = piece ? series.find((item) => item.id === piece.seriesId) : undefined

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
              {entry ? (
                <p className="text-xs font-medium tracking-[0.16em] text-moss uppercase">
                  {entry.title}
                </p>
              ) : null}
              <DialogTitle className="font-display mt-2 text-4xl font-semibold tracking-[-0.03em]">
                {piece.title}
              </DialogTitle>
              {piece.pokemon !== piece.title ? (
                <p className="mt-2 text-base text-ink/70">{piece.pokemon}</p>
              ) : null}
              <DialogDescription className="mt-3 text-base leading-relaxed text-ink/75">
                {piece.description}
              </DialogDescription>
              <p className="mt-5 text-sm tabular-nums text-ink/70">{fileLabel(piece)}</p>
              {piece.collection === "wallpapers" ? (
                <>
                  <Button asChild variant="outline" className="mt-6 h-10 px-4">
                    <a href={assetUrl(piece.file)} download={downloadName(piece)}>
                      Download
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
