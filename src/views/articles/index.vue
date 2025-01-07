<script setup lang="ts">
import SimpleBrowse from '@/components/SimpleBrowse.vue'
import PersonalizedStatement from '@/components/PersonalizedStatement.vue'
import SideHotCart from '@/components/SideHotCart.vue';
import LabelBrowse from './LabelBrowse.vue';


defineOptions({
    name: 'ArticleView'
})


</script>

<template>
  <SimpleBrowse></SimpleBrowse>
  <PersonalizedStatement></PersonalizedStatement>
  
  <div class="articles">
    <LabelBrowse></LabelBrowse>


    <!-- 侧边栏 -->
    <div class="side">
      <SideHotCart></SideHotCart>
      <SideHotCart></SideHotCart>
    </div>
  </div>
 

</template>

<style scoped lang="scss">
.articles {
  position: relative;
  width: 820px;
  .side {
      position: absolute;
      top: 0;
      right: -380px;
  }
}

    
</style>
