<template>
  <div class="container">
    <van-search :v-bind="value" placeholder="请输入CAS号/产品名称" class="search"></van-search>
    <van-tabs :active='currentCategory' class="tabs" @change="changeCategory">
      <!-- <swiper :style="{ height: '520px' }" :current='currentCategory' :indicator-dots='swipeDot' duration="200" @change="swiperTab" class="swiper"> -->
      <van-tab v-for="(category, categoryIndex) in categories" :key='categoryIndex' :title='category' class="category-tab" >
        <!-- <swiper-item> -->
        <div class="category-container">
          
          <div class="sub-category-col">
            <scroll-view scroll-y="true" style="height: 100%;">
            <div v-for="(subCategory, subCategoryIndex) in subCategories[categoryIndex]" :key="subCategoryIndex" class="sub-category-cell">
              {{ subCategory }}
            </div>
            </scroll-view>
          </div>
                    
          <div class="detail-category-col">
            <div v-for="(detailCategory, detailCategoryIndex) in currentDetailCategory" :key="detailCategoryIndex" class="detail-category-cell">
              {{ detailCategory }}
            </div>
          </div>
         
        </div>
        <!-- </swiper-item> -->
      </van-tab>
      <!-- </swiper> -->
    </van-tabs>

    <van-toast id="van-toast" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ["化学品", "建筑", "电子电气", "能源与资源", "家居护理与工业", "生物试剂", "服装工业"],
      subCategories: [["中间体", "石油化学品", "催化剂"], ["建筑1", "建筑2", "建筑3", "建筑4", "建筑5"], ["电子电气1", "电子电气2", "电子电气3", "电子电气4", "电子电气5", "电子电气6", "电子电气7", "电子电气1", "电子电气2", "电子电气3", "电子电气4", "电子电气5", "电子电气6", "电子电气7", "电子电气1", "电子电气2", "电子电气3", "电子电气4", "电子电气5", "电子电气6", "电子电气7"], ["能源与资源1", "能源与资源2", "能源与资源3"], ["家居护理与工业1", "家居护理与工业2"], ["生物试剂1", "生物试剂2", "生物试剂3"], ["服装工业1"]],
      currentItems: [],
      currentDetailCategory: ["胺", "二醇", "多元醇", "酸", "特性产品", "胺", "二醇", "多元醇", "酸", "特性产品"],
      currentCategory: 0,
    }
  },
  methods: {
    getDetailCategory (index, title) {
      // this.$flyio.get("inventory").then((d) => {
      //   console.log(d.data)
      // })
      // this.currentDetailCategory = ["胺", "二醇", "多元醇", "酸", "特性产品", "胺", "二醇", "多元醇", "酸", "特性产品"]
      this.currentCategory = index
    },
    changeCategory (e) {
      this.getDetailCategory(e.mp.detail.index, e.mp.detail.title)
    },
    // swiperTab (e) {
    //   let index = e.mp.detail.current
    //   this.currentCategory = index
    //   this.getDetailCategory(index, this.categories[index])
    // }
  },

  mounted () {
    wx.setNavigationBarTitle({
      title: "产品分类"
    })
  }
}
</script>

<style lang="less">
@import "./category.less";
</style> 