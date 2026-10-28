export type SocialLink = {
  label: string
  href: string
}

/**
 * Words on the site. Change these without touching the layout.
 * Add a social link when you want it in the footer, for example:
 * { label: "Instagram", href: "https://www.instagram.com/your-handle" }
 */
export const site = {
  name: "cou.cou.lou",
  title: "cou.cou.lou — phone wallpapers",
  description:
    "Phone wallpapers by cou.cou.lou. Pokémon fan art, free to download for personal use.",
  tagline: "Illustration for phones",
  hero: "Pokémon fan art, made to sit on a lock screen. Everything here is free to download and keep for yourself.",
  aboutTitle: "A small wall for drawings",
  about: [
    "cou.cou.lou is an illustration practice. Lately the sketchbook is full of Pokémon fan art, and the drawings that fit a phone are collected here.",
    "Take one, set it, and live with it. New wallpapers will show up on this wall as they are finished.",
  ],
  stepsTitle: "On your phone",
  steps: [
    "Choose a wallpaper and save the picture.",
    "If your phone opens the image instead of saving it, press and hold, then add it to your photos.",
    "Set it as the lock screen or the home screen from the photos app.",
  ],
  sizeNote:
    "The numbers under each picture are its pixel size. A tall file around 1170 × 2532 covers recent phones. Bigger files are welcome.",
  personalUse:
    "Download these for your own devices. Please don’t resell them, sell prints of them, or upload the files somewhere else.",
  trademark:
    "Pokémon and character names are trademarks of Nintendo, Creatures Inc., and GAME FREAK inc. Drawings shared here are unofficial fan art. cou.cou.lou is not affiliated with or endorsed by those companies.",
  sampleNotice:
    "These are studio stand-ins, drawn as dots and flat color. Fan-art wallpapers will replace them.",
  year: 2026,
  socials: [] as SocialLink[],
}
