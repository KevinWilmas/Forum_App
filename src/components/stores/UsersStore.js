import { defineStore } from "pinia";
import sourceData from "@/data.json";
// import { findById } from "@/helpers";

export const useUsersStore = defineStore("UsersStore", {
  state: () => {
    return {
      users: sourceData.users,
      authId: "rpbB8C6ifrYmNDufMERWfQUoa202",
    };
  },
  getters: {
    authUser: (state) => state.users.find((user) => user.id === state.authId),
  },
  actions: {},
});
