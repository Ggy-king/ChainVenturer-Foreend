<!-- 顶部导航栏 -->
<script setup lang="ts">
import { ref,toRefs,reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'

const state = reactive({
  circleUrl:
    'src/assets/images/user-avatar.png',
})



const input = ref('')
const { circleUrl } = toRefs(state)


</script>

<template>
  <div class="con_nav">
    <div class="center">

      <!-- 图标 -->
      <h1 class="logo">链界探索者</h1>

      <!-- 导航栏 -->
      <ul class="nav">
        <li><router-link :to="{ name:'total'  }">首页</router-link></li>
        <li><router-link :to="{ name:'market' }">行情</router-link></li>
        <li><router-link :to="{ name:'topic' }">专题</router-link></li>
        <li><router-link :to="{ name:'news' }">快讯</router-link></li>
        <li><router-link :to="{ name:'tool' }">工具</router-link></li>
        <li><router-link :to="{ name:'rates'}">汇率</router-link></li>
        <li><router-link :to="{ name:'data' }">数据</router-link></li>
        <li><router-link :to="{ name:'articles' }">文章</router-link></li>
        <li><router-link :to="{ name:'write' }">创作</router-link></li>
        <li><router-link :to="{ name:'navigator' }">导航</router-link></li>
      </ul>

      <div class="component">
        <!-- 搜索框 -->
        <div class="mt-4">
          <el-input
            v-model="input"
            style="max-width: 600px;"
            placeholder="请搜索"
            class="input-with-select"
          >
            <template #append>
              <el-button :icon="Search" />
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
  // background: linear-gradient(to right, #f7d049, #ff9800);
  background: linear-gradient(to right, #f7d049, #66bb6a);
  // background: linear-gradient(to right, #f7d049, #fbc02d);
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
      color: #fff;
    }
    .nav {
      display: flex;
      font-size: 16px;
      li {
        padding: 0 10px;
        a.router-link-active {
          color: #fff;
        }
      }
    }
    
    .component {
      display: flex;
      
        .el-input {
          font-size: 12px;
          --el-input-placeholder-color: #757575;
          --el-input-text-color: #000;
          --el-input-focus-border-color: #c6d5e7;
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
