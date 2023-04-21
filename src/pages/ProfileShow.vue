<script setup>
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
import { storeToRefs } from "pinia";
import { useForumsStore } from "@/components/stores/ForumsStore.js";
import { usePostsStore } from "@/components/stores/PostsStore.js";
import { useUsersStore } from "@/components/stores/UsersStore.js";

const usersStore = useUsersStore();
const forumsStore = useForumsStore();
const postsStore = usePostsStore();

// ***OPTIONS API AND VUEX***
//
// components: {PostList},
// computed: {
//   ...mapGetters({user: 'authUser'}),
// userPosts () {
//   return this.$store.state.posts.filter(posts => posts.userId === this.user.id)
// },
//   usersPostsCount () {
//     return this.userPosts.length
//   },
//   userThreads () {
//     return this.$store.state.threads.filter(thread => thread.userId === this.user.id)
//   },
//   userThreadsCount () {
//     return this.userThreads.length
//   }
// }

const userPosts = computed(() => {
  return postsStore.posts.filter(
    (posts) => posts.userId === usersStore.authUser.id
  );
});

const usersPostsCount = computed(() => {
  return userPosts.value.length;
});
const userThreads = computed(() => {
  return forumsStore.forums.find(
    (thread) => thread.userId === usersStore.authUser.id
  );
});

const userThreadsCount = computed(() => {
  return userThreads.value.length;
});
</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img
              :src="usersStore.authUser.avatar"
              :alt="`${usersStore.authUser.name} profile picture`"
              class="avatar-xlarge"
            />
          </p>

          <h1 class="title">{{ usersStore.authUser.username }}</h1>

          <p class="text-lead">{{ usersStore.authUser.name }}</p>

          <p class="text-justify">
            {{ usersStore.authUser.bio || "No bio specified." }}
          </p>

          <span class="online"
            >{{ usersStore.authUser.username }} is online</span
          >

          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>

          <hr />

          <p v-if="usersStore.authUser.website" class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a :href="usersStore.authUser.website">{{
              usersStore.authUser.website
            }}</a>
          </p>
        </div>

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
        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
