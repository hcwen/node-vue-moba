<template>
  <div class="about">
    <h1>新建分类</h1>
    <!-- @submit.native.prevent ,native表示原生表单，prevent表示阻止默认提交不要跳转页面。-->
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "",
    };
  },
  methods: {
    save() {
      // this.$http.post()
    },
  },
};
</script>

<style>
</style>