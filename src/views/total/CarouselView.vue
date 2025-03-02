<script setup lang="ts">
import { onMounted , ref } from 'vue';

import { getCarouselImg } from '@/api/total'
import { UrlStore } from '@/stores'

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
    
  } catch (error) {
    console.log('错误')
  }
}

// 跳转文章
const url = UrlStore()
const handleToEssay = (id:string) => {
    window.open(`${url.baseUrl}/essay/${id}`)
//   router.push({name: 'essay',params: { id } })
}

onMounted(() => {
  getCarouseDate()
})

</script>

<template>
  <!-- 轮播图 -->
  <div class="block text-center">
    <el-carousel height="260px" :motion-blur="true">
      <el-carousel-item v-for="i in imgPath" :key="i._id">
        <!-- <h3 class="small justify-center" text="2xl">
          {{ item.title }}
        </h3> -->
        <img 
          :src="i.imgPath" 
          :alt="i.title" 
          :title="i.title"
          @click="handleToEssay(i._id)"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.el-carousel {
  margin: 14px 6px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
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
