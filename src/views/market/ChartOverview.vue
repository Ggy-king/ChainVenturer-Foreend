<!-- 图表总览 -->

<script setup lang="ts">

const sectorList = [1,2,3,4,5,6,7,8,9,10,11,12]

import {ref,reactive,onMounted} from 'vue';

import * as echarts from 'echarts/core';
import {  TitleComponent, GridComponent ,TooltipComponent, LegendComponent, } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';


import type { GridComponentOption,TooltipComponentOption,TitleComponentOption, LegendComponentOption } from 'echarts/components'
import type { BarSeriesOption } from 'echarts/charts';


echarts.use([TitleComponent,GridComponent, BarChart, CanvasRenderer,TooltipComponent,LegendComponent]);

type EChartsOption = echarts.ComposeOption<
   TitleComponentOption | GridComponentOption | BarSeriesOption | TooltipComponentOption | LegendComponentOption
>;


const chartContainer = ref<HTMLDivElement | null>(null);

const option: EChartsOption = reactive({
  title: {
    text: '全市场涨跌分布',
    textStyle: {
        fontSize: '14px',
        color: '#538fcb'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    
  },
  legend: {
    right: '0',
    data: ['下跌数量','上涨数量']
  },

  grid: {
    left: '1%',
    right: '1%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    nameLocation: 'middle',
    axisLabel: {
        interval: 0
    },
    data: ['-60%以上','-60%','-40%', '-30%', '-20%', '-10%', '-5%','5%', '10%', '20%','30%','40%','60%','60%以上']
  },
  yAxis: {
    type: 'value'
  },
     
  series: [
  {
      name: '下跌数量',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
            color: '#00b98c'
      },
      label: {
        show: true,
        position: 'top'
      },
      data: [7, 16, 46, 65, 197, 110, 458,'-','-','-','-','-','-','-']
    },
    {
      name: '上涨数量',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
            color: '#f23f58'
      },
      label: {
        show: true,
        position: 'top'
      },
      data: ['-','-','-','-','-','-','-',564, 224, 46, 22, 150, 17, 26]
    },
  ]
});

const initChart = () => {

    var myChart = echarts.init(chartContainer.value)

    myChart.setOption(option)
}

onMounted(() => {
    initChart()

})
</script>

<template>
    <div class="chart">

        <div class="title">热门板块</div>
        <div class="sector">
            <ul class="sector-main">
                <li v-for="i in sectorList" :key="i">
                    <el-card>
                        <div>区块链</div>
                        <div>6587.4亿</div>
                        <div>+4.73% &nbsp;&nbsp;<span>46万人讨论</span></div>
                    </el-card>
                </li>
            </ul>
        </div>

        <!-- 标题 -->
        <div class="title">市场总览</div>

        <div class="market-chart">
            <el-card>
                <div class="market-whole" ref="chartContainer"></div>
            </el-card>
            <el-card class="market-rate">
                <div class="rate-title">大盘评级</div>
                <el-progress type="dashboard" :percentage="76" color="#00b98c" :width="150" :stroke-width="8">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ percentage }}分</span>
                        <span class="percentage-label">注意风险</span>
                    </template>
                </el-progress>
                <div class="rate-bottom">
                    <span class="rate-info">投资建议</span>
                    <div class="rate-more">大盘震荡，适当参与</div>
                </div>
            </el-card>
        </div>
        

    </div>
</template>

<style scoped lang="scss">
.chart {
    width: 100%;
    margin-bottom: 24px;
    .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .sector {
        
        &-main {
            display: flex;
            flex-wrap: wrap;
            .el-card {
                width: 190px;
                height: 100px;
                text-align: center;
                margin-left: 12px;
                margin-bottom: 10px;
                div:first-child {
                }
                div:nth-child(2) {
                    font-size: 20px;
                    color: #f23f58;
                    margin: 4px 0;
                }
                div:last-child {
                    color: #f23f58;
                    span {
                        color: #89939e;
                    }
                }
                :deep(.el-card__body) {
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
            li:nth-child(6n + 1) {
                .el-card {
                    margin-left: 0;
                }
            }
        }
    }

    .market-chart {
        display: flex;
        justify-content: space-between;
        height: 370px;
        .el-card {
            width: 910px;
            height: 370px;
            .market-whole {
            height: 370px;
        }
            
            // background-color: #ebeff0;
        }
        .market-rate {
            width: 260px;
            position: relative;
            .rate-title {
                font-size: 16px;
                font-weight: 600;
                text-align: center;
                margin: 10px 0;
                padding-bottom: 10px;
                border-bottom: 1px solid #f1f1f1;
            }
            .el-progress {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .percentage-value {
                display: block;
                margin-top: 10px;
                font-size: 32px;
                color: #00b98c;
            }
            .percentage-label {
                display: block;
                margin-top: 10px;
                font-size: 12px;
            }
            .rate-bottom {
                position: absolute;
                bottom: 10%;
                left: 50%;
                transform: translate(-50%,0);
                text-align: center;
                .rate-info {
                    display: inline-block;
                    margin-bottom: 10px;
                    padding: 2px;
                    color: #fff;
                    background-color: #4378ff;
                }
                    
                
            }

            
        }
    }




}
</style>
