# cou.cou.lou

A portfolio site for cou.cou.lou. The gallery is the page. Pokémon phone wallpapers are the first series inside it, and later work can join as another series without a new layout.

The site is static, so it can be published on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Add a drawing

1. Put the full-resolution image in `public/art/`.
2. Add an entry to the artwork list in `src/data/art.ts`. Point `file` at the original and `preview` at a path such as `art/previews/your-slug.webp`.
3. Run `npm run previews`. The grid and the hero use the preview. The Download link serves the full file.

While every piece is in one collection, the filter chips stay off the page. Add a piece with `collection: "commissions"`, `"pokemon"`, or `"original"`, and give it a `series` entry, when that work is ready to show. The chips turn on by themselves. Don’t add a series with no pictures.

Words for the hero, about, commissions, and footer live in `src/data/site.ts`. Set `email` (and optionally `waitlistUrl`) there when you want a way for people to ask about commissions. Add social links to `socials` the same way.

Wallpaper files are free for personal use. The footer says so, including a request not to use them for AI training, and it includes the Pokémon fan-art notice.

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/pages.yml` builds the site and publishes it.

The published site uses relative file paths, so it works at `https://yourname.github.io/repository-name/` and at a custom domain. The custom domain for this site is `coucoulou.art`.
