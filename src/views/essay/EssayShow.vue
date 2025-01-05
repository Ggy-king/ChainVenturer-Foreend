<!-- 多数文章跳转页面 -->
<script setup lang="ts">
import SideHotCart from '@/components/SideHotCart.vue';


</script>

<template>
    <div class="essay">

        <header>
            <div class="title">SocialCapitalCEO：稳定币将在2025年成为批发交易的关键工具</div>
            <div class="topic">
                <span class="topic-title">探索者 > 快讯 > 区块链</span>
                <span class="topic-timer">&nbsp;&nbsp;·&nbsp;&nbsp;2025-01-05 19:32:20</span>
            </div>
            <div class="summarize">
                <div class="summarize-title">摘要</div>
                <p class="summarize-main">美联储的一位决策者表示，2025年通胀浪潮的风险比大多数投资者意识到的要高 。</p>
            </div>
        </header>

         <!-- 侧边栏 -->
         <div class="side">
            <SideHotCart />
            <SideHotCart />
        </div>
    </div>
</template>


<style scoped lang="scss">
.essay {
    position: relative;
    width: 820px;
    height: 2000px;

    header {
        .title {
            font-size: 32px;
            font-weight: 600;
        }
        .topic {
            margin: 30px 0;
            &-timer {
                color: #89939e;
            }
        }
        .summarize {
            &-title {
                font-size: 18px;
                color: #4378ff;
            }
            
        }
    }






    .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
}

</style>