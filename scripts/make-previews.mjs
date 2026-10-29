import { mkdir, stat } from "node:fs/promises"
import { dirname } from "node:path"
import { readFileSync } from "node:fs"
import sharp from "sharp"

const source = readFileSync(new URL("../src/data/art.ts", import.meta.url), "utf8")
const blocks = source.split(/\n\s*\{/).slice(1)
const pairs = []

for (const block of blocks) {
  const file = block.match(/file:\s*"([^"]+)"/)?.[1]
  const preview = block.match(/preview:\s*"([^"]+)"/)?.[1]
  if (file && preview) pairs.push({ file, preview })
}

if (pairs.length === 0) {
  console.error("No file/preview pairs in src/data/art.ts")
  process.exit(1)
}

const root = new URL("../", import.meta.url)

for (const { file, preview } of pairs) {
  const input = new URL(`public/${file}`, root)
  const output = new URL(`public/${preview}`, root)
  await mkdir(dirname(output.pathname), { recursive: true })
  await sharp(input.pathname).resize({ width: 780, withoutEnlargement: true }).webp({ quality: 76 }).toFile(output.pathname)
  const info = await stat(output)
  console.log(`${preview}  ${Math.round(info.size / 1024)} KB`)
}
