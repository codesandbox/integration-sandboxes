<template>
  <div />
  <!-- <AppBar /> 
  // Here we supposed to pass pageProperties
  // to Layout and Layout -> Main Floor -> Header Room
  // But with the help of provide/inject we can directly
  // use this in Header Room component -->
  <Layout />
</template>

<script>
import { provide } from "vue";
import Layout from "./Layout";
export default {
  components: {
    Layout,
  },
  setup() {
    provide("pageProperties", {
      pageName: "Provide/Inject",
      pageVersion: "1.0.0",
      pageUser: "admin",
    });
  },
};
</script>

<style>
</style>