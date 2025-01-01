<script setup lang="ts">
import MoCart from './MoCart.vue'

defineOptions({
    name: 'ToolView'
})


</script>

<template>
  <div class="tool">
    <!-- 头部图片 -->
    <header>
        <img src="./tool-2.png" alt="">
    </header>

    <!-- 主体工具显示 -->
    <div class="tool-title"><span>高级计算</span></div>
    <MoCart></MoCart>

    <div class="tool-title"><span>高级计算</span></div>
    <MoCart></MoCart>

    <div class="tool-title"><span>高级计算</span></div>
    <MoCart></MoCart>
  </div>
</template>

<style scoped lang="scss">
    .tool {
        margin-bottom: 40px;

        header {
            height: 200px;
            background-color: darkcyan;
            overflow: hidden;
            img {
                width: 100%;
            }
        }

        &-title {
            margin: 40px 0 20px;
            font-size: 20px;
            font-weight: 600;
            span {
                border-bottom: 4px solid #f7d049;
            }
        }
    }
</style>
