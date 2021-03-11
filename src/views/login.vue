<template>
  <div id="login">
      这里是登录页
      <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
  </div>
  
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
//   components: {
//     HelloWorld
//   }
};
</script>
<style lang="scss" scoped> //没加全局有效，对其它有影响
    #login{
        color:red;
        height:100vh;
        background-color: #344a5f;
    }
</style>
