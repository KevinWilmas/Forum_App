<script setup>
import { ref } from "vue";
import sourceData from "@/data.json";
const users = ref(sourceData.users);
const props = defineProps({
  posts: {
    required: true,
    type: Array,
  },
});
const diffForUsers = (timestamp) => {
  return dayjs.unix(timestamp).fromNow();
};
const userFriendlyDate = (timestamp) => {
  return dayjs.unix(timestamp).format("llll");
};
function userById(userId) {
  return users.value.find((p) => p.id === userId);
}
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt=""
          />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        <AppDate :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
