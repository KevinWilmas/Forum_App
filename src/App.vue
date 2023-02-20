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
  <div class="container"><page-home></page-home></div>
</template>

<style scoped></style>