<script setup lang="ts">
import { onMounted , ref } from 'vue';

import { getCarouselImg } from '@/api/total'

interface ImgObject {
  _id: string,
  imgPath: string,
  title: string
}
const imgPath = ref<ImgObject[]>([])

const getCarouseDate = async () => {
  try {
    const res = await getCarouselImg()
    imgPath.value = res.data.data
    console.log(imgPath.value[0].imgPath)
    
    
  } catch (error) {
    console.log('错误');
    
  }
}

onMounted(() => {
  getCarouseDate()
})

</script>

<template>
  <!-- 轮播图 -->
  <div class="block text-center">
    <el-carousel height="260px" :motion-blur="true">
      <el-carousel-item v-for="item in imgPath" :key="item._id">
        <!-- <h3 class="small justify-center" text="2xl">
          {{ item.title }}
        </h3> -->
        <img 
          :src="item.imgPath" 
          :alt="item.title" 
          :title="item.title"
          @click=""
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.el-carousel {
  margin: 14px 0;

  .el-carousel__arrow {  
    color: pink;
  }

  .el-carousel__item {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    h3 {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 40%;
      text-align: center;
      font-size: 20px;
      color: #000;
      
    }
    img {
      width: 100%;
      cursor: pointer;
    }

  }
  // .el-carousel__item:nth-child(1) {
  //   background-image: url(imgPath.value[0].imgPath);
  //   background-size: 100% 100%;

  // }
  // .el-carousel__item:nth-child(2) {
  //   background-image: url(imgPath[0].imgPath);
  //   background-size: 100% 100%;

  // }
  // .el-carousel__item:nth-child(3) {
  //   background-image: url(imgPath[0].imgPath);
  //   background-size: cover;
  //   background-position: 50%;

  // }
  // .el-carousel__item:nth-child(4) {
  //   background-image: url(imgPath[0].imgPath);
  //   background-size: cover;
  //   background-position: 50%;

  // }
  
}

</style>
