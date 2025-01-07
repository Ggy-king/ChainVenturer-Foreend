<!-- 详细列表 -->

<script setup lang="ts">
import { computed, ref } from 'vue'

interface User {
  order: number
  name: string
  price: number
  amplitude: number   // 振幅
  change: number  // 换手
  turnover:number   // 成交量
  market: number  // 市值
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)


const tableData: User[] = [
  {
    order: 1,
    name: 'BTC (比特币)',  
    price: 62.81,
    amplitude: 78.5,  // 振幅
    change: 22.1,  // 换手
    turnover: 34.5,   // 成交量
    market: 27  // 市值
  },
  {
    order: 2,
    name: 'DOT (波卡币)',  
    price: 62.81,
    amplitude: 88.5,  // 振幅
    change: 23.1,  // 换手
    turnover: 44.5,   // 成交量
    market: 17  // 市值
  },
  {
    order: 3,
    name: 'BNB (币安币)',  
    price: 62.81,
    amplitude: 68.5,  // 振幅
    change: 23.6,  // 换手
    turnover: 42.5,   // 成交量
    market: 17  // 市值
  },
  {
    order: 4,
    name: 'TRX (波场)',  
    price: 156.81,
    amplitude: 2,  // 振幅
    change: 7.4,  // 换手
    turnover: 200.3,   // 成交量
    market: 56  // 市值
  },
  {
    order: 5,
    name: 'DOT (波卡币)',  
    price: 62.81,
    amplitude: 88.5,  // 振幅
    change: 23.1,  // 换手
    turnover: 44.5,   // 成交量
    market: 17  // 市值
  },
  {
    order: 6,
    name: 'DOT (波卡币)',  
    price: 62.81,
    amplitude: 88.5,  // 振幅
    change: 23.1,  // 换手
    turnover: 44.5,   // 成交量
    market: 17  // 市值
  },
]




</script>

<template>
    <div class="detail">
        <el-table
            :data="filterTableData" 
            style="width: 100%;" 
             
            empty-text="请主子刷新页面多等一会，数据马上就来！"

            :header-cell-style="{color: '#89939e'}"
            cell-class-name="cell-body"
        >
            <el-table-column label="序号" prop="order" sortable />
            <el-table-column label="品种" prop="name" class-name="name"/>
            <el-table-column label="实时价格" prop="price" sortable>
              <template #default="scope">￥{{ scope.row.price }}</template>
            </el-table-column>

            <el-table-column label="振幅" prop="amplitude" sortable class-name="amplitude" >
              <template #default="scope">{{ scope.row.amplitude }} %</template>
            </el-table-column>

            <el-table-column label="换手" prop="change" sortable  />

            <el-table-column label="市值" prop="market" sortable  >
              <template #default="scope">{{ scope.row.market }}亿</template>
            </el-table-column>

            <el-table-column label="成交量" prop="turnover" sortable >
              <template #default="scope">{{ scope.row.turnover }}亿 USDT</template>
            </el-table-column>

            
            <el-table-column fixed="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="输入品种名称/代码" />
            </template>
            <span style="color: #00c6d8;">#全球数字货币</span>
            </el-table-column>
            <!-- <template #append>
                无限滚动
            </template> -->
        </el-table>
    </div>
</template>
<!-- #409eff -->

<style scoped lang="scss">
.detail {
    width: 100%;
    min-height: 600px;
    .table-header {
        font-size: 16px;
        color: pink;
    }

    .el-table {
      color: #000;

      :deep(.cell-body) {
        padding: 0;
        height: 64px;
      }
      
      
      :deep(.name) {
        color: #409eff;
      }
      :deep(.amplitude) {
        color: #f23f58;
      }
    }

  
    
   
    
  }
</style>
