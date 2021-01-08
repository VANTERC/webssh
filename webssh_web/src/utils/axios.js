import axios from 'axios';
import { message } from 'ant-design-vue';
import router from '@/router';

const api_url = process.env.VUE_APP_BASE_API;

export function api (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: api_url,
      timeout: 6000,
      headers: {
        token: sessionStorage.getItem('userInfo')
          ? JSON.parse(sessionStorage.getItem('userInfo')).token
          : null
      }
    });
    instance({
      url: options.url,
      method: options.method,
      data:
        options.method === 'post' || options.method === 'POST'
          ? options.data
          : {},
      params:
        options.method === 'get' || options.method === 'GET'
          ? options.data
          : {},
      responseType: options.responseType ? options.responseType : 'json',
      headers: options.headers
        ? options.headers
        : {
            'Content-Type': 'application/json;charset=UTF-8'
          }
    })
      .then(response => {
        const res = response.data;
        if (res.code && res.code !== '200') {
          if (res.code == '401') {
            message.error('身份已失效，请重新登录', 5);
            router.push('/login');
          } else if (res.code == '500') {
            message.error('系统繁忙,请稍后再试', 5);
          } else {
            message.error(res.msg, 2);
          }
          reject(res);
          return;
        }
        resolve(res);
      })
      .catch(error => {
        if (error.response != null) {
          switch (error.response.status) {
            case 401:
              message.error('您的登录信息已过期，请重新登录', 2);
              sessionStorage.clear();
              router.push('/login');
              break;
            case 403:
              message.error('服务器拒绝请求', 2);
              break;
            case 408:
              message.error('连接超时，请稍后重试...', 2);
              break;
            case 415:
              message.error('请求类型有误', 2);
              break;
            case 500:
              message.error('连接超时，请稍后重试...', 2);
              break;
            case 502:
              message.error('连接超时，请稍后重试...', 2);
              break;
            case 503:
              message.error('连接超时，请稍后重试...', 2);
              break;
            case 504:
              message.error('连接超时，请稍后重试...', 2);
              break;
            default:
              message.error('发生异常错误,请刷新页面重试,或联系管理员', 2);
              break;
          }
        } else {
          message.error('当前网络不可用，请检查您的网络', 2);
        }
        reject(error);
      });
  });
}
