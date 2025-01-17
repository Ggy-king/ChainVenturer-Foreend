<!-- 顶部导航栏 -->
<script setup lang="ts">
import { ref,toRefs,reactive } from 'vue'
import { useRouter } from 'vue-router';


import { Search } from '@element-plus/icons-vue'
import avatar from '@/assets/images/user-avatar.png'

import { UrlStore } from '@/stores'

// 头像相关
const state = reactive({
  circleUrl:
  avatar,
})


// 搜索相关
const input = ref('')
const { circleUrl } = toRefs(state)

const router = useRouter()

const url = UrlStore()
const handleSearch = () => {
 window.open(`${url.baseUrl}/search`)
 
}

</script>

<template>
  <div class="con_nav">
    <div class="center">

      <!-- 图标 -->
      <div class="logo">
        <h1><a href="/" title="返回首页">链界探索者-基于数字货币的智域探索平台</a></h1>
        <span>链界探索者</span>
      </div>

      <!-- 导航栏 -->
      <ul class="nav">
        <li><router-link :to="{ name:'total'  }">首页</router-link></li>
        <li><router-link :to="{ name:'market' }">行情</router-link></li>
        <li><router-link :to="{ name:'topic' }">专题</router-link></li>
        <li><router-link :to="{ name:'news' }">快讯</router-link></li>
        <li><router-link :to="{ name:'tool' }">工具</router-link></li>
        <li><router-link :to="{ name:'rates'}">汇率</router-link></li>
        <li><router-link :to="{ name:'articles' }">文章</router-link></li>
        <li><router-link :to="{ name:'write' }">创作</router-link></li>
        <li><router-link :to="{ name:'navigator' }">导航</router-link></li>
        <li><router-link :to="{ name:'developer' }">开发者</router-link></li>
      </ul>

      <div class="component">
        <!-- 搜索框 -->
        <div class="mt-4">
          <el-input
            v-model="input"
            placeholder="请搜索"
            class="input-with-select"
          >
            <template #append>
              <el-button style="background-color: #f2f3f4;" :icon="Search" @click="handleSearch" />
            </template>
          </el-input>
        </div>

        <!-- 头像 -->
        <el-avatar :size="40" :src="circleUrl" />

        <!-- 登录 -->
        <el-button class="login" ><el-icon><Position /></el-icon>&nbsp;&nbsp;登录</el-button>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.con_nav {
 
  height: 60px;
  background: linear-gradient(to right, #f7d049, #ff9800);
  background: linear-gradient(to right, #f7d049, #66bb6a);
  
  box-shadow:0 4px 10px rgba(0,0,0,0.3);
  font-size: 12px;
  color: #000;
  line-height: 60px;
  transition: all .8s ease;
  
  .center {
    width: 1200px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;

    .logo {
      display: flex;
      justify-content: start;
        h1 {
          margin: 0;
          font-size: 1.5em;
          text-indent: -9999px; /* 隐藏文字 */
          background-image: url('@/assets/images/logoWirte.png'); /* 使用背景图像作为Logo */
          background-size: contain; /* 保持图像比例 */
          background-repeat: no-repeat; /* 不重复图像 */
          width: 70px; /* 设置宽度，根据Logo大小调整 */
          height: 100%; /* 设置高度，根据Logo大小调整 */
        
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          
      }
      span {
            color: #19425a;
            font-size: 20px;
            font-weight: 600;
          }
    }
    .nav {
      display: flex;
      font-size: 16px;
      li {
        padding: 0 10px;
        &:hover {
          color: #fff;
        }
        a.router-link-active {
          color: #fff;
        }
      }
    }
    
    .component {
      display: flex;
      
        .el-input {
          font-size: 12px;
          width: 260px;
          --el-input-placeholder-color: #70757b;
          --el-input-text-color: #000;
          --el-input-bg-color: #f2f3f4;
          --el-input-focus-border-color: #f2f3f4;
          --el-input-hover-border-color: #f2f3f4;
          --el-input-border-color: #f2f3f4;
          --el-input-focus-bg-color: #fff;


        }
        .el-avatar {
          margin: auto 10px;
          margin-left: 40px;
        }
        .login {
          margin: auto 0;
          border-color: #fff;
          font-size: 12px;
          color: #000;
          background-color: transparent;

          &:hover {
            color: #fff;
          }
        }
    }
    
}
}
</style>
