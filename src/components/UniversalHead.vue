<!-- 最顶部风险提示 -->
<script setup lang="ts">
import {ref} from 'vue'

// 实现父 -> 子 标题更新
// 定义props类型
interface Props {
    title: string
    isMore?: boolean
}

const props = withDefaults(defineProps<Props>(),{
    title: '汇总列表',
    isMore: true
})



</script>

<template>
  <div class="topic-header">
      <div>{{ title }}</div>
      <a href="#" v-if="isMore"><span>更多</span><el-icon><ArrowRight/></el-icon></a>
    </div>
</template>

<style scoped lang="scss">

.topic-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('@/assets//images/btc-icon.webp');
      background-position: -34px 0px;
      background-repeat: no-repeat;
    }
    a {
      font-size: 14px;
      color: #f0b90b;
      display: flex;
      align-items: center;
      span {
        margin-right: 4px;
      }
    }
  }
</style>
