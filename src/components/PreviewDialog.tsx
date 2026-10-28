import type { Wallpaper } from "@/data/wallpapers"
import { site } from "@/data/site"
import { assetUrl, downloadName } from "@/lib/assets"
import { WallpaperImage } from "@/components/WallpaperImage"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"

export function PreviewDialog({
  wallpaper,
  onOpenChange,
}: {
  wallpaper: Wallpaper | null
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={wallpaper !== null} onOpenChange={onOpenChange}>
      {wallpaper ? (
        <DialogContent className="max-h-[calc(100svh-1.5rem)] overflow-y-auto bg-paper p-4 text-ink sm:max-w-3xl sm:p-6">
          <div className="grid items-center gap-5 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-8">
            <WallpaperImage
              wallpaper={wallpaper}
              alt={wallpaper.alt}
              loading="eager"
              className="mx-auto w-full max-w-[220px] rounded-[1.4rem] object-cover ring-1 ring-ink/10 md:max-w-none"
            />
            <div className="pr-8">
              <p className="text-xs font-medium tracking-[0.18em] text-moss uppercase">
                {wallpaper.collection}
                {wallpaper.sample ? " · Stand-in" : ""}
              </p>
              <DialogTitle className="font-display mt-2 text-4xl font-semibold tracking-[-0.03em]">
                {wallpaper.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-base leading-relaxed text-ink/75">
                {wallpaper.description}
              </DialogDescription>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-ink/55">Size</dt>
                  <dd className="mt-1 tabular-nums">
                    {wallpaper.width} × {wallpaper.height}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/55">File</dt>
                  <dd className="mt-1 uppercase">{wallpaper.file.split(".").pop()}</dd>
                </div>
              </dl>
              <Button asChild className="mt-6 h-11 px-4 text-base">
                <a href={assetUrl(wallpaper.file)} download={downloadName(wallpaper)}>
                  Save wallpaper
                </a>
              </Button>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
                {site.steps[1]}
              </p>
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  )
}
