<template>
  <el-aside width="200px">
    <el-menu
      background-color="#545c64"
      unique-opened
      text-color="#fff"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/home">首页相关</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<style lang="scss" scoped>
.el-aside{
  width: 200px;
  height: 100vh;
  overflow: hidden;
  background: #545c64;
}
</style>