import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/dasboard",
    component: () => import("@/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "/dasboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/post-a-job",
        name: "JobPost",
        component: () => import("@/views/JobPost.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/views/Logout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "current",
  routes,
});

export default router;
