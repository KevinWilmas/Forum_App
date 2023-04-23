import { defineStore } from "pinia";
import sourceData from "@/data.json";
import { useAuthUsersStore } from "./AuthUsersStore";
export const useUsersStore = defineStore("UsersStore", {
  state: () => {
    return {
      authId: useUsersStore().users,
      users: sourceData.users,
    };
  },
  getters: {},
  actions: {
    updateUser(activeUser) {
      // this.setUser(activeUser, activeUser.id);
      const userIndex = this.users.findIndex(
        (user) => user.id === activeUser.id
      );
      this.users[userIndex] = activeUser;
    },
  },
});
