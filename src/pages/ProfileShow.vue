<script setup>
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
import { storeToRefs } from "pinia";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileEditorCard from "@/components/UserProfileEditorCard.vue";
import { useAuthUsersStore } from "@/components/stores/AuthUsersStore";

const authUsersStore = useAuthUsersStore();
const user = authUsersStore.authUser;
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard :user="user" />
        <UserProfileEditorCard :user="user" />
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
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
