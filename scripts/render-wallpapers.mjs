import { mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const W = 1080
const H = 2340

const paper = "#f4efe6"
const ink = "#1c1915"
const berry = "#c4544c"
const moss = "#3e5c49"
const butter = "#e4c56a"
const blush = "#efd2c8"

const outDir = path.resolve("public/wallpapers")

function svg(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
${body}
</svg>`
}

function mark(x, y, primary, accent) {
  return `
    <circle cx="${x}" cy="${y}" r="16" fill="${primary}"/>
    <circle cx="${x + 44}" cy="${y}" r="16" fill="${accent}"/>
    <circle cx="${x + 88}" cy="${y}" r="16" fill="${primary}"/>
  `
}

function hello() {
  const ground = []
  for (let i = 0; i < 18; i += 1) {
    const t = i / 17
    const x = 150 + t * 780
    const y = 1540 - Math.sin(t * Math.PI) * 36
    const fill = i % 5 === 2 ? berry : ink
    const r = i % 4 === 0 ? 11 : 8
    ground.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}"/>`)
  }

  const seeds = [
    [180, 640, 48, berry],
    [860, 760, 22, moss],
    [140, 980, 14, moss],
    [930, 1280, 18, berry],
    [120, 1320, 10, ink],
  ]
    .map(([x, y, r, fill]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`)
    .join("\n")

  return svg(`
    <rect width="${W}" height="${H}" fill="${paper}"/>
    <circle cx="760" cy="1180" r="390" fill="${blush}"/>
    ${seeds}
    <g transform="translate(210 860)">
      <path d="M70 168 C20 80 -40 130 8 196 C-36 176 -8 236 78 214 Z" fill="${ink}"/>
      <ellipse cx="250" cy="176" rx="186" ry="116" fill="${ink}"/>
      <circle cx="430" cy="78" r="96" fill="${ink}"/>
      <path d="M500 58 L630 98 L496 132 Z" fill="${berry}"/>
      <ellipse cx="228" cy="168" rx="86" ry="50" fill="${moss}"/>
      <ellipse cx="270" cy="214" rx="78" ry="40" fill="${blush}"/>
      <circle cx="454" cy="62" r="16" fill="${paper}"/>
      <circle cx="458" cy="62" r="7" fill="${ink}"/>
      <path d="M200 286 v78 M280 294 v70" fill="none" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
      <path d="M172 364 h52 M252 364 h52" fill="none" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    </g>
    ${ground.join("\n")}
    ${mark(760, 1860, ink, berry)}
  `)
}

function margin() {
  const holes = []
  for (let y = 560; y <= 1880; y += 64) {
    holes.push(
      `<circle cx="248" cy="${y}" r="15" fill="${paper}" stroke="${ink}" stroke-width="4"/>`,
    )
  }

  const cluster = []
  const points = [
    [620, 980, 16],
    [670, 940, 10],
    [700, 1020, 22],
    [760, 960, 12],
    [640, 1080, 9],
    [790, 1100, 15],
  ]
  for (const [x, y, r] of points) {
    cluster.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${berry}"/>`)
  }

  return svg(`
    <rect width="${W}" height="${H}" fill="${paper}"/>
    <rect width="300" height="${H}" fill="${butter}"/>
    ${holes.join("\n")}
    <circle cx="720" cy="1240" r="250" fill="none" stroke="${berry}" stroke-width="22"/>
    <circle cx="860" cy="1680" r="74" fill="${moss}"/>
    ${cluster.join("\n")}
    ${mark(760, 1860, ink, berry)}
  `)
}

function hour() {
  const rand = mulberry32(7)
  const stars = []
  for (let i = 0; i < 70; i += 1) {
    const x = 90 + rand() * 900
    const y = 1080 + rand() * 760
    const nearMark = x > 720 && x < 980 && y > 1760 && y < 1960
    const nearMoon = (x - 500) ** 2 + (y - 900) ** 2 < 260 ** 2
    if (nearMark || nearMoon) continue
    const r = rand() > 0.85 ? 7 + rand() * 6 : 2 + rand() * 3.5
    const fill = rand() > 0.75 ? blush : paper
    stars.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}"/>`)
  }

  return svg(`
    <rect width="${W}" height="${H}" fill="${ink}"/>
    <circle cx="500" cy="900" r="230" fill="${butter}"/>
    <circle cx="610" cy="850" r="188" fill="${ink}"/>
    ${stars.join("\n")}
    <path d="M140 1760 H940" fill="none" stroke="${blush}" stroke-width="3"/>
    ${mark(760, 1860, paper, berry)}
  `)
}

function seeds() {
  const rand = mulberry32(21)
  const dots = []
  for (let i = 0; i < 78; i += 1) {
    const ang = i * 0.52
    const rad = 24 + i * 8.4 + (rand() - 0.5) * 16
    const x = 540 + Math.cos(ang) * rad
    const y = 1160 + Math.sin(ang) * rad * 1.05
    if (x < 70 || x > 1010 || y < 520 || y > 1980) continue
    const onSun = (x - 540) ** 2 + (y - 2140) ** 2 < 460 ** 2
    const palette = onSun ? [moss, ink, berry, moss] : [paper, butter, berry, paper, blush]
    const fill = palette[i % palette.length]
    const r = 7 + (i % 6) * 3.2
    dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}"/>`)
  }

  return svg(`
    <rect width="${W}" height="${H}" fill="${moss}"/>
    <circle cx="540" cy="2140" r="520" fill="${paper}"/>
    ${dots.join("\n")}
    <circle cx="220" cy="700" r="36" fill="${butter}"/>
    ${mark(700, 460, paper, butter)}
  `)
}

function mulberry32(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const pieces = [
  ["hello.png", hello()],
  ["margin.png", margin()],
  ["hour.png", hour()],
  ["seeds.png", seeds()],
]

await mkdir(outDir, { recursive: true })

for (const [name, source] of pieces) {
  const file = path.join(outDir, name)
  const info = await sharp(Buffer.from(source)).png({ compressionLevel: 9 }).toFile(file)
  console.log(`${name}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}
