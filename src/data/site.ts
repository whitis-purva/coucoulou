export type SocialLink = {
  label: string
  href: string
}

/**
 * Words on the site. Change these without touching the layout.
 *
 * Set `email` to a public address when you want “Email me” on Commissions
 * and in the footer. Set `waitlistUrl` to a Tally or Google Form if you
 * would rather collect interest that way. Leave both blank until then.
 *
 * Add a social link when you want it under Contact, for example:
 * { label: "Instagram", href: "https://www.instagram.com/your-handle" }
 */
export const site = {
  name: "cou.cou.lou",
  title: "cou.cou.lou — illustration",
  description:
    "Illustration and fan art by cou.cou.lou. Pokémon, original characters, and custom character art.",
  hero: "Illustration & fan art. Pokémon, original characters, and custom character art.",
  aboutTitle: "About",
  about:
    "I’m cou.cou.lou, an illustrator who draws Pokémon, creature design, and character art. I love bold color and soft linework. This site is where I share finished work and take on custom character commissions.",
  commissionsTitle: "Commissions",
  commissions:
    "I’m planning to open commissions for ponysonas, fursonas, and custom Pokémon fan art.",
  email: "",
  waitlistUrl: "",
  saveHint:
    "If your phone opens the picture instead of saving it, press and hold, then add it to your photos. Set it from there.",
  terms:
    "Free for personal use. Please don’t repost, resell, or use for AI training. Credit appreciated if you share!",
  trademark:
    "Pokémon and related characters are trademarks of Nintendo, Creatures Inc., and GAME FREAK inc. This is unofficial fan art, not affiliated with or endorsed by them.",
  year: 2026,
  socials: [] as SocialLink[],
}
