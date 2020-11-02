import Vue from "vue"
import VueRouter from "vue-router"
import Yijian from "../views/yijian/yijian.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Yijian",
    component: Yijian
  },
  {
    path: "/yiqun",
    name: "Yiqun",
    component: function() {
      return import( "../views/yiqun/yiqun.vue")
    }
  },
  {
    path: "/yiqun",
    name: "Yiqun",
    component: function() {
      return import("../views/yimei/yimei.vue")
    }
  },
  {
    path: "/yiqun",
    name: "Yiqun",
    component: function() {
      return import("../views/yiwo/yiwo.vue")
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
