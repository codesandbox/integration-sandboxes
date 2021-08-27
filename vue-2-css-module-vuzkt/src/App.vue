<template>
  <div id="app">
    <div :class="$style.red">
      This text should be red if css modules works
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style module>
.red {
  color: red;
}
</style>
