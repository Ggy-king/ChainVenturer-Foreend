<!-- 个性语句 -->

<script setup lang="ts">


const textList = [
    '机会无限的路，是无限的路创造的机会。你以为梦里的都会实现，连同这沾染着无限机会的路。',
    '让梦想发光，实现与否已经不重要了，重要的是它已经亮起来了'
]

import { ref, onMounted, watch } from 'vue';
 
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
 
watch(fullText, (newVal) => {
  resetText();
}, { immediate: true });
 
onMounted(() => {
  typeText();
});

</script>

<template>
    <div class="personalized">
        <div class="box">
            <span v-for="(char, index) in displayedText" :key="index" class="char">{{ char }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.personalized {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    width: 100%;
    height: 140px;
    margin-bottom: 14px;
    white-space: pre; /* 保持空格和换行 */
    overflow: hidden; /* 防止内容溢出 */
    

    // background: linear-gradient(135deg, #f0e68c,#e0f7fa );
    background-image: url('@/assets/images/person-back.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0,.2); 
    padding: 10px; 
    position: relative; /* 为伪元素定位做准备 */

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 1000px;
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

   
}


</style>
