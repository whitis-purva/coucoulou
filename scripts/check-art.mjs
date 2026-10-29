import { existsSync, readFileSync } from "node:fs"

const source = readFileSync(new URL("../src/data/art.ts", import.meta.url), "utf8")
const files = [...source.matchAll(/file:\s*"([^"]+)"/g)].map((match) => match[1])

if (files.length === 0) {
  console.error("No artwork files listed in src/data/art.ts")
  process.exit(1)
}

let missing = 0
for (const file of files) {
  const target = new URL(`../public/${file}`, import.meta.url)
  if (!existsSync(target)) {
    console.error(`Missing public/${file}`)
    missing += 1
  }
}

if (missing > 0) process.exit(1)
console.log(`Checked ${files.length} artwork file${files.length === 1 ? "" : "s"}.`)
