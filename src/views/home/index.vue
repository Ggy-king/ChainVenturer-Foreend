<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import TipBar from '@/components/TipBar.vue'


defineOptions({
    name: 'HomeView'
})


</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header height="100px">
          <TipBar></TipBar>
          <NavBar></NavBar>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

        <el-footer>
          底部
        </el-footer>
        
      </el-container>
    </div>
</template>


<style scoped lang="scss">

.common-layout {
  .el-container {
    // background-color: pink;
    .el-header {
      padding: 0;
      }
    .el-main {
      width: 1200px;
      margin: 0 auto;
      padding: 14px 0;
    }
  }
}
</style>