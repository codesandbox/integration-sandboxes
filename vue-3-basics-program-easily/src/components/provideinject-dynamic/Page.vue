<template>
  <div>
    Page (Parent) :  
    <input v-model="parentValue" />
  </div>
  
  <Layout />
</template>

<script>
import { provide, ref } from "vue";
import Layout from "./Layout";
export default {
  components: {
    Layout,
  },
  setup() {
    let parentValue = ref('Default Value');
    provide("parentValue", parentValue);
    return {
      parentValue,
    };
  },
};
</script>

<style>
</style>