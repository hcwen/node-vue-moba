<template>
  <div class="about">
    <el-main>
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
        <el-table-column
          prop="name"
          label="分类名称"
          width="1900"
        ></el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
      console.log(res.data);
    },
  },
  created() {
    this.fetch();
  },
};
</script>
