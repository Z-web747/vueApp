import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000
})
console.dir(service);
service.interceptors.request.use(config => {
  console.log('请求拦截', config)
  return config
}, (err) =>{
  return Promise.reject(err)
})

service.interceptors.response.use(response => {
  if(response.status === 200){
    return response.data
  }
}, err =>{
  return Promise.reject(err)
})

export function get(url, params = {}){
  service.get(url,{params})
  return new Promise((resolve, reject) => {
    service.get(url, { params }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post(url, params = {}){
  return new Promise((resolve, reject) => {
    service.post(url,params).then(res => {
      resolve(res)
    }).catch(err =>{
      reject(err.message)
      ElMessage.error(err.message)
    })
  })
}