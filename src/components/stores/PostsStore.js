import { defineStore } from "pinia";
import sourceData from "@/data.json";
import { useThreadsStore } from "./ThreadsStore";
import { useUsersStore } from "./UsersStore";

export const usePostsStore = defineStore("PostsStore", {
  state: () => {
    return {
      posts: sourceData.posts,
    };
  },
  getters: {},
  //   userPosts: (state) =>
  //     state.posts.filter((post) => post.userId === useUsersStore.authUser.id),
  // },
  // userPostsCount: (state) => state.userPosts.length
  actions: {
    createPost(post) {
      post.id = "ggqq" + Math.random();
      this.posts.push(post);
      // append post to thread
      const thread = useThreadsStore().threads.find(
        (thread) => thread.id === post.threadId
      );
      thread.posts.push(post.id);
    },
  },
});
