import { createRouter, createWebHistory } from "vue-router";
import index from "../views/users/index.vue";
import detPresentation from "../views/users/details-presentation.vue";
import details from "../views/users/details.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },
    {
      path: "/",
      name: "details",
      component: details,
    },
    {
      path: "/",
      name: "details-presentation",
      component: detPresentation,
    },
  ],
});

export default router;