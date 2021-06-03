<template>
  <div>Page Name : {{ pageProperties.pageName }}</div>
  <div>Page Name : {{ pageProperties.pageVersion }}</div>
  <div>Page Name : {{ pageProperties.pageUser }}</div>
</template>

<script>
export default {
  inject: ["pageProperties"],
};
</script>

<style>
</style>