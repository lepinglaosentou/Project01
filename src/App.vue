<template>
  <div id="app">
    <el-container>
      <el-header>
        <h2>Project 01</h2>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  height: 100%;
}
#app .el-breadcrumb {
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  padding-left: 10px;
}

.el-header {
  border-bottom: 1px solid #ccc;
  line-height: 60px;
}
</style>
