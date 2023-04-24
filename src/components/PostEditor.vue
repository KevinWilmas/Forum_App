<script setup>
import { ref } from "vue";

const text = ref("");

const emit = defineEmits("save-post");

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

function save() {
  const postId = "aaaa" + Math.random();

  const post = {
    text: text.value,
  };

  emit("save", { post }); //access under eventData.post

  text.value = "";
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
        />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>
