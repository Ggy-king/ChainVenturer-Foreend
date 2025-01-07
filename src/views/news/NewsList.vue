<!-- 快讯列表 -->

<script setup lang="ts">
import SideHotCart from '@/components/SideHotCart.vue';
import ButtonDecoration from '@/views/news/ButtonDecoration.vue';

import {ref} from 'vue'

import { CaretRight } from '@element-plus/icons-vue'

const format:(n:number) => void = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',

  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },

  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
   {
    content: 'Success',
    timestamp: '2018-04-11',
  },

]

// 切换小标签背景色
const bgcColor = ref<string>('#3d5b99')
const text = ref<string>('最新')

const switchBgcColor = (num:number) => {
    switch (num) {
        case 1:
            bgcColor.value = '#3d5b99'
            text.value = '最新'
            break;
        case 2:
            bgcColor.value = '#dc4c3a'
            text.value = '最热'
            break;
        case 3:
            bgcColor.value = '#03b0f0'
            text.value = '精选'
            break;
        case 4:
            bgcColor.value = '#c003ff'
            text.value = '小众'
            break;
    }
}

</script>

<template>
    <div class="news">
        <!-- 快讯头部 -->
        <div class="news-head">
            <ButtonDecoration @changeBtn="switchBgcColor"></ButtonDecoration>
        </div>


        <div class="news-main">
            <div class="date">123456</div>

            <!-- 小进度条 -->
            <el-progress
                :percentage="100"
                color="#f23f58"
                :indeterminate="true"
                :duration="15"
                :stroke-width="2"
                :text-inside="true"

                :format="format"
                >
                <span></span>
            </el-progress>

            <!-- 时间线展示 -->
            <el-timeline>
                <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp"
                    :icon="CaretRight"
                    color="#000"
                    hide-timestamp
                    >
                    <div class="news-title">
                        <i :style="{backgroundColor: bgcColor}">{{ text }}</i>港股上市公司裕兴科技：近期出售约630万枚USDT并购买78.2枚BTC
                    </div>
                    <el-card class="news-main">
                        <p>港股上市公司裕兴科技发布公告宣布，已于2024年7月25日至2024年12月31日期间在公开市场上进行了一系列交易，包括： (
                            i)购买约78.2单位比特币，每单位的平均价格为80,960美元，代价总额约630万美元(不包括交易成本) 
                            (ii)出售约630万单位USDT，每单位的平均价格为1美元，价值总额约630万美元(不包括交易成本)
                            ，出售事项下出售的USDT均用于转换为比特币购买事项下等值的比特币。</p>
                    </el-card>
                    <div class="news-date">Tom committed 2018/4/12 20:46</div>
                </el-timeline-item>
            </el-timeline>
        </div>


        <!-- 侧边栏 -->
        <div class="side">
            <SideHotCart title="热门文章"/>
            <SideHotCart title="最火币种"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news {
    position: relative;
    width: 820px;
    &-head {
        padding:10px 0;
        background-color: #fff;
        border-radius: 20px;
       
        
    }
    &-main {
        .el-progress {
            margin: 20px 0;
        }
        .el-timeline {
            margin-left: 4px;
            .news-title{
                font-size: 18px;
                font-weight: 600;
                i {
                    font-size: 12px;
                    font-style: normal;
                    padding: 4px;
                    margin-right: 10px;
                    color: #fff;
                    border-radius: 8px;
                }
            }
            .news-main {
                margin: 10px 0;
            }
            .news-date{
                margin-bottom: 20px;
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
