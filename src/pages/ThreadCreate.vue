<script setup>
import { ref, computed } from "vue";
import { useThreadsStore } from "@/components/stores/ThreadsStore";
import { useForumsStore } from "../components/stores/ForumsStore";
import { storeToRefs } from "pinia";
import router from "@/router";

const { createThread } = useThreadsStore();
const { forums } = storeToRefs(useForumsStore());

const props = defineProps({
  forumId: { type: String, required: true },
});

const forum = computed(() =>
  forums.value.find((forum) => forum.id === props.forumId)
);

async function save(title, text) {
  const thread = await createThread({
    forumId: forum.value.id,
    title,
    text,
  });
  router.push({ name: "ThreadShow", params: { id: thread.id } });
}
function cancel() {
  router.push({ name: "Forum", params: { id: props.forumId } });
}
</script>

<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
    <ThreadEditor @save="save" @cancel="cancel" />
  </div>
</template>

<style scoped></style>
