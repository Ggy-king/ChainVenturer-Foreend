<!-- 文章列表 -->

<script setup lang="ts">
import { ref } from 'vue'


// 一种写法 定义props
// interface Props {
//   listIndex: number
// }
// const props = defineProps<Props>()

// 第二种写法
const props = withDefaults(defineProps<{
  listIndex: number
}>(),{
  listIndex: 0
})


const count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const load = () => {
  // count.value += 2
}

interface List {
  list: string
}


const list = [
  
  {
    id: 5,
    img: 'src/assets/images/total-cart-3.jpg',
    title: '摩根大通、美国银行、花旗集团和富国银行在创纪录的利润份额中巩固了对银行业的权力：报告',
    introduce: '币界网报道： 在经历了爆炸性的增长后，美国最大的银行即将锁定近十年来银行业利润的最大份',
    theme: '政事',
    date: '2024-12-26 20:45'

  },
  {
    id: 6,
    img: 'src/assets/images/total-cart-3.jpg',
    title: '摩根大通、美国银行、花旗集团和富国银行在创纪录的利润份额中巩固了对银行业的权力：报告',
    introduce: '币界网报道： 在经历了爆炸性的增长后，美国最大的银行即将锁定近十年来银行业利润的最大份',
    theme: '政事',
    date: '2024-12-26 20:45'

  },
  {
    id: 7,
    img: 'src/assets/images/total-cart-4.jpg',
    title: '韩国人面临更高的比特币成本-最新加密货币新闻',
    introduce: '币界网报道： 最近的数据显示，韩国人为比特币支付的价格比美国买家高出约3%，主要是为了对冲',
    theme: '精彩再现',
    date: '2024-12-26 20:45'

  },
  {
    id: 8,
    img: 'src/assets/images/total-cart-4.jpg',
    title: '韩国人面临更高的比特币成本-最新加密货币新闻',
    introduce: '币界网报道： 最近的数据显示，韩国人为比特币支付的价格比美国买家高出约3%，主要是为了对冲',
    theme: '精彩再现',
    date: '2024-12-26 20:45'

  },
  {
    id: 9,
    img: 'src/assets/images/total-cart-5.jpg',
    title: 'Chainlink价格预测：1月份LINK Eyes跃升至34美元',
    introduce: '币界网报道： 根据最新的价格预测，Chainlink（LINK）正在为1月份的新一轮飙升做准备，以从目',
    theme: 'BTC',
    date: '2024-12-26 20:45'

  },
  {
    id: 10,
    img: 'src/assets/images/total-cart-5.jpg',
    title: 'Chainlink价格预测：1月份LINK Eyes跃升至34美元',
    introduce: '币界网报道： 根据最新的价格预测，Chainlink（LINK）正在为1月份的新一轮飙升做准备，以从目',
    theme: 'BTC',
    date: '2024-12-26 20:45'

  },
  {
    id: 11,
    img: 'src/assets/images/total-cart-6.jpg',
    title: '新Memecoin支持脑癌症研究-最新加密货币新闻',
    introduce: '币界网报道： 一位父亲希望为女儿罕见的脑癌症研究筹集资金，于是出现了一种新的模因币Pu',
    theme: '科技',
    date: '2024-12-26 20:45'

  },
  {
    id: 12,
    img: 'src/assets/images/total-cart-6.jpg',
    title: '新Memecoin支持脑癌症研究-最新加密货币新闻',
    introduce: '币界网报道： 一位父亲希望为女儿罕见的脑癌症研究筹集资金，于是出现了一种新的模因币Pu',
    theme: '科技',
    date: '2024-12-26 20:45'

  },
  {
    id: 1,
    img: 'src/assets/images/total-cart-1.jpg',
    title: '印度经济正在崩溃，这可能会让整个世界都崩溃',
    introduce: '币界网报道： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师',
    theme: '区块链',
    date: '2024-12-26 20:45'

  },
  {
    id: 2,
    img: 'src/assets/images/total-cart-1.jpg',
    title: '印度经济正在崩溃，这可能会让整个世界都崩溃',
    introduce: '币界网报道： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师',
    theme: '区块链',
    date: '2024-12-26 20:45'

  },
  {
    id: 3,
    img: 'src/assets/images/total-cart-2.jpg',
    title: '加密货币交易所代币克服了数字资产市场的低迷，在新的合并公告中飙升了近30%',
    introduce: '币界网报道： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在',
    theme: 'Web3',
    date: '2024-12-26 20:45'

  },
  {
    id: 4,
    img: 'src/assets/images/total-cart-2.jpg',
    title: '加密货币交易所代币克服了数字资产市场的低迷，在新的合并公告中飙升了近30%',
    introduce: '币界网报道： 一种加密货币交易所代币正在挑战本周整个市场的下跌趋势，飙升了近30%。在',
    theme: 'Web3',
    date: '2024-12-26 20:45'

  },
  

]





</script>

<template>

    
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in list" :key="i.id" class="infinite-list-item">
            <div class="info-cart">
            <img :src="i.img" alt="">
            <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis">{{ i.introduce }}</span>
                <div class="foot">
                <span class="foot-left"><b>{{ i.theme }}</b> · {{ i.date }}</span>
                <span class="foot-right"> 
                    <el-icon><View /></el-icon> 观看
                    <el-icon><Star /></el-icon> 收藏
                    <el-icon><Flag /></el-icon> 已展示
                </span>
                </div>
            </div>
            </div>
        </li>
    </ul>


</template>

<style scoped lang="scss">

.infinite-list {
  // height: 400px;
  padding: 0;
  margin: 0;
  list-style: none;
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
      flex: 1;

      font-size: 14px;
      color: #59636D;
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
