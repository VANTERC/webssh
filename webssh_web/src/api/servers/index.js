import { api } from 'utils/axios';

export function SSHVerify (data) {
  return api({
    url: '/api/ssh_service/sshverification',
    method: 'post',
    data: data
  });
}

export function createHost (data) {
  return api({
    url: '/api/host_service/createHost',
    method: 'post',
    data: data
  });
}

export function getHostInfoById (data) {
  return api({
    url: '/api/host_service/getHostInfoById',
    method: 'post',
    data: data
  });
}

export function getHostList (data) {
  return api({
    url: '/api/host_service/getHostList',
    method: 'post',
    data: data
  });
}

export function deleteHost (data) {
  return api({
    url: '/api/host_service/deleteHost',
    method: 'post',
    data: data
  });
}

export function updateHost (data) {
  return api({
    url: '/api/host_service/updateHost',
    method: 'post',
    data: data
  });
}

export function readHostFiles (data) {
  return api({
    url: '/api/host_service/files/readFiles',
    method: 'post',
    data: data
  });
}

export function downloadHostFile (data) {
  return api({
    url: '/api/host_service/files/downloadFile',
    method: 'post',
    data: data,
    responseType: 'blob'
  });
}

export function deleteHostFile (data) {
  return api({
    url: '/api/host_service/files/deleteFile',
    method: 'post',
    data: data,
  });
}

export function createHostDir (data) {
  return api({
    url: '/api/host_service/files/createDir',
    method: 'post',
    data: data,
  });
}

export function deleteHostDir (data) {
  return api({
    url: '/api/host_service/files/deleteDir',
    method: 'post',
    data: data,
  });
}

export function renameFileOrDir (data) {
  return api({
    url: '/api/host_service/files/renameFileOrDir',
    method: 'post',
    data: data,
  });
}
