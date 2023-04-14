import { defineStore } from "pinia";
import sourceData from "@/data.json";

export const useCategoriesStore = defineStore("UsersStore", {
  state: () => {
    return {
      threads: sourceData.users,
    };
  },
  getters: {
    postById: (state) => posts.value.find((p) => p.id === state),
    userById: (state) => users.value.find((p) => p.id === state),
  },
  actions: {},
});
