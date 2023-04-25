import { defineStore } from "pinia";
import sourceData from "@/data.json";
import { useThreadsStore } from "./ThreadsStore";
import { useAuthUsersStore } from "./AuthUsersStore";

export const usePostsStore = defineStore("PostsStore", {
  state: () => {
    return {
      posts: sourceData.posts,
    };
  },
  getters: {},
  actions: {
    // **VUEX**
    // createPost ({ commit, state }, post) {
    //   post.id = 'ggqq' + Math.random()
    //   post.userId = state.authId
    //   post.publishedAt = Math.floor(Date.now() / 1000)
    //   commit('setPost', { post }) // set the post
    //   commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) // append post to thread
    // },
    createPost(post) {
      post.id = "ggqq" + Math.random();
      const authUsersStore = useAuthUsersStore();
      post.userId = authUsersStore.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      this.posts.push(post);
      // append post to thread
      const thread = useThreadsStore().threads.find(
        (thread) => thread.id === post.threadId
      );
      thread.posts.push(post.id);
    },
  },
});
