import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Index.vue"),
        meta:{
          requiresAuth: false
        }
      },

    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPanel.vue"),
    meta:{
      requiresAuth: false
    }
  },
  {
    path: "/dashboard",
    name: "Admin",
    component: () => import("../views/Dashboard.vue"),
    meta:{
      requiresAuth: false
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
