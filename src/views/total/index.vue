<script setup lang="ts">
defineOptions({
    name: 'TotalView'
})


</script>

<template>
  <simple-browsing></simple-browsing>
  <!-- 走马灯 -->
  <div class="block text-center">
    <el-carousel height="400px" motion-blur="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
 
</template>

<style scoped lang="scss">


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
  background-image: url('@/assets/images/total-rotate-B.webp');
  background-repeat: no-repeat;
  background-size: 100% 100%;

}

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
