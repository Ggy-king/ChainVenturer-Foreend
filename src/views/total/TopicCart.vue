<!-- 专题卡片 -->

<script setup lang="ts">

</script>

<template>
  <div class="topic">
    <div class="topic-header">
      <div>热议专题</div>
      <a href="#"><span>更多</span><el-icon><ArrowRight/></el-icon></a>
    </div>
    <div class="topic-main">
      <img src="https://www.528btc.com/d/file/20241227/1735270197172779.jpg" alt="">
      <div class="upper-info"></div>
      <div class="upper-info-title">美国失业率引发比特币波动，比特币全球储备化已成常态</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic {
  width: 320px;
  .topic-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('../../assets//images/btc-icon.webp');
      background-position: -34px 0px;
      background-repeat: no-repeat;
    }
    a {
      font-size: 14px;
      color: #f0b90b;
      display: flex;
      align-items: center;
      span {
        margin-right: 4px;
      }
    }
  }

  .topic-main {
    position: relative;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      
    }
    .upper-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40%;   
      background-color: #000;
      opacity: .5;
    }
    .upper-info-title {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40%;
      padding: 0 6px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;

    }
  }
}
</style>
