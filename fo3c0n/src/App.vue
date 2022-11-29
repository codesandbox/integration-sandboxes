<script setup>
import { ref } from "vue";

const msg = ref("world");
</script>

<template>
  <h1>Hello {{ msg }}</h1>
</template>

<style>
h1 {
  font-size: 1.5rem;
}
</style>