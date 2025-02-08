<script setup lang="ts">
import SimpleBrowse from '@/components/cart/SimpleBrowse.vue'
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue'
import SideHotCart from '@/components/cart/SideHotCart.vue';
import ArticlesList from './ArticlesList.vue';


defineOptions({
    name: 'ArticleView'
})


</script>

<template>
  <SimpleBrowse></SimpleBrowse>
  <PersonalizedStatement></PersonalizedStatement>
  
  <div class="articles">
    <ArticlesList />


    <!-- 侧边栏 -->
    <div class="side">
      <SideHotCart title="最热文章"></SideHotCart>
      <SideHotCart title="最火币种"></SideHotCart>
    </div>
  </div>
 

</template>

<style scoped lang="scss">
.articles {
  position: relative;
  width: 820px;
  min-height: 800px;
  .side {
      position: absolute;
      top: 30px;
      right: -380px;
  }
}

    
</style>
