import { defineStore } from "pinia";
import sourceData from "@/data.json";

export const useCategoriesStore = defineStore("UsersStore", {
  state: () => {
    return {
      threads: sourceData.users,
    };
  },
  getters: {},
  actions: {},
});
