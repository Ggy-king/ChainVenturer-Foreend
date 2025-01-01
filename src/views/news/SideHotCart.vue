<!-- 专题卡片 -->

<script setup lang="ts">
import type { List } from '@element-plus/icons-vue';
import {ref} from 'vue'

const hotList = [
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },
    {
        name:'Ethereum',
        info:'ETH以太坊',
        price:'24,712.66',
        rate:'-1.104%',
    },

]


</script>

<template>
  <div class="topic">
    <!-- 头部 -->
    <div class="topic-header">
      <div>热议专题</div>
      <a href="#"><span>更多</span><el-icon><ArrowRight/></el-icon></a>
    </div>

    <!-- 主体 -->
    <div class="topic-main">

      <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>价格</th>
                <th style="text-align: right;">一天内涨幅</th>
            </tr>
        </thead>

        <!-- 表格主体 -->
        <tbody>
            <tr v-for="i in hotList">
                <td>
                    <img src="@/assets/images/news-logo-1.webp" alt="">
                    <span>
                        <div>{{ i.name }}</div>
                        <div>{{ i.info }}</div>
                    </span>
                </td>
                <td>￥ {{ i.price }}</td>
                <td>
                    <div class="rate">{{ i.rate }}</div>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic {
  width: 320px;
  margin-bottom: 40px;
  .topic-header {
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

  .topic-main {
    position: relative;
    table {
        thead {
            th {
                font-size: 12px;
                color: #89939e;
            }
        }
        tbody {
            tr {

                td:first-child {
                    display: flex;
                    align-items: center;
                    img {
                        width: 28px;
                        height: 28px;
                    }
                    span {
                        margin-left: 8px;
                        div:first-child {
                            color: #000;
                        }
                        div:last-child {
                            font-size: 12px;
                        }
                    }
                }

                td:nth-child(2) {
                    font-weight: 600;
                }

                .rate {
                    text-align: center;
                    padding: 4px 0;
                    color: #fff;
                    border-radius: 4px;
                    background-color: #00b98c;
                }

            }
        }
    }
    
  }
}
</style>
