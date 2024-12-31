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


// 改变某一列单元格背景颜色
const tableCellStyle = (data: { row: any, column: any, rowIndex: number, columnIndex: number }) => {
    if (data.columnIndex === 1) {
        console.log(data.column)
    	return 'column-color'
    }
}


</script>

<template>
    <div class="detail">
        <el-table 
            :data="filterTableData" 
            style="width: 100%;" 
             
            empty-text="请主子刷新页面多等一会，数据马上就来！"
            :cell-class-name="tableCellStyle"
        >
            <el-table-column label="序号" prop="order" sortable />
            <el-table-column label="品种" prop="name" />
            <el-table-column label="实时价格" prop="price" sortable  />
            <el-table-column label="振幅" prop="amplitude" sortable  />
            <el-table-column label="换手" prop="change" sortable  />
            <el-table-column label="成交量" prop="turnover" sortable  />
            <el-table-column label="市值" prop="market" sortable  />
            
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

<style scoped lang="scss">
.detail {
    width: 100%;
    min-height: 600px;
    .table-header {
        font-size: 16px;
        color: pink;
    }

    // ::v-deep(.el-table__header) {
    //     color: pink;
    // }

    // ::v-deep(.el-table__header-wrapper) {
    //     color: pink;
    // }

    :deep(.el-table th) {
        background-color: rgba(1, 127, 253,.5);
        // background: linear-gradient(to right,#037efb,#00cae0);
        color: #000;
    }
    // #037efb
    // #00cae0
    :deep(.el-table__body tr) {
        background-color: #ebf0eb;
    }
    :deep(.el-table__body td) {
        padding: 0;
        height: 64px;
        // background-color: #ebeff0;
    }
    .el-table .column-color {
        background-color: red;
    }

    
}
// table-header
</style>
