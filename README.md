# cou.cou.lou

A site for the cou.cou.lou sketchbook. It hangs three kinds of work:

- **Fan art**, mostly Pokémon. Pieces marked as wallpapers can be saved for a phone.
- **For people**, ponysona and fursona drawings.
- **Binder pages**, illustrations for a Michi-method Pokémon binder, in whatever proportion that page needs.

The site is static, so it can be published on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Add a drawing

1. Put the image in `public/art/`.
2. Add an entry to the list in `src/data/art.ts`.
   - `kind: "fan-art"` for Pokémon fan art
   - `kind: "for-people"` for a ponysona or fursona
   - `kind: "binder"` for a Michi-method binder page
3. Set `wallpaper: true` only when people should be able to download that file and set it on a phone. Leave it off for everything else.

An empty shelf shows a waiting frame until that kind of work has at least one entry. Words for the hero, the shelves, and the footer live in `src/data/site.ts`.

Wallpaper files are offered for personal use. The footer says so, and it includes a Pokémon trademark notice. Change that wording in `src/data/site.ts` if you want a different permission.

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/pages.yml` builds the site and publishes it.

If the repository is named `yourname.github.io`, the site is served from the domain root. Any other repository name is served from a subpath (`https://yourname.github.io/repository-name/`), and the workflow sets that up.

To preview a subpath locally:

```bash
VITE_BASE=/cou.cou.lou/ npm run build
npx vite preview --host 127.0.0.1 --port 43123
```

A custom domain can be added later in the Pages settings.
