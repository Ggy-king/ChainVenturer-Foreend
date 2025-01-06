<!-- 文章主体 -->
<script setup lang="ts">
import SideHotCart from '@/components/SideHotCart.vue';
import NewsCart from '@/components/NewsCart.vue'
import MarkComment from './MarkComment.vue'
import RelatedReading from './RelatedReading.vue'




</script>

<template>
    <div class="essay">

        <header>
            <div class="title">“大动作即将到来”：加密货币交易员表示，以太坊竞争对手可能会在几周内飙升266%</div>
            <div class="topic">
                <span class="topic-title">探索者 > 快讯 > 区块链</span>
                <span class="topic-timer">&nbsp;&nbsp;·&nbsp;&nbsp;2025-01-05 19:32:20</span>
            </div>
            <div class="summarize">
                <div class="summarize-title">摘要</div>
                <p class="summarize-main">一位备受关注的加密货币分析师表示，智能合约平台Cardano（ADA）可能会在未来几周内获得巨大收益 。</p>
            </div>
        </header>
        
        <main>
            <p>币界网报道：
            一位备受关注的加密货币分析师表示，智能合约平台Cardano(阿达)未来几周可能会出现大幅增长。</p>
           <p> 在新的战略会议上，加密货币交易员阿里·马丁内斯告诉他在社交媒体平台十、上的107500名粉丝表示，如果以太坊(ETH)竞争对手继续遵循上一个周期的模式，可能会飙升266%。</p>

            <p>在联邦公开市场委员会（FOMC）的一系列降息之后，目前的联邦基金利率为4.33%起动2024年9月。
                联邦公开市场委员会计划于1月28日举行下一次利率会议。</p>
        </main>

        <!-- 评论区 -->
        <MarkComment />
        <!-- 相关阅读 -->
        <RelatedReading />

         <!-- 侧边栏 -->
         <div class="side">
            <SideHotCart title="热门文章"/>
            <SideHotCart title="最火币种"/>
            <NewsCart />
        </div>
    </div>
</template>


<style scoped lang="scss">
.essay {
    position: relative;
    width: 820px;

    header {
        .title {
            font-size: 32px;
            font-weight: 600;
        }
        .topic {
            margin: 14px 0;
            &-timer {
                color: #89939e;
            }
        }
        .summarize {
            margin-bottom: 30px;
            padding: 14px;
            border-radius: 10px;
            background-color: #f7f8fa;
            &-title {
                font-size: 18px;
                font-weight: 600;
                color: #4378ff;
                margin-bottom: 10px;
            }
            
        }
    }
    main {
        font-size: 16px;
        margin-bottom: 80px;
        p {
            text-indent: 2em;
            line-height: 30px;
        }
    }




    .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
}

</style>