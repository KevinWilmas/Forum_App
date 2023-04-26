<script setup>
import { ref, computed } from "vue";
import { useThreadsStore } from "@/components/stores/ThreadsStore";
import { useForumsStore } from "../components/stores/ForumsStore";
import { storeToRefs } from "pinia";

const { createThread } = useThreadsStore();
const { forums } = storeToRefs(useForumsStore());

const props = defineProps({
  forumId: { type: String, required: true },
});

const forum = computed(() =>
  forums.value.find((forum) => forum.id === props.forumId)
);

const title = ref("");
const text = ref("");

function save() {
  createThread({
    text: text.value,
    title: title.value,
    forumId: forum.value.id,
  });
}
</script>

<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>

    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_title">Title:</label>
        <input
          v-model="title"
          type="text"
          id="thread_title"
          class="form-input"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          v-model="text"
          id="thread_content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="btn-group">
        <button class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
