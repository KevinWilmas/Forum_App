import { defineStore } from "pinia";
import sourceData from "@/data.json";
import { useUsersStore } from "./UsersStore";
import { usePostsStore } from "./PostsStore";
import { useThreadsStore } from "./ThreadsStore";
// import { findById } from "@/helpers";

export const useAuthUsersStore = defineStore("AuthUsersStore", {
  state: () => {
    return {
      users: useUsersStore().users,
      authId: "rpbB8C6ifrYmNDufMERWfQUoa202",
    };
  },
  getters: {
    // authUser: (state) => state.users.find((user) => user.id === state.authId),
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId);
      if (!user) return null;
      const postsStore = usePostsStore();

      const threadsStore = useThreadsStore();
      const threads = threadsStore.threads;
      return {
        ...user,
        // authUser.posts
        get posts() {
          return postsStore.posts.filter((posts) => posts.userId === user.id);
        },
        // authUser.postsCount
        get postsCount() {
          return this.posts.length;
        },
        // authUser.threads
        get threads() {
          return threadsStore.threads.filter((post) => post.userId === user.id);
        },
        // authUser.threadsCount
        get threadsCount() {
          return this.threads.length;
        },
      };
    },
  },
  actions: {},
});
