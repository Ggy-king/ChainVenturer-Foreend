<!-- 快讯卡片 -->

<script setup lang="ts">
const activities = [
  {
    content: 'HackVC合伙人：2025年加密VC或将增加投资，规模甚至可能超过之前高点',
    timestamp: '2分钟前',
  },
  {
    content: '币界网最新行情晚报：OP价格达1.884美元/枚，日内涨幅3.52%',
    timestamp: '6分钟前',
  },
  {
    content: '贝莱德和MicroStrategy比特币持仓总和接近100万枚BTC',
    timestamp: '6分钟前',
  },
  {
    content: 'Cheems推出TikTokCheeseburger挑战赛',
    timestamp: '8分钟前',
  },
  {
    content: '链界探索者最新行情报告：TRX波场价格达0.2631美元/枚，日内涨幅3.54%',
    timestamp: '9分钟前',
  },
  {
    content: '链界探索者最新行情报告：TRX波场价格达0.2623美元/枚，日内涨幅2.02%',
    timestamp: '15分钟前',
  },
  {
    content: 'FlokiDAO投票通过“为FlokiETP提供流动性”提案',
    timestamp: '15分钟前',
  },
  {
    content: 'Tether向Bitfinex转账1亿枚USDT',
    timestamp: '16分钟前',
  },
  {
    content: 'CME美联储观察：美联储明年1月降息25个基点的概率小幅升至10.7%',
    timestamp: '18分钟前',
  },
  {
    content: '埃塞俄比亚电力公司18%的月度销售额来自比特币挖矿',
    timestamp: '20分钟前',
  },
]
</script>

<template>
  
  <div class="news">
    <div class="news-header">
      <div>最新资讯</div>
      <a href="#"><span>更多</span><el-icon><ArrowRight/></el-icon></a>
    </div>


    <div class="news-main">
        <el-timeline style="max-width: 600px">
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
                hollow
                type="primary"
            >
            {{ activity.content }}
        </el-timeline-item>
  </el-timeline>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news {
  width: 320px;
  .news-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('../../assets//images/btc-icon.webp');
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

  .news-main {
    .el-timeline-item {
        font-weight: 600;
    }
    ::v-deep(.el-timeline-item__node--primary) {
        border-color: #000;
    }
  }
  
}
</style>
