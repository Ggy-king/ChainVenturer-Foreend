<script setup lang="ts">
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import NavCart from './NavCart.vue'
import AnchorPoint from './AnchorPoint.vue'

defineOptions({
    name: 'NavigatorView'
})


</script>

<template>
  
  <div style="position: relative;">
    <!-- 个性语录 -->
    <PersonalizedStatement />

    <!-- 导航卡片 -->

    <!-- 热门 -->
    <span id="one"></span>
    <NavCart></NavCart>

    <!-- 总览数据 -->
    <span id="two"></span>
    <NavCart></NavCart>

    <!-- 非同质化代币 -->
    <span id="three"></span>
    <NavCart></NavCart>

    <!-- 去中心化 -->
    <span id="four"></span>
    <NavCart></NavCart>

    <!-- 跨链桥 -->
    <span id="five"></span>
    <NavCart></NavCart>

    <!-- 学习 -->
    <span id="six"></span>
    <NavCart></NavCart>

    <!-- 行情数据 -->
    <span id="seven"></span>
    <NavCart></NavCart>

    <!-- 锚点链接 -->
    <AnchorPoint />
  </div>
</template>

<style scoped lang="scss">

</style>
