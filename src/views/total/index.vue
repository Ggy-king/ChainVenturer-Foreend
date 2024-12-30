<script setup lang="ts">
import TopicCart from '@/views/total/TopicCart.vue'
import LabelBrowse from '@/views/total/LabelBrowse.vue'
import NavigatorCart from '@/views/total/NavigatorCart.vue'
import NewsCart from '@/views/total/NewsCart.vue'

import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'
import type { Ref } from 'vue'

import {getTabsDate,postTabsDate} from '@/api/total.js'


defineOptions({
    name: 'TotalView'
})

/**
 * tabs栏切换
 * - 获取数据
 * - 实现切换
 */

interface List {
  list: string
}

const getTabsList:() => Promise<List> = async() => {
  const res = await getTabsDate()
  console.log(res.data);
  return res.data
}

const postTabsList:() => Promise<List> = async() => {
  
  const res = await postTabsDate()
  return res.data
}


const index: Ref<number> = ref(0)

const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  getTabsList()
  postTabsList()
  // console.log(tab, event)
  
  index.value = Number(tab.index)
}


</script>

<template>
  <!-- 简约浏览行情 -->
  <simple-browse></simple-browse>

  <!-- 轮播图 -->
  <div class="block text-center">
    <el-carousel height="400px" :motion-blur="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="main-show">
       <!-- 标签页 主体内容 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="最新" name="first" >
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>

      <el-tab-pane label="Web3" name="second" :lazy="true">
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>

      <el-tab-pane label="政事" name="third" :lazy="true">
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>

      <el-tab-pane label="精彩再现" name="fourth" :lazy="true">
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>

      <el-tab-pane label="BTC" name="fifth" :lazy="true">
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>

      <el-tab-pane label="科技" name="sixth" :lazy="true">
        <LabelBrowse :listIndex='index'></LabelBrowse>
      </el-tab-pane>
    </el-tabs>

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
.el-carousel {
  margin-bottom: 14px;

  .el-carousel__arrow {  
    color: pink;
  }


  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item {
    background-repeat: no-repeat;

  }
  .el-carousel__item:nth-child(1) {
    background-image: url('@/assets/images/total-rotate-app.webp');
    background-size: 100% 100%;

  }
  .el-carousel__item:nth-child(2) {
    background-image: url('@/assets/images/total-rotate-2.jpg');
    background-size: 100% 100%;

  }
  .el-carousel__item:nth-child(3) {
    background-image: url('@/assets/images/total-rotate-3.jpg');
    background-size: cover;
    background-position: 50%;

  }
  .el-carousel__item:nth-child(4) {
    background-image: url('@/assets/images/total-rotate-4.jpg');
    background-size: cover;
    background-position: 50%;

  }
  
}



.main-show {
  display: flex;
  justify-content: space-between;
  
  
  .el-tabs {
    width: 820px;
    :deep(.el-tabs__item) {
      font-size: 16px;
      font-weight: 600;
      color: #4e5662;
      &:hover {
        color: #000;
      }
    }
    :deep(.el-tabs__active-bar){
      background-color: #f7d049;
    }
    :deep(.is-active) {
      color: #000;
    }

    :deep(.el-tabs__content) {
      height: 2000px;
    }

  }

  .aside-show {
    width: 320px;
    margin-top: 20px;
  }
  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
}

</style>
