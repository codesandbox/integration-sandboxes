<template>
  <div>First Name : {{ firstName }}</div>
  <div>Last Name : {{ lastName }}</div>
  <div>Full Name : {{ fullName }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    firstName: String,
    lastName: String,
  },
  setup(props) {
    // 1.fullName depends on firstName,lastName.
    // 2.computed takes a getter function and returns an immutable reactive ref object
    // for the returned value from the getter.
    const fullName = computed(() => {
      return props.firstName + " " + props.lastName;
    });
    return {
      fullName,
    };
  },
};
</script>

<style scoped></style>
