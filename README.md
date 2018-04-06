# Gridy Avatars

> SVG avatars generator

## Demo

Try randomize button [here](https://darosh.github.io/gridy-avatars/dist/).

## Usage

* see exported API in [./src/avatars.js](./src/avatars.js)
* use [./dist/avatars.js](./dist/avatars.js)
* see [./dist/index.html](./dist/index.html) for example usage (with Vue.js)

## Development

1. `yarn`
2. edit [./src/avatars.svg](./src/avatars.svg) in Inkscape (use one _layer_ per feature)
3. `npm run dev`
4. copy generated shapes from dev web app to [./shapes.json](./shapes.json)
5. `npm run build`

## Notes

* 8<sup>6</sup> = 262.144 variants
* based on 24&times;24 pixels grid
* using Material Design colors (generated in [./src/colors.js](./src/colors.js))
* no transparent colors
* utilizing SVG clipPaths (with fully opaque colors)
* no dependencies
* inspired by [Gabfranck/svg_avatar](https://github.com/Gabfranck/svg_avatar)
