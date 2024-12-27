<!-- 标签式浏览内容页面 -->

<script setup lang="ts">
import { ref } from 'vue'


const count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const load = () => {
  // count.value += 2
}
</script>

<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
            <div class="info-cart">
              <img src="../../assets/images/total-cart-1.jpg" alt="">
              <div class="info-cart-content">
                <span class="title">印度经济正在崩溃，这可能会让整个世界都崩溃</span>
                <span class="introduce ellipsis">币界网报道： 印度经济正在螺旋式上升。卢比正在像石头一样下沉，随之而来的是贸易赤字、资产转义大发大法师</span>

                <div class="foot">
                  <span class="foot-left"><b>区块链</b> · 2024-12-26 20:45</span>
                  <span class="foot-right"> 
                    <el-icon><View /></el-icon> 观看
                    <el-icon><Star /></el-icon> 收藏
                    <el-icon><Flag /></el-icon> 已展示
                  </span>
                </div>
              </div>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.infinite-list {
  // height: 400px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  

  
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;

}

.info-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #bac3ce;

  img {
    width: 200px;
    height: 130px;
    margin-right: 14px;
  }

  .info-cart-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    width: 586px;
    .title {
      font-size: 18px;
      font-weight: 600;
    }
    .introduce {
      flex: 1;

      font-size: 14px;
      color: #59636D;
    }
    .foot {
      color: #89939E;
      &-left b {
        text-decoration: underline;
        color: #e96868;
      }
      &-right {
        float: right;
        .el-icon {
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
  }
}


</style>
