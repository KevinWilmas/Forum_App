import { defineStore } from "pinia";
import sourceData from "@/data.json";

import { usePostsStore } from "./PostsStore";
import { useAuthUsersStore } from "./AuthUsersStore";
import { useForumsStore } from "./ForumsStore";

export const useThreadsStore = defineStore("ThreadsStore", {
  state: () => {
    return { threads: sourceData.threads };
  },
  getters: {},
  actions: {
    // **VUEX**
    // createThread ({ commit, state, dispatch }, { text, title, forumId }) {
    //   const id = 'ggqq' + Math.random()
    //   const userId = state.authId
    //   const publishedAt = Math.floor(Date.now() / 1000)
    //   const thread = { forumId, title, publishedAt, userId, id }
    //   commit('setThread', { thread })
    //   commit('appendThreadToUser', { userId, threadId: id })
    //   commit('appendThreadToForum', { forumId, threadId: id })
    //   dispatch('createPost', { text, threadId: id })
    // },
    createThread(threadForm) {
      threadForm.id = "ggqq" + Math.random();
      const postsStore = usePostsStore();
      const forumsStore = useForumsStore();
      const authUsersStore = useAuthUsersStore();
      threadForm.userId = authUsersStore.authId;
      threadForm.publishedAt = Math.floor(Date.now() / 1000);
      threadForm.thread = { forumId, title, publishedAt, userId, id };
    },
  },
});
