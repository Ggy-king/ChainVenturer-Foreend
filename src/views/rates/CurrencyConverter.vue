<!-- 汇率换算器 -->
<script setup lang="ts">
import IconConversion from '@/components/icons/IconConversion.vue'

import { ref } from 'vue'


// 金额
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}


// 持有
const buy = ref('')
const sell = ref('')
const rates = [

    {
        currencyName: '美国',
        currency: 'USA',
        rate: 0.145 // 示例数据，1美元约等于0.145人民币（实际汇率远高于此）
    },
    {
        currencyName: '加拿大',
        currency: 'Canada',
        rate: 0.195 // 示例数据，1加元约等于0.195人民币
    },
    {
        currencyName: '英国',
        currency: 'UK',
        rate: 0.085 // 示例数据，1英镑约等于0.085人民币（实际汇率远高于此）
    },
    {
        currencyName: '澳大利亚',
        currency: 'Australia',
        rate: 0.205 // 示例数据，1澳元约等于0.205人民币
    },
    {
        currencyName: '新加坡',
        currency: 'Singapore',
        rate: 0.485 // 示例数据，1新加坡元约等于0.485人民币
    },
    {
        currencyName: '德国',
        currency: 'Germany',
        rate: 0.13 // 示例数据，1欧元（德国使用欧元）约等于0.13人民币（实际汇率远高于此，注意这里用欧元作为代表）
    },
    {
        currencyName: '法国',
        currency: 'France',
        rate: 0.13 // 示例数据，同样使用欧元作为代表，汇率同上
    },
    {
        currencyName: '韩国',
        currency: 'South Korea',
        rate: 0.058 // 示例数据，1韩元约等于0.058人民币
    },
    {
        currencyName: '印度',
        currency: 'India',
        rate: 0.013 // 示例数据，1印度卢比约等于0.013人民币
    },
    {
        currencyName: '墨西哥',
        currency: 'Mexico',
        rate: 0.048 // 示例数据
    },
    {
        currencyName: '日本',
        currency: 'Japan',
        rate: 0.064 // 示例数据，1日元约等于0.064人民币
    },
    {
        currencyName: '巴西',
        currency: 'Brazil',
        rate: 0.175 // 示例数据
    },
    {
        currencyName: '阿根廷',
        currency: 'Argentina',
        rate: 0.009 // 示例数据
    },
    {
        currencyName: '南非',
        currency: 'South Africa',
        rate: 0.068 // 示例数据
    },
    {
        currencyName: '埃及',
        currency: 'Egypt',
        rate: 0.042 // 示例数据
    },
    {
        currencyName: '尼日利亚',
        currency: 'Nigeria',
        rate: 0.0027 // 示例数据
    },
    {
        currencyName: '俄罗斯',
        currency: 'Russia',
        rate: 0.078 // 示例数据
    },
    {
        currencyName: '中国',
        currency: 'China',
        rate: 1.0 // 人民币对人民币汇率为1
    },
    {
        currencyName: '印度尼西亚',
        currency: 'Indonesia',
        rate: 0.00045 // 示例数据
    },
    {
        currencyName: '马来西亚',
        currency: 'Malaysia',
        rate: 0.155 // 示例数据
    },
    {
        currencyName: '菲律宾',
        currency: 'Philippines',
        rate: 0.016 // 示例数据
    },
    {
        currencyName: '泰国',
        currency: 'Thailand',
        rate: 0.02 // 示例数据
    },
    {
        currencyName: '越南',
        currency: 'Vietnam',
        rate: 0.0003 // 示例数据
    },
    {
        currencyName: '伊朗',
        currency: 'Iran',
        rate: 0.0002 // 示例数据
    },
    {
        currencyName: '土耳其',
        currency: 'Turkey',
        rate: 0.075 // 示例数据
    },
    {
        currencyName: '希腊',
        currency: 'Greece',
        rate: 0.014 // 示例数据
    },
    {
        currencyName: '意大利',
        currency: 'Italy',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '西班牙',
        currency: 'Spain',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '荷兰',
        currency: 'Netherlands',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '比利时',
        currency: 'Belgium',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '奥地利',
        currency: 'Austria',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '爱尔兰',
        currency: 'Ireland',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '葡萄牙',
        currency: 'Portugal',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '芬兰',
        currency: 'Finland',
        rate: 0.13 // 示例数据，使用欧元作为代表
    },
    {
        currencyName: '瑞典',
        currency: 'Sweden',
        rate: 0.11 // 示例数据
    },
    {
        currencyName: '挪威',
        currency: 'Norway',
        rate: 0.105 // 示例数据
    },
    {
        currencyName: '丹麦',
        currency: 'Denmark',
        rate: 0.135 // 示例数据
    },
    {
        currencyName: '波兰',
        currency: 'Poland',
        rate: 0.23 // 示例数据
    },
    {
        currencyName: '匈牙利',
        currency: 'Hungary',
        rate: 0.003 // 示例数据
    },
    {
        currencyName: '捷克',
        currency: 'Czech Republic',
        rate: 0.04 // 示例数据
    },
    {
        currencyName: '斯洛伐克',
        currency: 'Slovakia',
        rate: 0.04 // 示例数据
    },
    {
        currencyName: '罗马尼亚',
        currency: 'Romania',
        rate: 0.02 // 示例数据
    },
    {
        currencyName: '保加利亚',
        currency: 'Bulgaria',
        rate: 0.016 // 示例数据
    },
    {
        currencyName: '克罗地亚',
        currency: 'Croatia',
        rate: 0.014 // 示例数据
    },
    {
        currencyName: '立陶宛',
        currency: 'Lithuania',
        rate: 0.075 // 示例数据
    },
    {
        currencyName: '拉脱维亚',
        currency: 'Latvia',
        rate: 0.07 // 示例数据
    },
    {
        currencyName: '爱沙尼亚',
        currency: 'Estonia',
        rate: 0.07 // 示例数据
    },
    {
        currencyName: '斯洛文尼亚',
        currency: 'Slovenia',
        rate: 0.045 // 示例数据
    },
    {
        currencyName: '乌克兰',
        currency: 'Ukraine',
        rate: 0.035 // 示例数据
    },
    {
        currencyName: '白俄罗斯',
        currency: 'Belarus',
        rate: 0.0045 // 示例数据
    },
    {
        currencyName: '摩尔多瓦',
        currency: 'Moldova',
        rate: 0.004 // 示例数据
    },
    {
        currencyName: '阿尔巴尼亚',
        currency: 'Albania',
        rate: 0.012 // 示例数据
    },
    {
        currencyName: '波斯尼亚和黑塞哥维那',
        currency: 'Bosnia and Herzegovina',
        rate: 0.018 // 示例数据
    },
    {
        currencyName: '塞尔维亚',
        currency: 'Serbia',
        rate: 0.01 // 示例数据
    },
    {
        currencyName: '黑山',
        currency: 'Montenegro',
        rate: 0.017 // 示例数据
    },
    {
        currencyName: '马其顿',
        currency: 'Macedonia',
        rate: 0.016 // 示例数据
    }
]

