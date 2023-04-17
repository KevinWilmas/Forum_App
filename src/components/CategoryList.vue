<script setup>
import ForumList from "./ForumList.vue";
import { useForumsStore } from "@/components/stores/ForumsStore.js";
const forumsStore = useForumsStore();

// import { ref } from 'vue'
function getForumsForCategory(category) {
  return forumsStore.forums.filter((forum) => forum.categoryId === category.id);
}
const props = defineProps({
  categories: {
    required: true,
    type: Array,
  },
});
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<style scoped></style>
