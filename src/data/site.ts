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
  title: "cou.cou.lou — illustration",
  description:
    "Illustration by cou.cou.lou: Pokémon fan art, ponysona and fursona drawings, and pages for a Michi-method binder. Some fan art can be saved as a phone wallpaper.",
  tagline: "Illustration",
  hero: "Pokémon fan art, characters drawn for people, and pages for a collecting binder. A few of the fan-art pieces can be saved for a phone.",
  aboutTitle: "The sketchbook",
  about: [
    "cou.cou.lou is an illustration practice. Most of the drawings are Pokémon fan art. Some are made for a person: a ponysona or a fursona. Others are sized for a Michi-method binder, where the page shape changes with the spread.",
    "The wall here is for looking. When a piece is also a phone wallpaper, you can save it and set it on your own screen.",
  ],
  wall: [
    {
      href: "#fan-art",
      title: "Fan art",
      text: "Pokémon drawings from the sketchbook. Save a file when you want it on a phone.",
    },
    {
      href: "#for-people",
      title: "For people",
      text: "Ponysonas and fursonas, drawn for the person the character belongs to.",
    },
    {
      href: "#binder",
      title: "Binder pages",
      text: "Illustrations for a Michi-method collection, each in the proportion of its page.",
    },
  ],
  saveHint:
    "If your phone opens the picture instead of saving it, press and hold, then add it to your photos. Set it from there.",
  personalUse:
    "Wallpaper files are free to save for your own devices. Please don’t resell them, sell prints of them, or upload the files somewhere else.",
  trademark:
    "Pokémon and character names are trademarks of Nintendo, Creatures Inc., and GAME FREAK inc. Drawings shared here are unofficial fan art. cou.cou.lou is not affiliated with or endorsed by those companies.",
  year: 2026,
  socials: [] as SocialLink[],
}
