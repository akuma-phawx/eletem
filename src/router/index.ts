import { createRouter, createWebHistory } from "vue-router";
import Timeline from "../views/Timeline.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/timeline", component: Timeline },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
