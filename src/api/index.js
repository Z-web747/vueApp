import {get, post} from './http'
export function login(params){
  return post('/login',params)
}
