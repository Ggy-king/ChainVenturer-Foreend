<!-- 专题卡片 -->

<script setup lang="ts">
import UniversalHead from '@/components/UniversalHead.vue'

interface Props {
    title:string
}

const props = withDefaults(defineProps<Props>(),{
    title: '汇总列表'
})
const title: string = props.title
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
    <UniversalHead :title="title"/>

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
  

  .topic-main {
    position: relative;
    background-color: #fff;
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
