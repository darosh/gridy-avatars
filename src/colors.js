import material from "vuetify/es5/util/colors";
import { WHITE, BLACK, GRAY, LIGHT, DARK } from "./color";
import { rgb } from "d3-color";

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
  const s = bgColors[x]
  fills.bg[x] = [s.darken1, s.darken2]
  fills.fg[x] = []

  const fg = getFgColors(s.darken1)

  for (let y = 0; y < fg.length; y++) {
    const s = fg[y]
    fills.fg[x][y] = [s.lighten2, s.lighten1]
  }
}

export const colors = fills

function getBgColors() {
  return scale
  .map((base) => {
    const c = rgb(base.darken1)
    const white = distance(LIGHT, c)
    const black = distance(DARK, c)
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
  const bgc = rgb(bg)

  return scale
  .map((base) => {
    const c = rgb(base.lighten2)
    const ratio = distance(bgc, c)

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

function distance (a, b) {
  return Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2)
}
