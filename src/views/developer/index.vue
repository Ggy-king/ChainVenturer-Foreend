<script setup lang="ts">
import { onMounted,ref } from 'vue'
import AboutMy from './AboutMy.vue'
import HobbiesOther from './HobbiesOther.vue'
import MatchSchool from './MatchSchool.vue'
import ProjectPresentation from './ProjectPresentation.vue'
import TechnologyList from './TechnologyList.vue'
import noData from '@/assets/images/no-data.png'


import { getDeveloperData } from '@/api/developer'

defineOptions({
    name: 'DeveloperView'
})

const isShow = ref<boolean>(false)
const urlImgPath = ref<string>('')

const getDeveloperAbout = async () => {
  const res = await getDeveloperData()
  urlImgPath.value = res.data.data
  if(urlImgPath.value) isShow.value = true
}

onMounted(() => {
  getDeveloperAbout()
})


</script>

<template>
  <!-- 占位 -->
  <div class="seat" v-if="isShow"></div>   

  <div class="overall" v-if="isShow">
     <!-- 第一部分 关于自己 -->
    <AboutMy :urlList="urlImgPath"/>

    <!-- 第二部分 其他爱好 -->
    <HobbiesOther :urlList="urlImgPath"/>

    <!-- 第三部分 校园荣誉 -->
    <MatchSchool :urlList="urlImgPath" />

    <!-- 第四部分 项目展示 -->
    <ProjectPresentation :urlList="urlImgPath" />

    <!-- 第五部分 技术展示 -->
    <TechnologyList :urlList="urlImgPath" />
  </div>

  <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;height: 800px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，或者是您探索到了未知秘密"
    />
 
</template>

<style scoped lang="scss">
.seat {
    height: 4500px;
}
.overall {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
