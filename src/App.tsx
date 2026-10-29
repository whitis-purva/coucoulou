import { useState } from "react"
import type { Artwork } from "@/data/art"
import { site } from "@/data/site"
import { Hero } from "@/components/Hero"
import { InstagramIcon } from "@/components/InstagramIcon"
import { PreviewDialog } from "@/components/PreviewDialog"
import { Work } from "@/components/Work"
import { Wordmark } from "@/components/Wordmark"

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#commissions", label: "Commissions" },
  { href: "#contact", label: "Contact" },
]

function InterestLine() {
  const email = site.email.trim()
  const waitlist = site.waitlistUrl.trim()
  if (!email && !waitlist) return null

  return (
    <p className="mt-5 text-base leading-relaxed text-ink/80">
      Want to be first to know?{" "}
      {email ? (
        <a
          href={`mailto:${email}`}
          className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
        >
          Email me
        </a>
      ) : null}
      {email && waitlist ? " or " : null}
      {waitlist ? (
        <a
          href={waitlist}
          className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
        >
          join the waitlist
        </a>
      ) : null}
      .
    </p>
  )
}

export default function App() {
  const [active, setActive] = useState<Artwork | null>(null)
  const email = site.email.trim()
  const hasContact = email.length > 0 || site.socials.length > 0

  return (
    <div className="min-h-svh text-ink">
      <a
        href="#work"
        className="absolute top-4 left-4 z-50 -translate-y-24 bg-ink px-3 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to the work
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
        <Work onOpen={setActive} />

        <section id="about" className="border-t border-ink/10">
          <div className="mx-auto max-w-2xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {site.aboutTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80">{site.about}</p>
          </div>
        </section>

        <section id="commissions" className="border-t border-ink/10">
          <div className="mx-auto max-w-2xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {site.commissionsTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80">{site.commissions}</p>
            <InterestLine />
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-ink/15">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <p className="font-display text-3xl font-semibold tracking-[-0.03em]">
            <Wordmark />
          </p>
          <h2 className="font-display mt-8 text-2xl font-semibold tracking-[-0.03em]">Contact</h2>
          {email ? (
            <p className="mt-3">
              <a
                href={`mailto:${email}`}
                className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {email}
              </a>
            </p>
          ) : null}
          {site.socials.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {site.socials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex text-ink transition-colors hover:text-berry"
                  >
                    {link.href.includes("instagram.com") ? <InstagramIcon /> : link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className={`${hasContact ? "mt-8" : "mt-4"} max-w-2xl text-sm leading-relaxed text-ink/75`}>
            {site.terms}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/55">{site.trademark}</p>
          <p className="mt-8 text-xs tracking-[0.14em] text-ink/45 uppercase">
            © {site.year} {site.name}
          </p>
        </div>
      </footer>

      <PreviewDialog piece={active} onOpenChange={(open) => !open && setActive(null)} />
    </div>
  )
}
