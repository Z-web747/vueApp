import router from './route'
import Cookies from 'js-cookie'
router.beforeEach((to,form,next) => {
  if(to.name !== 'login' && !Cookies.get('token')){
    next('/login')
  }else{
    next()
  }
})
export default router