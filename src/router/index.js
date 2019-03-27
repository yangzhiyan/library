import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Index from '../page/index';
import FrontIndex from '../page/frontIndex';
import Test from '../page/test';

Vue.use(ElementUI);
Vue.use(Router);

let router = new Router({
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
        }
      ]
    },{
      path: "/test",
      name: 'Test',
      component: Test
    },{
      path: '*',
      redirect: '/'
    }
  ]
});


export default router;
