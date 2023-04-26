<script setup>
import { ref, computed } from "vue";
import { useThreadsStore } from "@/components/stores/ThreadsStore.js";
import { useForumsStore } from "@/components/stores/ForumsStore.js";

const threadsStore = useThreadsStore();
const forumsStore = useForumsStore();
// posts.value.push(post);

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const forum = computed(() => {
  return forumsStore.forums.find((forum) => forum.id === props.id);
});

const threads = computed(() => {
  return threadsStore.threads.filter((thread) => thread.forumId === props.id);
});
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
        :to="{ name: 'ThreadCreate', params: { forumId: forum.id } }"
        class="btn-green btn-small"
      >
        Start a thread
      </router-link>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<style scoped></style>
