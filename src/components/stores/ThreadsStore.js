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
    //  mutations: {
    //   setThread (state, { thread }) {
    //     state.threads.push(thread)
    //     const index = state.threads.findIndex(t => t.id === thread.id)
    //     if (thread.id && index !== -1) {
    //       state.threads[index] = thread
    //     } else {
    //       state.threads.push(thread)
    //     }
    //   },
    //   appendThreadToUser (state, { userId, threadId }) {
    //     const user = state.users.find(user => user.id === userId)
    //     user.threads = user.threads || []
    //     user.threads.push(threadId)
    //   }
    //   appendThreadToForum (state, { forumId, threadId }) {
    //     const forum = state.forums.find(forum => forum.id === forumId)
    //     forum.threads = forum.threads || []
    //     forum.threads.push(threadId)
    //   },

    async createThread({ text, title, forumId }) {
      const id = "ggqq" + Math.random();
      const userId = useAuthUsersStore().authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread = { forumId, title, publishedAt, userId, id, posts: [] };

      // (SET THREAD) add thread to threads
      const threadIndex = this.threads.findIndex((t) => t.id === thread.id);
      if (thread.id && threadIndex !== -1) {
        this.threads[threadIndex] = thread;
      } else {
        this.threads.push(thread);
      }

      // (APPEND THREAD TO USER) add thread to the user
      const usersStore = useUsersStore();
      const user = usersStore.users.find((user) => user.id === userId);
      user.threads = user.threads || [];
      user.threads.push(id);

      // (APPEND THREAD TO FORUM) add thread to the forum
      const forums = useForumsStore();
      forums.threads = forums.threads || [];
      forums.threads.push(id);

      // (DISPATCH CREATE POST) create the post
      const { createPost } = usePostsStore();
      createPost({ text, threadId: id });
      return this.threads.find((thread) => thread.id === id);
    },

    async updateThread({ title, text, id }) {
      const thread = this.threads.find((thread) => thread.id === id);
      const postsStore = usePostsStore();
      const post = postsStore.find((post) => post.id === thread.posts[0]);
      const newThread = { ...thread, title };
      const newPost = { ...post, text };

      // SET POST
      const postsIndex = postsStore.findIndex((p) => p.id === post.id);
      if (post.id && postsIndex !== -1) {
        postsStore[postsIndex] = post;
      } else {
        postsStore.push(post);
      }

      // SET THREAD
      const threadIndex = this.threads.findIndex((t) => t.id === thread.id);
      if (thread.id && threadIndex !== -1) {
        this.threads[threadIndex] = thread;
      } else {
        this.threads.push(thread);
      }

      return newThread;
    },
  },
});
