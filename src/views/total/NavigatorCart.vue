<!-- 导航卡片 -->

<script setup lang="ts">

</script>

<template>
  <div class="navigator">
    <div class="navigator-header">
      <div>推荐去处</div>
    </div>
    <div class="navigator-main">
        <el-card style="max-width: 480px;">
            <img src="https://www.528btc.com/web-v2/img/nav/coinmarket.png" alt="">
            <span>加密资产价格跟踪网站</span>
            <template #footer>通过价格跟踪，投资者可以识别价格趋势和交易机会</template>
        </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigator {
  width: 320px;
  .navigator-header {
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
    
  }

  .navigator-main {
    img {
        width: 56px;
        height: 56px;
        vertical-align: middle;
        margin-right: 20px;
    }
    span {
        font-size: 16px;
        font-weight: 600;
    }
    
  }

}
</style>
