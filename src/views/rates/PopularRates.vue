<!-- 热门汇率 -->
<script setup lang="ts">
import IconHot from '@/components/icons/IconHot.vue'


const tableData = [
  {
    id: 1,
    country: '美元',
    url: 'src/components/icons/country/america.svg',
    rate: '7.29',
    couRate: 'USD',
    rateP: '0.0000',
  },
  {
    id: 2,
    country: '欧元',
    url: 'src/components/icons/country/europe.svg',
    rate: '7.56',
    couRate: 'EUR',
    rateP: '0.0000',
  },
  {
    id: 3,
    country: '日元',
    url: 'src/components/icons/country/japan.svg',
    rate: '0.0463',
    couRate: 'JPY',
    rateP: '0.0000',
  },
  {
    id: 4,
    country: '韩元',
    url: 'src/components/icons/country/korea.svg',
    rate: '0.005',
    couRate: 'KRW',
    rateP: '0.0000',
  },
  {
    id: 5,
    country: '港币',
    url: 'src/components/icons/country/hongKong.svg',
    rate: '0.93',
    couRate: 'HKD',
    rateP: '0.0000',
  },
  {
    id: 6,
    country: '英镑',
    url: 'src/components/icons/country/britain.svg',
    rate: '9.14',
    couRate: 'GBP',
    rateP: '0.0000',
  },

  
]

</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconHot class="icon"></IconHot>&nbsp;&nbsp;今日热门换算汇率</span>
        </div>
        </template>

        <table>
            <tbody>
                <tr v-for="i in tableData" :key="i.id">
                    <td><img :src="i.url" alt="">{{ i.country }}</td>
                    <td>
                        {{ i.rate }}
                        <div class="rate-dir">{{ i.couRate }}_CNY</div>
                    </td>
                    <td>{{ i.rateP }}%</td>
                </tr>
            </tbody>
        </table>
    </el-card>
       
</template>

<style scoped lang="scss">
.el-card {
    margin-bottom: 10px;
    :deep(.el-card__body) {
      padding: 0;
    }
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
    table {
        tr {
            display: flex;
            height: 44px;
            border-bottom: 1px solid #ebeef5;
            td {
                flex: 1;
            }
            td:first-child {
                font-size: 16px;
                img {
                    margin-right: 8px;
                }
            }
            td:nth-child(2) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                .rate-dir {
                    font-size: 10px;
                    color: #89939e;
                }
            }
            td:last-child {
                text-align: right;
                color: #40b068;
            }
        }
    }
}
</style>