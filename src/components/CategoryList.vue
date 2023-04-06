<script setup>
import ForumList from "./ForumList.vue";
import sourceData from "@/data.json";

// import { ref } from 'vue'

function getForumsForCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id);
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
    :category-name="category.name"
  />
</template>

<style scoped></style>
