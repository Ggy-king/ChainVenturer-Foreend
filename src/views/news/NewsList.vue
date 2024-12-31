<!-- 快讯列表 -->

<script setup lang="ts">
import SideHotCart from '@/views/news/SideHotCart.vue';
import ButtonDecoration from '@/views/news/ButtonDecoration.vue';

const format:(n:number) => void = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<template>
    <div class="news">
        <div class="news-head">
            <ButtonDecoration></ButtonDecoration>

            
        </div>

        <div class="news-main">
            <div class="date">123456</div>
            <el-progress
            :percentage="100"
            status="success"
            :indeterminate="true"
            :duration="15"
            stroke-width="12"
            :text-inside="true"

            :format="format"
            >
            <span></span>
            </el-progress>
        </div>


        <div class="side">
            
            <SideHotCart></SideHotCart>
            <SideHotCart></SideHotCart>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news {
    position: relative;
    width: 820px;
    height: 2000px;
    &-head {
        padding:10px 0;
        background-color: #fafafa;
        border-radius: 20px;
       
        
    }
    &-main {
        .el-progress {
            margin-top: 20px;
        }
    }




    .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
    
}
</style>
