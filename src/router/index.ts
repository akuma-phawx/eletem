import { createRouter, createWebHistory } from "vue-router";
import Timeline from "../views/Timeline.vue";
import Home from "../views/Home.vue";
import HappyNewYear from "../components/HappyNewYear.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/timeline", component: Timeline },
  { path: "/happy-new-year", component: HappyNewYear },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
