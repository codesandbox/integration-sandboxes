<template>
  <div>{{ counterResult }}</div>
  <button @click="counterResult = incrementBy">IncreamentByOne</button>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    initialNumber: Number,
    incrementBy: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    // By Default it will start from zero
    const counter = ref(props?.initialNumber ?? 0);

    const counterResult = computed({
      get: () => {
        return "Counter Result is : " + counter.value;
      },
      set: (val) => {
        counter.value = counter.value + val;
      },
    });

    return {
      counterResult,
    };
  },
};
</script>

<style scoped></style>