import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: Home,
   },
   {
      path: "/posts/:id",
      name: "details",
      component: Details,
      props: true,
   },
   {
      path: "/create",
      name: "create",
      component: Create,
      props: true,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
