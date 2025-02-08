<script setup lang="ts">
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import SideRates from '@/views/rates/SideRates.vue';
import CurrencyConverter from '@/views/rates/CurrencyConverter.vue';
import PopularRates from '@/views/rates/PopularRates.vue';
import RecentQueries from '@/views/rates/RecentQueries.vue';
import ForeignCurrency from '@/views/rates/ForeignCurrency.vue';


defineOptions({
    name: 'RatesView'
})


</script>

<template>
  <PersonalizedStatement></PersonalizedStatement>
  
  
  <div class="rates">

    <!-- 汇率换算器 -->
    <CurrencyConverter></CurrencyConverter>
    <!-- 今日热门换算汇率 -->
    <PopularRates></PopularRates>
    <!-- 最近查询 -->
    <RecentQueries></RecentQueries>

    <!-- 外汇币种 -->
    <ForeignCurrency></ForeignCurrency>
      
    
    <!-- 侧边栏 -->
    <div class="side">
      <SideRates></SideRates>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rates {
  position: relative;
  width: 820px;
  .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
}


</style>
