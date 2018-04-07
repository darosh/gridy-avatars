<template>
  <svg viewBox="0 0 24 24">
    <defs>
      <clipPath :id="clipA">
        <rect width="12" height="24" x="0" y="0"></rect>
      </clipPath>
      <clipPath :id="clipB">
        <rect width="12" height="24" x="12" y="0"></rect>
      </clipPath>
    </defs>
    <g v-html="svg.body[value[0]]" :style="{fill: colors.bg[d(value[1])][0]}" :clip-path="urlA"></g>
    <g v-html="svg.body[value[0]]" :style="{fill: colors.bg[d(value[1])][1]}" :clip-path="urlB"></g>
    <g v-html="svg.eyes[value[2]]" :style="{fill: colors.fg[d(value[1])][d(value[3])][0]}" :clip-path="urlA"></g>
    <g v-html="svg.eyes[value[2]]" :style="{fill: colors.fg[d(value[1])][d(value[3])][1]}" :clip-path="urlB"></g>
    <g v-html="svg.mouth[value[4]]" :style="{fill: colors.fg[d(value[1])][d(value[5])][0]}" :clip-path="urlA"></g>
    <g v-html="svg.mouth[value[4]]" :style="{fill: colors.fg[d(value[1])][d(value[5])][1]}" :clip-path="urlB"></g>
  </svg>
</template>

<script>
import { svg } from "./svg";
import { colors } from "./colors";

let id = 0

export default {
  props: {
    value: {
      type: String,
      default: "000000"
    }
  },
  data() {
    return {
      id: ++id,
      svg,
      colors
    };
  },
  computed: {
    clipA() {
      return "clip-a-" + this.id;
    },
    clipB() {
      return "clip-b-" + this.id;
    },
    urlA() {
      return `url(#${this.clipA})`;
    },
    urlB() {
      return `url(#${this.clipB})`;
    }
  },
  methods: {
    d(d) {
      return parseInt(d, 16)
    }
  }
};
</script>
