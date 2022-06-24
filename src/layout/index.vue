<template>
  <div class="layout-container">
    <Nav/>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Nav from './component/Nav.vue'
export default {
  components: {
    Nav
  },
  setup(){
    
  }
}
</script>
<style lang="scss" scoped>
.layout-container{
  display: flex;
  width: 100%;
  .el-container{
    flex: 1;
  }
}
</style>