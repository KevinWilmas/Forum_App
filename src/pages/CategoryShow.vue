<script setup>
import { computed } from "vue";
import ForumList from "@/components/ForumList.vue";
import sourceData from "@/data.json";

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const category = computed(() => {
  return sourceData.categories.find((category) => category.id === props.id);
});

function getForumsForCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id);
}
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<style scoped></style>
