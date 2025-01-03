<!-- 导航卡片 -->
<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
    <!-- 头部标题 -->
    <header><el-icon><Medal /></el-icon>&nbsp;热门</header>

    <el-tabs
        v-model="activeName"
        type="card"
        @tab-click="handleClick"
    >
        <el-tab-pane label="全部" name="first">
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            <el-card shadow="hover">
                <div class="nav">
                    <img src="../../assets/images/navigator-icon.webp" alt="">
                    <div class="nav-main">
                        <span>DappRadar</span>
                        <span class="ellipsis">去中心化应用商店</span>
                    </div>
                </div>
            </el-card>
            
        </el-tab-pane>
        <el-tab-pane label="数据" name="second">Config</el-tab-pane>
        <el-tab-pane label="工具" name="third">Role</el-tab-pane>
        <el-tab-pane label="BTC" name="fourth">Task</el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
header {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 10px;
    .el-icon {
        font-size: 20px;
        vertical-align: middle;
    }
    
}

.el-tabs {
    margin-bottom: 60px;
    :deep(.el-tabs__header) {
        border: none;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            height: 38px;
            margin: 0 5px;
            border-radius: 20px;
            border: 1px solid#f5f5f5;
            font-weight: 600;
            color: #89939e;
            background-color: #f2f3f5;
            
        }
        .el-tabs__item.is-active {
            color: #ae782c;
            background-color: #fff7dd;
        }
        .el-tabs__item:hover {
            color: #ae782c;
        }
    }
    

    .el-tab-pane {
        display: flex;
        flex-wrap: wrap;
        .el-card {
            width: 220px;
            height: 76px;
            margin-right: 25px;
            margin-bottom: 20px;
            border-radius: 14px;
            :deep(.el-card__body) {
                height: 100%;
                width: 100%;
            }
            .nav {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                img {
                    width: 40px;
                    height: 40px;
                    margin-right: 4px;
                }
                .nav-main {
                    span:first-child {
                        font-size: 14px;
                        font-weight: 600;
                        color: #000;
                    }
                    span:last-child {
                        font-size: 12px;
                    }
                }
            }
            
        }
        .el-card:nth-child(5n) {
            margin-right: 0;
        }
    }
}

</style>
