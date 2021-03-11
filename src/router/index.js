import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import login from "../views/login.vue";

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    // component:login,
    component:() =>
     import("../views/login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
