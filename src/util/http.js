import axios from 'axios';
import {Toast} from 'antd-mobile';

axios.interceptors.response.use(function (response) {
  if (response.status > 300) {
    Toast.offline('网络错误，请稍后重试');
    // return response;
    return Promise.reject(new Error('网络错误哦'))
  }
  if (response.data.code !== 200) {
    Toast.info(response.data.msg);
    // return response;
  }
  return response;
})