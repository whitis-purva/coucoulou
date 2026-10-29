import { useState } from "react"
import type { Artwork } from "@/data/art"
import { site } from "@/data/site"
import { Hero } from "@/components/Hero"
import { PreviewDialog } from "@/components/PreviewDialog"
import { Shelves } from "@/components/Shelf"
import { Wordmark } from "@/components/Wordmark"

const nav = [
  { href: "#fan-art", label: "Fan art" },
  { href: "#for-people", label: "For people" },
  { href: "#binder", label: "Binder" },
  { href: "#about", label: "About" },
]

export default function App() {
  const [active, setActive] = useState<Artwork | null>(null)

  return (
    <div className="min-h-svh text-ink">
      <a
        href="#fan-art"
        className="absolute top-4 left-4 z-50 -translate-y-24 bg-ink px-3 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to the fan art
      </a>

      <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3.5 md:px-8">
          <a href="#top" className="font-display text-xl font-semibold tracking-[-0.03em]">
            <Wordmark />
          </a>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="underline-offset-4 hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero onOpen={setActive} />
        <Shelves onOpen={setActive} />

        <section id="about" className="border-t border-ink/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {site.aboutTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80">
                {site.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">
                On the wall
              </h3>
              <ul className="mt-5 space-y-5">
                {site.wall.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-display text-lg font-semibold tracking-[-0.02em] underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/15">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <p className="font-display text-3xl font-semibold tracking-[-0.03em]">
            <Wordmark />
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/75">{site.personalUse}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/55">{site.trademark}</p>
          {site.socials.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {site.socials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-8 text-xs tracking-[0.14em] text-ink/45 uppercase">
            © {site.year} {site.name}
          </p>
        </div>
      </footer>

      <PreviewDialog piece={active} onOpenChange={(open) => !open && setActive(null)} />
    </div>
  )
}
