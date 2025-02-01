<!-- 文章列表 -->

<script setup lang="ts">
import { useRouter } from 'vue-router';


// -------------接收文章列表的渲染参数
const articlesList = withDefaults(defineProps<{
  list: any
}>(),{
  list: []
})

// 跳转文章
const router = useRouter()
const handleToEssay = (id:string) => {
  router.push({name: 'essay',params: { id } })
}

const count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const load = () => {
  // count.value += 2
}




</script>

<template>

    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in articlesList.list" :key="i._id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.imgPath" :alt="i.title" @click="handleToEssay(i._id)">
              <div class="info-cart-content">
                  <span class="title" @click="handleToEssay(i._id)" >{{ i.title }}</span>
                  <span class="introduce ellipsis">{{ i.summarize }}</span>
                  <div class="foot">
                    <span class="foot-left"><b>{{ i.topic }}</b><strong> · </strong>{{ i.put_time }}</span>
                    <span class="foot-right"> 
                        <span>
                          <el-icon><View /></el-icon>{{ i.view_num }}
                        </span>
                        <span 
                          style="cursor: pointer;"
                        >
                          <el-icon><Star /></el-icon>收藏
                        </span>
                        <span>
                          <el-icon><Flag /></el-icon>已展示
                        </span>
                      </span>
                  </div>
              </div>
            </div>
        </li>
    </ul>


</template>

<style scoped lang="scss">

.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;

}

.info-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #f2f2f2;

  img {
    width: 200px;
    height: 136px;
    border-radius: 6px;
    margin-right: 14px;
    cursor: pointer;
  }

  .info-cart-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 136px;
    width: 586px;
    .title {
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
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
        font-size: 16px;
      }
      &-right {
        float: right;
        display: flex;
        span {
          display: flex;
          align-items: center;
          margin-left: 30px;
          .el-icon {
            font-size: 16px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}


</style>
