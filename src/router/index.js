import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Index from '../page/index';
import FrontIndex from '../page/frontIndex';
import Book from '../page/book';
import Ebook from '../page/ebook';
import Shop from '../page/shop';
import RankList from '../page/rankList';

import Login from '../page/login';
import Register from '../page/register';
import Test from '../page/test';


Vue.use(ElementUI);
Vue.use(Router);

let router = new Router({
  linkActiveClass:"router-link-active",
  routes: [{
      path: "/",
      name: 'Index',
      component: Index,
      redirect: "/index",
      children: [
        {
          path: "index",
          name: 'FrontIndex',
          component: FrontIndex
        },{
          path: "book",
          name: 'Book',
          component: Book
        },{
          path: "ebook",
          name: 'Ebook',
          component: Ebook,
          children: [
           
          ]
        },{
          path: "shop",
          name: 'Shop',
          component: Shop
        }, {
          path: "/ebook/ranklist",
          name: 'RankList',
          component: RankList
        }
      ]
    },{
      path: "/test",
      name: 'Test',
      component: Test
    },{
      path: "/login",
      name: "Login",
      component: Login
    },{
      path: "/register",
      name: "Register",
      component: Register
    }
    ,{
      path: '*',
      redirect: '/'
    }
  ]
});


export default router;
