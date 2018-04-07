import material from "vuetify/es5/util/colors";
import { Color, WHITE, BLACK, GRAY, LIGHT, DARK } from "./color";

const el = document.createElement('div')
el.style.display = 'none'
document.body.appendChild(el)

const COLORS = 8

const white = {
  darken1: material.grey.lighten2,
  lighten2: material.grey.lighten3,
  lighten1: material.grey.lighten2,
}

const black = {
  darken1: material.grey.darken2,
  lighten2: material.grey.darken2,
  lighten1: material.grey.darken3,
}

const scale = [
  material.red,
  material.pink,
  material.purple,
  material.deepPurple,
  material.indigo,
  material.blue,
  material.lightBlue,
  material.cyan,
  material.teal,
  material.green,
  material.lightGreen,
  material.lime,
  material.yellow,
  material.amber,
  material.orange,
  material.deepOrange,
  white,
  black
]

const fills = {
  bg: [],
  fg: [],
};

const bgColors = getBgColors();

for (let x = 0; x < bgColors.length; x++) {
  // const s = scale[(x * 2 + 2) % scale.length]
  const s = bgColors[x]
  fills.bg[x] = [s.darken1, s.darken2]
  fills.fg[x] = []

  const fg = getFgColors(s.darken1)

  for (let y = 0; y < fg.length; y++) {
    // const s = x === y ? white : (x - y === -1) ? black : scale[(y * 2 + 1) % scale.length]
    const s = fg[y]
    fills.fg[x][y] = [s.lighten2, s.lighten1]
  }
}

console.log(fills)

export const colors = fills

function getBgColors() {
  return scale
  .map((base) => {
    const c = new Color(toRgba(base.darken1))
    // const white = c.contrast(LIGHT).ratio
    const white = c.distance(LIGHT)
    // const black = c.contrast(DARK).ratio
    const black = c.distance(DARK)
    const ratio = Math.min(black, white)

    return {
      base,
      ratio
    }
  })
  .sort((a, b) => a.ratio - b.ratio)
  .reverse()
  .filter((c, i) => i < COLORS)
  .sort((a, b) => scale.indexOf(a.base) - scale.indexOf(b.base))
  .map(c => c.base)
}


function getFgColors(bg) {
  const bgc = new Color(toRgba(bg))

  return scale
  .map((base) => {
    const c = new Color(toRgba(base.lighten2))
    // const ratio = bgc.contrast(c).ratio
    const ratio = bgc.distance(c)
    console.log(bgc.toString(), c.toString(), ratio)

    return {
      base,
      ratio
    }
  })
  .sort((a, b) => a.ratio - b.ratio)
  .reverse()
  .filter((c, i) => i < COLORS)
  .sort((a, b) => scale.indexOf(a.base) - scale.indexOf(b.base))
  .map(c => c.base)
}

function toRgba(c) {
  el.style.backgroundColor = c
  return getComputedStyle(el).backgroundColor
}
