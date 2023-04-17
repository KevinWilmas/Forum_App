<script setup>
// import { ref } from "vue";
import { useUsersStore } from "@/components/stores/UsersStore.js";
import { usePostsStore } from "@/components/stores/PostsStore.js";
import { storeToRefs } from "pinia";

// const userss = storeToRefs(useUsersStore());
// const postss = storeToRefs(usePostsStore());

const usersStore = useUsersStore();
const postsStore = usePostsStore();

const props = defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

function postById(postId) {
  return postsStore.posts.find((p) => p.id === postId);
}
function userById(userId) {
  return usersStore.users.find((p) => p.id === userId);
}
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
