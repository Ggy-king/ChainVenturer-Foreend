<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

import NavBar from '@/components/NavBar.vue'
import TipBar from '@/components/TipBar.vue'
import FooterStatement from '@/components/FooterStatement.vue'


defineOptions({
    name: 'HomeView'
})




// 滚动条-头部固定
const navbarRef = ref<HTMLElement | null>(null);
const isFixed = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY || window.pageYOffset || 0; // 兼容性处理
 
  if (navbarRef.value) {
    // 根据滚动位置设置导航栏的固定状态
    isFixed.value = scrollTop > 30;
  }
  
};
 
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
 
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header height="100px" :class=" { fixed: isFixed }" ref="navbarRef">
          <TipBar></TipBar>
          <NavBar></NavBar>
        </el-header>

        <el-main >
          <router-view></router-view>
        </el-main>

        <el-footer>
          <FooterStatement></FooterStatement>
        </el-footer>
        
      </el-container>
    </div>
</template>


<style scoped lang="scss">

.common-layout {
  .el-container {
    // background-color: pink;
    .el-header {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 0;
      z-index: 999;
      }
      .fixed {
        position: fixed;
        top: -30px;
        left: 0;
        right: 0;
        box-shadow:0 2px 10px rgba(0,0,0,0.1);
      }
    .el-main {
      width: 1200px;
      margin: 100px auto 0;
      padding: 14px 0;
    }
    .el-footer {
      padding: 0;
    }
  }
}
</style>