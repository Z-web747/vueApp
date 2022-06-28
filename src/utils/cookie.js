import Cookies from 'js-cookie'
export const cookies = {
  get(name){
    return Cookies.get(name)
  },
  set(name, value){
    Cookies.set(name,value, { expires: 7, path: '/'});
  },
  remove(name){
    return Cookies.set(name, {path: '/'});
  }
}
