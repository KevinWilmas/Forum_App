<script>
import HelloWorld from "./components/HelloWorld.vue";
import PageHome from "./components/PageHome.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PageHome,
  },
};
</script>

<template>
  <!-- <hello-world></hello-world> -->
  <page-home></page-home>
</template>

<style scoped></style>
