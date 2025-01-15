<script setup lang="ts">



const srcList =
  [
  'src/assets/images/developer-match-1.jpg',
  'src/assets/images/developer-match-2.jpg',
  'src/assets/images/developer-match-3.png',
  'src/assets/images/developer-match-4.png',
  'src/assets/images/developer-match-5.png',
  'src/assets/images/developer-match-6.png',
  ]



</script>


<template>
    <div class="match">
        <div class="center">
            <div class="match-title">展示校园荣誉 | Showcasing campus honors</div>
            <div class="match-info">虽然不值一提，但还是喜欢记录一下(Although it's not worth mentioning, I still like to record it)</div>
            <div class="match-img">
                <el-image
                    v-for="i in srcList" 
                    :key="i"
                    style="width: 150px; height: 150px;margin-left: 10px;"
                    :src="i"
                    :zoom-rate="1.2"
                    :max-scale="7"
                    :min-scale="0.2"
                    :preview-src-list="srcList"
                    :initial-index="srcList.indexOf(i)"
                    fit="cover"
                />
            </div>
            <div class="match-bottom">其实好多奖，好多经历都已经不记得了，人这一生总是很匆忙</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.match {
    height: 600px;
    background-color: #1c2a3a;
    text-align: center;
    padding-top: 100px;
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1000px;
        height: 400px;
        margin: 0 auto;
        border: 2px solid #3e64ff;
        border-radius: 20px; /* 设置圆角 */

    }

    &-title {
        font-size: 30px;
        color: #fff;
    }
    &-info {
        margin-top: 10px;
        font-size: 16px;
        color: #e1e5e5;
    }
    &-img {
        margin-top: 40px;
    }
    &-bottom {
        color: #e1e5e5;
        margin-top: 40px;
    }
    .demo-image__error .image-slot {
        font-size: 30px;
    }
    .demo-image__error .image-slot .el-icon {
        font-size: 30px;
    }
    .demo-image__error .el-image {
        width: 100%;
        height: 200px;
    }
}








</style>
