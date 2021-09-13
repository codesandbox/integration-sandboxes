<template>
  <div id="app">
    <Login v-if="!isConnected" @submit="onsubmit" />
    <Home v-else />
  </div>
</template>

<script>
import Login from "@/views/Login";

export default {
  name: "App",
  components: {
    Login,
  },

  data: () => ({
    isConnected: false,
  }),

  methods: {
    onsubmit(userId) {
      console.log("submit");
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
