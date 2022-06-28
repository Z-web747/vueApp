import router from './route'
router.beforeEach((to,form,next) => {
  if(to.name !== 'login' && !localStorage.token){
    next('/login')
  }
  next()
})
export default router