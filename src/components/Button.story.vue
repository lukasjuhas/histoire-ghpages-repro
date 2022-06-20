<script setup lang="ts">
import { reactive } from "vue"
import MyButton from "./Button.vue"

const state = reactive({
  text: "Button",
})
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: 200 }">
    <Variant title="Default">
      <MyButton>{{ state.text }}</MyButton>
    </Variant>
    <Variant title="Small">
      <MyButton sm>{{ state.text }}</MyButton>
    </Variant>
    <Variant title="Large">
      <MyButton lg>{{ state.text }}</MyButton>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Button

A Simple button component.
</docs>
