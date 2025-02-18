<script setup lang="ts">
import cart1 from '@/assets/images/total-cart-1.jpg'
import cart3 from '@/assets/images/total-cart-3.jpg'
import cart5 from '@/assets/images/total-cart-5.jpg'
import cart6 from '@/assets/images/total-cart-6.jpg'



// 第二种写法

const props = withDefaults(defineProps<{
    essaysList?: never[],
    topicsList?: never[],
    coinsList?: never[],
    newsList?: never[],

}>(),{})


const load = () => {
  // count.value += 2
}



const essaysList = props.essaysList ? [] : [
    {
        id: 1,
        img: cart1,
        title: '印度经济正在崩溃，这可能会让整个世界都崩溃',
        introduce: '探索者汇报： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师探索者汇报： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师探索者汇报： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师探索者汇报： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师',
        theme: '区块链',
        type: '文章',
        date: '2024-12-26 20:45'

    },
    {
        id: 3,
        img: cart3,
        title: '加密货币交易所代币克服了数字资产市场的低迷，在新的合并公告中飙升了近30%',
        introduce: '探索者汇报： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在探索者汇报： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在探索者汇报： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在探索者汇报： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在探索者汇报： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在',
        theme: 'Web3',
        type: '文章',
        date: '2024-12-26 20:45'
    }
]
    
const topicsList =  props.topicsList ? [] : [
    {
        id: 11,
        img: cart6,
        title: '新Memecoin支持脑癌症研究-最新加密货币新闻',
        introduce: '探索者汇报： 一位父亲希望为女儿罕见的脑癌症研究筹集资金，于是出现了一种新的模因币Pu',
        theme: '科技',
        type: '专题',
        date: '2024-12-26 20:45'
    },
    {
        id: 10,
        img: cart3,
        title: 'Chainlink价格预测：1月份LINK Eyes跃升至34美元',
        introduce: '探索者汇报： 根据最新的价格预测，Chainlink（LINK）正在为1月份的新一轮飙升做准备，以从目',
        theme: 'BTC',
        type: '专题',
        date: '2024-12-26 20:45'
    }
]

const coinsList = props.coinsList ? [] : [
    {
        id: 7,
        img: cart5,
        title: '韩国人面临更高的比特币成本-最新加密货币新闻',
        introduce: '探索者汇报： 最近的数据显示，韩国人为比特币支付的价格比美国买家高出约3%，主要是为了对冲',
        theme: '精彩再现',
        type: '币种',
        date: '2024-12-26 20:45'

    },
    {
        id: 8,
        img: cart5,
        title: '韩国人面临更高的比特币成本-最新加密货币新闻',
        introduce: '探索者汇报： 最近的数据显示，韩国人为比特币支付的价格比美国买家高出约3%，主要是为了对冲',
        theme: '精彩再现',
        type: '币种',
        date: '2024-12-26 20:45'

    }
]


const newsList = props.newsList ? [] :  [
{
    id: 5,
    title: '摩根大通、美国银行、花旗集团和富国银行在创纪录的利润份额中巩固了对银行业的权力：报告',
    introduce: '探索者汇报： 在经历了爆炸性的增长后，美国最大的银行即将锁定近十年来银行业利润的最大份即将锁定近十年来银行业利润的最大份即将锁定近十年来银行业利润的最大份',
    theme: '政事',
    type: '快讯',

    date: '2024-12-26 20:45'

  },
  {
    id: 6,
    title: '摩根大通、美国银行、花旗集团和富国银行在创纪录的利润份额中巩固了对银行业的权力：报告',
    introduce: '探索者汇报： 在经历了爆炸性的增长后，美国最大的银行即将锁定近十年来银行业利润的最大份',
    theme: '政事',
    type: '快讯',

    date: '2024-12-26 20:45'

  }
]


</script>

<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <h2 v-if="essaysList.length">文章</h2>
        <!-- 文章 -->
        <li v-for="i in essaysList" :key="i.id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.img" alt="">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.introduce }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.date }}</span>
                </div>
              </div>
            </div>
        </li>

        <!-- 专题 -->
        <h2 v-if="topicsList.length">专题</h2>
        <li v-for="i in topicsList" :key="i.id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.img" alt="">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.introduce }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.date }}</span>
                </div>
              </div>
            </div>
        </li>

        <!-- 币种 -->
        <h2 v-if="coinsList.length">币种</h2>
        <li v-for="i in coinsList" :key="i.id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.img" alt="">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.introduce }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.date }}</span>
                </div>
              </div>
            </div>
        </li>

        <!-- 快讯 -->
        <h2 v-if="newsList.length">快讯</h2>
        <li v-for="i in newsList" :key="i.id" class="infinite-list-item">
            <div class="info-cart" style="justify-content: space-between;">
              <div class="info-cart-content" style="margin: 0 10px;">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis" style="width: 800px;">{{ i.introduce }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.date }}</span>
                </div>
              </div>
            </div>
        </li>

        
    </ul>
</template>

<style scoped lang="scss">
.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;

  h2 {
    margin-top: 40px;
    margin-bottom: 10px;
  }

}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;

}

.info-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #bac3ce;


  img {
    width: 200px;
    height: 130px;
    margin-right: 14px;
  }

  .info-cart-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    width: 586px;
    .title {
      font-size: 18px;
      font-weight: 600;
    }
    .introduce {
      height: 40px;
      margin: 5px 0;
      color: #59636D;
      overflow: hidden;
    }
    .foot {
      color: #89939E;
      &-left b {
        text-decoration: underline;
        color: #e96868;
      }
      &-right {
        float: right;
        .el-icon {
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
  }
}

</style>
