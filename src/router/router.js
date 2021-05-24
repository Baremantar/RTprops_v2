import vCart from "../components/v-cart.vue";
import vMain from "../components/v-main.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: vMain,
  },
  {
    path: "/cart",
    name: "cart",
    component: vCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
