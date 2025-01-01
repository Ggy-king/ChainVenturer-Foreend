<script setup lang="ts">
import PersonalizedStatement from '@/components/PersonalizedStatement.vue';
import SideRates from '@/views/rates/SideRates.vue';


defineOptions({
    name: 'RatesView'
})


</script>

<template>
  <PersonalizedStatement></PersonalizedStatement>
  
  
  <div class="rates">

    <!-- 汇率换算器 -->
    <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
    <!-- 今日热门换算汇率 -->
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>

    <!-- 最近查询 -->
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>

    <!-- 外汇币种 -->
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>
      
    
    <!-- 侧边栏 -->
    <div class="side">
      <SideRates></SideRates>
      <SideRates></SideRates>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rates {
  position: relative;
  width: 820px;
  height: 2000px;
  .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
}


</style>
