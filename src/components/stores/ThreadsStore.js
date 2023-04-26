import { defineStore } from "pinia";
import sourceData from "@/data.json";

import { usePostsStore } from "./PostsStore";
import { useAuthUsersStore } from "./AuthUsersStore";
import { useForumsStore } from "./ForumsStore";
import { useUsersStore } from "./UsersStore";

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
    createThread({ text, title, forumId }) {
      const id = "ggqq" + Math.random();
      const userId = useAuthUsersStore().authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread = { forumId, title, publishedAt, userId, id, posts: [] };

      // add thread to threads
      this.threads.push(thread);

      // add thread to the user
      const usersStore = useUsersStore();
      const user = usersStore.users.find((user) => user.id === userId);
      user.threads = user.threads || [];
      user.threads.push(id);

      // add thread to the forum
      const forums = useForumsStore();
      forums.threads = forums.threads || [];
      forums.threads.push(id);

      // create the post
      const { createPost } = usePostsStore();
      createPost({ text, threadId: id });
    },
  },
});
