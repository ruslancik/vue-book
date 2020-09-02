import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Error.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/bookshelf",
    name: "BookShelf",
    
    component: () =>
      import(/* webpackChunkName: "bookshelf" */ "../views/BookShelf.vue")
  
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/book/:id",
    name: "book-detail",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../components/BookDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
