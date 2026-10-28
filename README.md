# cou.cou.lou

A small site for phone wallpapers from the cou.cou.lou sketchbook. It is a static site, built to publish on GitHub Pages. People can preview a wallpaper and save the PNG for their own phone.

The pictures shipping with the repo are studio stand-ins (dots, flat color, one paper bird). They are not Pokémon drawings. Replace them with your own files when you are ready.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Add a wallpaper

1. Export a PNG. A tall phone size works best: **1170 × 2532**, or a larger master such as **1440 × 3200**.
2. Save it as `public/wallpapers/your-file.png`.
3. Add an entry at the top of the list in `src/data/wallpapers.ts`. Copy one of the existing entries and change the title, size, file name, and description. Leave off `sample: true`.
4. When your own files are in, delete the studio stand-ins from that list. You can also delete their PNGs from `public/wallpapers/`.

The notice at the top of the wall disappears once no entry has `sample: true`. If you add a second collection name, filter buttons appear on their own.

To redraw the four stand-ins:

```bash
npm run wallpapers
```

## Change the words

Bio, the personal-use line, the fan-art notice, and social links live in `src/data/site.ts`.

The footer states a personal-use license and a Pokémon trademark notice. That matches unofficial fan art people set on their own phones. Change the wording there if you want a different permission.

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
