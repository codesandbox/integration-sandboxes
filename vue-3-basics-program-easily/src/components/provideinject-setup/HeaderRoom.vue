<template>
  <div>Page Name : {{ pageProperties.pageName }}</div>
  <div>Page Name : {{ pageProperties.pageVersion }}</div>
  <div>Page Name : {{ pageProperties.pageUser }}</div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    let pageProperties = inject("pageProperties");
    return {
      pageProperties,
    };
  },
};
</script>

<style>
</style>