<template>
  <div class="login">
    <div class="login-form">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormrules"
      >
        <el-form-item
          prop="username"
        >
          <el-input style="width: 350px" v-model.trim="loginForm.username" >
          <template #prefix>
             <el-icon><User /></el-icon>
          </template>
          </el-input>
        </el-form-item>
        <el-form-item
          prop="password"
        >
          <el-input type="password" style="width: 350px" v-model.trim="loginForm.password">
          <template v-slot:prefix>
            <el-icon><Lock /></el-icon>
          </template>
          </el-input>
        </el-form-item>
        <el-button style="width: 350px" type="primary" @click="toLogin(loginFormRef)">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api'
import { cookies } from '@/utils/cookie'
export default{
  setup(){
    const loginFormRef = ref(null)
    const loginFormrules = {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    const router = useRouter()
    const state = reactive({
      loginForm: {
        username: '',
        password: ''
      },
      
    })
    const toLogin = (loginFormRef) => {
      loginFormRef.validate( async valid => {
        if(valid){
          const res = await login(state.loginForm)
          console.log(res);
          if(res.code === '0000'){
            // console.log('success');
            // cookies.set('token', res.data.token)
            router.push('/')
          }
        }
      })
    }
    return {
      ...toRefs(state),
      loginFormRef,
      loginFormrules,
      toLogin
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .login-form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>