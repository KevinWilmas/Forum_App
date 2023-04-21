import { defineStore } from "pinia";
import sourceData from "@/data.json";
export const useUsersStore = defineStore("UsersStore", {
  state: () => {
    return { users: sourceData.users };
  },
  getters: {},
  actions: {},
});
