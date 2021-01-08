import { api } from 'utils/axios';

export function login (data) {
  return api({
    url: '/api/login',
    method: 'post',
    data: data
  });
}

export function updateUserInfo (data) {
  return api({
    url: '/api/updateUserInfo',
    method: 'post',
    data: data
  });
}
