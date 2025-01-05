<script setup lang="ts">
import { ref , computed,onMounted, watch,onBeforeUnmount  } from 'vue';

import IconEmail from'@/components/icons/IconEmail.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconQQ from'@/components/icons/IconQQ.vue'
import IconWeixin from'@/components/icons/IconWeixin.vue'
import IconTriangle from'@/components/icons/IconTriangle.vue'

// 页面高度
const viewportHeight = ref<number>(window.innerHeight);
const viewportHeightCount = computed(() => {
    return viewportHeight.value - 90
})


// 个性文字
const textList = [
    '机会无限的路，是无限的路创造的机会。你以为梦里的都会实现，连同这沾染着无限机会的路。',
    '让梦想发光，实现与否已经不重要了，重要的是它已经亮起来了'
]

 
const fullText = ref<string>('');
const displayedText = ref<string>('');
const typingSpeed = ref<number>(180); // 稍微增加打字速度以模拟自然停顿
 
// 返回随机整数
function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);  // 通常这里min已经是整数，但保留以增加通用性
    max = Math.floor(max); // 确保max是整数
    return Math.floor(Math.random() * (max - min + 1)) + min; // 生成[min, max)之间的随机数
}
 
const randomInt: number = getRandomInt(0, 1)
fullText.value = textList[randomInt]

const typeText = () => {
    

  if (displayedText.value.length < fullText.value.length) {
    displayedText.value += fullText.value[displayedText.value.length];
    setTimeout(() => typeText(), typingSpeed.value + Math.floor(Math.random() * 50)); // 增加随机延迟以模拟自然打字
  }
};
 
const resetText = () => {
  displayedText.value = '';
  setTimeout(() => {
    typeText();
  }, typingSpeed.value * 2);
};
 
watch(fullText, () => {
  resetText();
}, { immediate: true });
 

// const containerRef = ref<HTMLDivElement | null>(null);
const triangleRef = ref<HTMLDivElement | null>(null);
 

onMounted(() => {
  typeText();
  
});

onBeforeUnmount(() => {
});

</script>

<template>
  <!-- 个性渲染 -->
  <div class="personality">
      <!-- 文字 -->
      <div class="box">
          <span v-for="(char, index) in displayedText" :key="index" class="char">{{ char }}</span>
      </div>

      <!-- 小形状动态 -->
      <div class="triangle" ref="triangleRef">
        <IconTriangle />
      </div>
      <div class="square" ref="square"></div>
      <div class="circle" ref="circleRef"></div>

      <!-- icon -->
      <div class="icon-link">
        <el-tooltip
          effect="dark"
          content="微信"
          placement="top"
        >
          <span class="icon-m"><IconWeixin /></span>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="QQ"
          placement="top"
        >
          <span class="icon-m"><IconQQ /></span>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="邮件"
          placement="top"
        >
          <span class="icon-m"><IconEmail /></span>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="Github"
          placement="top"
        >
          <span class="icon-m"><IconGithub /></span>
        </el-tooltip>
        
      </div>

      <!-- 箭头 -->
      <el-icon class="arrow"><DArrowLeft /></el-icon>
  </div>
  
  <div class="show" :style="{height: viewportHeightCount + 'px'}"></div>
 
</template>

<style scoped lang="scss">
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


.personality{
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #50505c;
  white-space: pre; /* 保持空格和换行 */
  overflow: hidden; /* 防止内容溢出 */
  background-image: url('@/assets/images/total-bk.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 1000px;
        margin-top: -100px;
  }
  .icon-link {
    position: absolute;
    bottom: 60px;
    .icon-m {
      margin: 10px;
    }
  }  
  .char {
      opacity: 0;
      transform: translateX(0);
      transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;

  }
    
  .char-enter-active, .char-leave-active {
      transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .char-enter-from, .char-leave-to {
      opacity: 0;
      transform: translateX(-10px);
  }
  
  .char-enter-to, .char-leave-from {
      opacity: 1;
      transform: translateX(0);
  }
  span {
      display: inline-block;
      animation: fadeIn 0.5s ease-in-out forwards;
      animation-delay: .3s;
  }

  .arrow {
    position: absolute;
    bottom:0;
    animation: arrowAn 1s ease infinite alternate;
  }
}


 
.triangle {
  position: absolute;
  top: 100px;
  left: calc(50% - 600px);
  animation: triangleAn 20s linear 0s infinite;
}

.square {
  position: absolute;
  top: 0;
  left: calc(50% + 600px);
  width: 300px;
  height: 300px;
  background-color: #1a0dab;
  border-radius: 20px;
  opacity: .5;
  animation: squareAn 30s linear 0s infinite alternate;
}

.circle {
  position: absolute;
  bottom: 0;
  left: 100px;
  width: 300px;
  height: 300px;
  background-color: #e0f7fa;
  border-radius: 50%;
  transform-origin: 300px 300px; /* 设置旋转中心为容器中心减去圆的一半大小 */
  animation: rotateCircle 30s linear infinite;
}




@keyframes triangleAn{
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes squareAn {
  from {
    transform: translate(0,0) rotate(0deg);
  }
  to {
    transform: translate(-600px, 200px) rotate(360deg);
  }
}

@keyframes rotateCircle {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes arrowAn {
    from {
      transform: translate(0, 0) rotate(-90deg);
    }
    to {
      transform: translate(0, -100%) rotate(-90deg);
    }
}

</style>
