/**
 * Created by haojun on 2018/5/31.
 */
import axios from 'axios';
import qs from 'qs';
import *as g from '../jslib/global';
import router from '../router';
import web_config from '../jslib/config/config';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? web_config.devServer : web_config.server;
axios.defaults.timeout = 20000;

//添加一个请求拦截器
axios.interceptors.request.use(config=>
{
  if (config.method === 'post')
  {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error=>
{
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response)
{
  if (response.data && response.data.code)
  {
    if (parseInt(response.data.code) === 4005)
    {//未登录

      //更新sessionStorage登录状态(登出)
      g.utils.setSessionData('isLogin', false);

      router.push({
        path: '/login',
        query: {
          redirect: router.history.current.fullPath
        }
      })
    }
    if (parseInt(response.data.code) !== 2000)
    {//接口异常
      return Promise.reject(response.data)
    }
  }
  return response;
}, function (error)
{
  // Do something with response error
  console.log('网络异常');
  return Promise.reject(error);
});

//通用方法

export const POST = (url, params) =>
{
  return axios.post(url, params).then(res => res.data)
}

export const GET = (url, params) =>
{
  return axios.get(url, {params: params}).then(res => res.data)
}

