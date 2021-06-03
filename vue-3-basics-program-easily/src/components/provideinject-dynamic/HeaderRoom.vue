<template>
  <div>
    Header Room (Child) : {{ parentValue }}
  </div>
  
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    let parentValue = inject("parentValue");
    return {
      parentValue,
    };
  },
};
</script>

<style>
</style>