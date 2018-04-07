import colors from '../colors'
import svg from '../shapes'

export const base = 8
export const baseColors = 8
export const size = 24
export const total = Math.pow(base, 3) * Math.pow(baseColors, 3)
export let id = 0

function ri(total) {
  return Math.floor(Math.random() * total)
}

export function random() {
  // return `${ri(base)}${ri(baseColors)}${ri(base)}${ri(baseColors)}${ri(base)}${ri(baseColors)}`
  return Math.floor(Math.random() * total + total).toString(base).substring(1)
}

export function outer(id, width) {
  return `<svg ${width ? `width="${width}" height="${width}" ` : ''}viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`
    + inner(id)
    + `</svg>`
}

export function inner(value) {
  const clipA = `clip-a-${id}`
  const clipB = `clip-b-${id}`
  const urlA = `url(#${clipA})`
  const urlB = `url(#${clipB})`
  const half = size / 2

  ++id

  return `<defs><clipPath id="${clipA}"><rect width="${half + 1}" height="${size}" x="0" y="0"></rect></clipPath>`
    + `<clipPath id="${clipB}"><rect width="${half}" height="${size}" x="${half}" y="0"></rect></clipPath></defs>`
    + `<g style="fill: ${colors.bg[value[1]][0]}" clip-path="${urlA}">${svg.body[value[0]]}</g>`
    + `<g style="fill: ${colors.bg[value[1]][1]}" clip-path="${urlB}">${svg.body[value[0]]}</g>`
    + `<g style="fill: ${colors.fg[value[1]][value[3]][0]}" clip-path="${urlA}">${svg.eyes[value[2]]}</g>`
    + `<g style="fill: ${colors.fg[value[1]][value[3]][1]}" clip-path="${urlB}">${svg.eyes[value[2]]}</g>`
    + `<g style="fill: ${colors.fg[value[1]][value[5]][0]}" clip-path="${urlA}">${svg.mouth[value[4]]}</g>`
    + `<g style="fill: ${colors.fg[value[1]][value[5]][1]}" clip-path="${urlB}">${svg.mouth[value[4]]}</g>`
}
