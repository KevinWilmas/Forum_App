<script setup>
import { computed } from "vue";
import ForumList from "@/components/ForumList.vue";
import { useCategoriesStore } from "@/components/stores/CategoriesStore.js";
import { useForumsStore } from "@/components/stores/ForumsStore.js";

const categoriesStore = useThreadsStore();
const forumsStore = useForumsStore();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const category = computed(() => {
  return categoriesStore.categories.find(
    (category) => category.id === props.id
  );
});

function getForumsForCategory(category) {
  return forumsStore.forums.filter((forum) => forum.categoryId === category.id);
}
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<style scoped></style>
