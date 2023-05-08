<script setup>
import { ref } from "vue";

const form = ref({ title: props.title, text: props.text });

const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  text: {
    default: "",
    type: String,
  },
});

const emit = defineEmits(["save", "cancel"]);

function save() {
  emit("save", { ...form });
}
</script>

<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="form.title"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="form.text"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<style scoped></style>
