<template>
  <div>
    <div>Message : {{ message }}</div>
    <div>Reversed Message : {{ reversedMessage }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    message: String,
  },
  setup(props) {
    const reversedMessage = computed(() => {
      return props.message.split("").reverse().join("");
    });
    return {
      reversedMessage,
    };
  },
};
</script>

<style>
</style>