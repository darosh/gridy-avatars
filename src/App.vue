<template>
  <div id="app" style="padding: 0 12px; font-family: sans-serif">
    <div><h3>Avatars</h3></div>
    <g-avatar width="48" :value="item" v-for="(item, k) in items" :key="k"></g-avatar>
    <div><h3>Shapes</h3></div>
    <textarea :value="svg" readonly cols="30" rows="12" style="width: 100%"></textarea>
    <div><h3>Colors</h3></div>
    <textarea :value="colors" readonly cols="30" rows="12" style="width: 100%"></textarea>
  </div>
</template>

<script>
import { svg } from "./svg";
import { colors } from "./colors";

const items = [];

const COLORS = 8

for (let i = 0; i < COLORS; i++) {
  for (let j = 0; j < COLORS; j++) {
    const i8 = i % 8
    const j8 = j % 8
    const a = i.toString(16)
    const b = j.toString(16)
    items.push(`${i8}${a}${j8}${b}${j8}${b}`);
  }
}

export default {
  components: {
    GAvatar: () => import("./Avatar")
  },
  data() {
    return {
      svg: JSON.stringify(svg, null, 2),
      colors: JSON.stringify(colors, null, 2),
      items
    };
  }
};
</script>
