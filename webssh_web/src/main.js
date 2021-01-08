import Vue from 'vue';
import App from './App.vue';
import router from 'router';
import store from 'store';
import Antd from 'ant-design-vue';
import { message } from 'ant-design-vue';
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout';
import 'ant-design-vue/dist/antd.less';
import Comps from '@/components/index';
import Api from 'utils/api';
import NProgress from 'nprogress'; // 加载进度条
import 'nprogress/nprogress.css';
console.log(process.env.NODE_ENV);
Vue.use(Antd);
Vue.use(Api);
Vue.use(Comps);
Vue.prototype.$message = message;

Vue.config.productionTip = false;

NProgress.configure({ showSpinner: false }); // 进度条配置

Vue.component('pro-layout', ProLayout);
Vue.component('page-header-wrapper', PageHeaderWrapper);

const whiteList = ['login']; // 白名单
const loginRoutePath = '/login';
const defaultRoutePath = '/index';

router.beforeEach((to, from, next) => {
  NProgress.start();
  /* 是否存在Token */
  const token = sessionStorage.userInfo
    ? JSON.parse(sessionStorage.userInfo).token
    : null;
  if (token) {
    store.commit('SET_USERINFO', JSON.parse(sessionStorage.userInfo));
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      if (to.name) {
        next();
      } else {
        next({ path: '/404' });
      }
    }
  } else {
    if (to.name) {
      if (whiteList.includes(to.name)) {
        // 在免登录白名单，直接进入
        next();
      } else {
        next({ path: loginRoutePath });
        NProgress.done();
      }
    } else {
      next({ path: loginRoutePath });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

Vue.config.silent = process.env.NODE_ENV == 'production' ? true : false; // 取消 Vue 所有的日志与警告。

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
