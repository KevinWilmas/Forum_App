<script setup>
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
import { storeToRefs } from "pinia";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileEditorCard from "@/components/UserProfileEditorCard.vue";
import { useAuthUsersStore } from "@/components/stores/AuthUsersStore";

const authUsersStore = useAuthUsersStore();
const user = authUsersStore.authUser;

const props = defineProps({
  edit: {
    required: false,
    type: Boolean,
  },
});
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard v-if="!edit" :user="user" />
        <UserProfileEditorCard v-else :user="user" />
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ user.username }}'s recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <!-- FIX ME -->
        <PostList :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
