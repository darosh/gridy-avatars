import avatars from "raw-loader!./avatars.svg";

const div = document.createElement("div");
div.innerHTML = avatars;
const labeled = div.querySelectorAll("[inkscape\\:label]");

const layers = {};

labeled.forEach(element => {
  if (element.childElementCount) {
    const l = element.getAttribute("inkscape:label").toLowerCase().split(" ");
    layers[l[0]] = layers[l[0]] || [];

    for (const c of element.children) {
      for (let name of c.getAttributeNames()) {
        if (/inkscape|^id$|style|sodipodi/.test(name)) {
          c.removeAttribute(name);
        }
      }
    }

    let innerHTML = ''

    for(const e of element.children) {
      innerHTML += e.outerHTML
    }

    layers[l[0]][l[1] || 0] = innerHTML;
  }
});

export const svg = layers
