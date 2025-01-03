<script setup lang="ts">
import LabelBrowse from './LabelBrowse.vue'

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
  return res.data.data
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

  
</template>

<style scoped lang="scss">

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

</style>
