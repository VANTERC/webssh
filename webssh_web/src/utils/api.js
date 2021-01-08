/**
 * @file api挂载到全局
 * @author VANTERC
 * @description 用this.$api.xxx.xxx可调用接口
 */
import * as api from '@/api';

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$api', {
    value: api
  });
};

export default {
  install
};
