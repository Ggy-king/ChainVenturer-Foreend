<script setup lang="ts">
import SimpleBrowse from '@/components/SimpleBrowse.vue'
import PersonalityView from './PersonalityView.vue'
import TopicCart from './TopicCart.vue'
import TabMain from './TabMain.vue'
import NavigatorCart from './NavigatorCart.vue'
import NewsCart from '@/components/NewsCart.vue'
import CarouselView from './CarouselView.vue'



</script>

<template>

  <!-- 个性渲染 -->
  <PersonalityView></PersonalityView>


  <!-- 简约浏览行情 -->
  <SimpleBrowse></SimpleBrowse>

  


  <div class="main-show">
    <div>
      <!-- 轮播图 -->
      <CarouselView></CarouselView>
      <!-- 标签页 主体内容 -->
      <TabMain></TabMain>
    </div>


    <!-- 侧边栏展示 -->
    <div class="aside-show">
      <!-- 热议专题 -->
      <TopicCart></TopicCart>

      <!-- 推荐去处 -->
      <NavigatorCart style="margin-top: 40px;"></NavigatorCart>

      <!-- 快讯时间线展示 -->
      <NewsCart style="margin-top: 40px;"></NewsCart>
    </div>
  </div>
  

 
</template>

<style scoped lang="scss">



.personality{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: pink;
}


.main-show {
  display: flex;
  justify-content: space-between;
  
  .aside-show {
    width: 320px;
    margin-top: 20px;
  }
  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
}

</style>
