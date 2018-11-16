<template>
  <div class="container">
    <van-search :v-bind="value" placeholder="请输入CAS号/产品名称" class="search"></van-search>
    <van-tabs :active='currentCategory' class="tabs" @change="changeCategory">
      <van-tab v-for="(category, categoryIndex) in categories" :key='categoryIndex' :title='category' class="category-tab" >
      </van-tab>
    </van-tabs>

    <van-toast id="van-toast" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ["化学品", "建筑", "电子电气", "能源与资源", "家居护理与工业", "生物试剂", "服装工业"],
      subCategories: [["化学品1", "化学品2", "化学品3"], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
      currentItems: [],
      currentCategory: 0,
    }
  },
  methods: {
    testClick () {
      this.$flyio.get("inventory").then((d) => {
        console.log(d.data)
      })
    },
    changeCategory (e) {
      this.getProducts(e.mp.detail.index, e.mp.detail.title)
    },
  },

  created () {

  }
}
</script>

<style lang="less">
@import "./index.less";
</style> 