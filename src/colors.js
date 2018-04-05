import material from "vuetify/es5/util/colors";

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
  material.deepOrange
]

const white = {
  lighten2: material.grey.lighten3,
  lighten1: material.grey.lighten2,
}

const black = {
  lighten2: material.grey.darken2,
  lighten1: material.grey.darken3,
}

const fills = {
  bg: [],
  fg: [],
};

for(let x = 0; x < 8; x++) {
  const s = scale[(x * 2 + 2) % scale.length]
  fills.bg[x] = [s.darken1, s.darken2]
  fills.fg[x] = []

  for(let y = 0; y < 8; y++) {
    const s = x === y ? white : (x - y === -1) ? black : scale[(y * 2 + 1) % scale.length]
    fills.fg[x][y] = [s.lighten2, s.lighten1]
  }
}

export const colors = fills
