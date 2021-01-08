import BasicLayout from 'components/BasicLayout/BasicLayout.vue';

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
};

const routerMap = [
  {
    path: '/',
    redirect: '/index',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/webssh/:id',
    name: 'webssh',
    component: () => import('views/hostManage/fullScreenExec.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: BasicLayout,
    redirect: '/index/home',
    meta: { title: '首页' },
    children: [
      {
        path: '/index/home',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'smile',
          keepAlive: true
        },
        component: () => import('views/Home.vue')
      },
      {
        path: '/hostmanage',
        name: 'hostManage',
        redirect: '/hostmanage/list',
        meta: {
          title: '主机管理',
          icon: 'database',
          keepAlive: true
        },
        component: RouteView,
        children: [
          {
            path: '/hostmanage/list',
            name: 'hostList',
            meta: {
              title: '主机列表',
              icon: 'code',
              keepAlive: true
            },
            component: () => import('views/hostManage/hostList.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('views/404.vue')
  }
];
export { routerMap };
