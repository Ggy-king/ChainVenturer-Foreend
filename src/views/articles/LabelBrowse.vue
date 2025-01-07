<!-- 标签式浏览内容页面 -->

<script setup lang="ts">
import ArticleList from '@/components/ArticleList.vue'



</script>

<template>

    <header>
        <strong>文章总汇</strong>
        <i>2025-1-12</i>
    </header>
    
    <!-- 文章列表 -->
    <ArticleList />

</template>

<style scoped lang="scss">
header {
    width: 820px;
    border-bottom: 2px solid #f7d049;
    padding: 10px;
    strong {
        font-size: 18px;
    }
    i {
        float: right;
        color: #59636D;
    }
}





</style>
