import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    }

  ]
});
