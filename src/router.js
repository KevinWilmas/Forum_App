import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/HomeShow.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import ForumShow from "@/pages/ForumShow.vue";
import CategoryShow from "@/pages/CategoryShow.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomeShow.vue"),
  },
  {
    path: "/category/:id",
    name: "Category",
    component: CategoryShow,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: ForumShow,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