</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconConversion class="icon" />&nbsp;&nbsp;实时汇率换算器</span>
        </div>
        </template>
        
        <div class="rates-count">
            <!-- 金额 -->
            <div class="sum">
                <span>金额</span>
                <el-input-number
                    v-model="num"
                    :min="1"
                    :max="10"
                    controls-position="right"
                    size="large"
                    @change="handleChange"
                />
            </div>

            <!-- 持有 -->
            <div class="hold">
                <span>持有</span>
                <el-select
                v-model="buy"
                placeholder="请选择国家"
                size="large"
                style="width: 240px"
                >
                <el-option
                    v-for="item in rates"
                    :key="item.currency"
                    :label="item.currencyName"
                    :value="item.rate"
                />
                </el-select>
            </div>



            <div class="station">
                <strong>交换</strong>
            </div>


            <!-- 兑换 -->
            <div class="exchange">
                <span>兑换</span>
                
                <el-select
                v-model="sell"
                placeholder="请选择国家"
                size="large"
                style="width: 240px"
                >
                <el-option
                    v-for="item in rates"
                    :key="item.currency"
                    :label="item.currencyName"
                    :value="item.rate"
                />
                </el-select>
            </div>
        </div>


        <div class="rates-result">
            <div class="result-fore">1 美元 （USD）= </div>
            <div class="result-back">7.2993 人民币（CNY）</div>
            <div class="result-all">反向汇率：1 CNY = 0.1370 USD   更新时间：2025-01-01 15:15:01</div>

            <el-button color="#35afbf" class="key-count">立刻换算</el-button>
        </div>

    </el-card>
       
</template>

<style scoped lang="scss">
.el-card {
    margin-bottom: 10px;
    :deep(.el-card__header) {
        padding-left: 10px;
    }
    .card-header {
        font-size: 16px;
        font-weight: 600;
        .icon {
            vertical-align: top;
            background-color: #35afbf;
            padding: 2px;
        }
        
    }

    .rates-count {
        height: 110px;
        display: flex;
        
        div {
            flex: 2;
            span {
                font-size: 20px;
                font-weight: 600;
                line-height: 50px;
            }
        }
        .el-input-number {
            margin-top: 10px;
        }
        .el-select {
            margin-top: 10px;
        }
        .station {
            flex: 1;
            height: 60px;
            margin-top: 50px;
            line-height: 60px;
            text-align: center;
            strong {
                padding: 10px;
                border-radius: 4px;
                color: #fff;
                background-color: #35afbf;
            }
            
        }
    }

    .rates-result {
        position: relative;
        height: 130px;
        .result-fore {
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #5c667b;
        }

        .result-back {
            height: 50px;
            line-height: 50px;
            font-weight: 600;
            font-size: 22px;
            color: #e45f17;
        }

        .result-all {
            height: 40px;
            line-height: 40px;
            color: #5c667b;
        }
        .key-count {
            position: absolute;
            top: 40px;
            right: 20px;
            height: 50px;
            width: 200px;
            border-radius: 4px;
            font-size: 22px;
            color: #fff;
        }
    }
    
}
</style>