<template>
  <button class="button" :class="[size]" v-bind="$attrs" @click="onClick">
    <!-- @slot To supply button content -->
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

const props = defineProps({
  sm: {
    type: Boolean,
    default: false,
  },
  lg: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["click"])

let size = ""

if (props.sm) {
  size = "sm"
}

if (props.lg) {
  size = "lg"
}

function onClick(): void {
  emit("click")
}
</script>

<style lang="css" scoped>
button {
  color: black;
  background: lightcyan;
  border-radius: 4px;
  border: 0 none;
  cursor: pointer;
}

.sm {
  font-size: 10px;
  padding: 2px 5px;
}

.lg {
  font-size: 30px;
  padding: 5px 10px;
}
</style>
