<script setup lang="ts">
import { ref , computed } from 'vue';

const viewportHeight = ref<number>(window.innerHeight);
const viewportHeightCount = computed(() => {
    return viewportHeight.value - 100
})


</script>

<template>
  <!-- 个性渲染 -->
  <div class="personality"></div>
  <div class="show" :style="{height: viewportHeightCount + 'px'}"></div>
 
</template>

<style scoped lang="scss">

.personality{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: pink;
}

</style>
