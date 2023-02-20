<script>
import sourceData from "../data.json";
export default {
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>

<template>
  <div>{{ threads }}</div>
</template>

<style scoped></style>