<script setup>
import { ref, computed } from "vue";
import { useThreadsStore } from "@/components/stores/ThreadsStore";
import { useForumsStore } from "../components/stores/ForumsStore";
import { storeToRefs } from "pinia";
import router from "@/router";
import { usePostsStore } from "../components/stores/PostsStore";

const { createThread } = useThreadsStore();
const threadStore = useThreadsStore();
const postsStore = usePostsStore();
const { forums } = storeToRefs(useForumsStore());

const props = defineProps({
  threadId: { type: String, required: true },
});

const thread = computed(() =>
  threadStore.threads.find((thread) => thread.id === props.threadId)
);

const text = computed(
  () => postsStore.posts.find((post) => post.id === props.thread.posts[0]).text
);

async function save(title, text) {
  const thread = await createThread({
    id: props.threadId,
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
      Editing new thread in <i>{{ thread.title }}</i>
    </h1>
    <ThreadEditor
      :title="thread.title"
      :text="text"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<style scoped></style>
