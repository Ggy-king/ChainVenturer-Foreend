<script setup lang="ts">

</script>

<template>
  <!-- 轮播图 -->
  <div class="block text-center">
    <el-carousel height="400px" :motion-blur="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.el-carousel {
  margin-bottom: 14px;

  .el-carousel__arrow {  
    color: pink;
  }


  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item {
    background-repeat: no-repeat;

  }
  .el-carousel__item:nth-child(1) {
    background-image: url('@/assets/images/total-rotate-app.webp');
    background-size: 100% 100%;

  }
  .el-carousel__item:nth-child(2) {
    background-image: url('@/assets/images/total-rotate-2.jpg');
    background-size: 100% 100%;

  }
  .el-carousel__item:nth-child(3) {
    background-image: url('@/assets/images/total-rotate-3.jpg');
    background-size: cover;
    background-position: 50%;

  }
  .el-carousel__item:nth-child(4) {
    background-image: url('@/assets/images/total-rotate-4.jpg');
    background-size: cover;
    background-position: 50%;

  }
  
}

</style>
