import { defineStore } from "pinia";
import sourceData from "@/data.json";

export const useCategoriesStore = defineStore("ThreadsStore", {
  state: () => {
    return {
      threads: sourceData.threads,
    };
  },
  getters: {},
  actions: {},
});
