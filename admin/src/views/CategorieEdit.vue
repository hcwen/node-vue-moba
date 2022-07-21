<template>
  <div class="about">
    <h1>新建分类</h1>
    <!-- @submit.native.prevent ,native表示原生表单，prevent表示阻止默认提交不要跳转页面。-->
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
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
      model: {},
    };
  },
  methods: {
    async save() {
      const res = await this.$http.post("categories", this.model);
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
      console.log(res);
      console.log(this.model);
    },
  },
};
</script>

<style>
</style>