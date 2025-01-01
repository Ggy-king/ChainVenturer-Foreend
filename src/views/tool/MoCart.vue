<script setup lang="ts">


</script>

<template>
  <el-tabs type="border-card">
        <el-tab-pane label="常用">

            <!-- 每一个卡片 -->
            <el-card shadow="hover" style="max-width: 340px">
                <template #header >
                    <div class="card-head">
                        <div>
                            <img src="./tool-s-1.png" alt="">
                            <span>盈亏比计算</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content">方便您计算加密资产的盈亏，支持多种货币和交易类型</p>
                <span class="card-bottom">
                    <span><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

            <el-card shadow="hover" style="max-width: 340px">
                <template #header >
                    <div class="card-head">
                        <div>
                            <img src="./tool-s-1.png" alt="">
                            <span>盈亏比计算</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content">方便您计算加密资产的盈亏，支持多种货币和交易类型</p>
                <span class="card-bottom">
                    <span><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

            <el-card shadow="hover" style="max-width: 340px">
                <template #header >
                    <div class="card-head">
                        <div>
                            <img src="./tool-s-1.png" alt="">
                            <span>盈亏比计算</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content">方便您计算加密资产的盈亏，支持多种货币和交易类型</p>
                <span class="card-bottom">
                    <span><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

            <el-card shadow="hover" style="max-width: 340px">
                <template #header >
                    <div class="card-head">
                        <div>
                            <img src="./tool-s-1.png" alt="">
                            <span>盈亏比计算</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content">方便您计算加密资产的盈亏，支持多种货币和交易类型</p>
                <span class="card-bottom">
                    <span><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

            <el-card shadow="hover" style="max-width: 340px">
                <template #header >
                    <div class="card-head">
                        <div>
                            <img src="./tool-s-1.png" alt="">
                            <span>盈亏比计算</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content">方便您计算加密资产的盈亏，支持多种货币和交易类型</p>
                <span class="card-bottom">
                    <span><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

            
        </el-tab-pane>


        <el-tab-pane label="开发工具">开发工具</el-tab-pane>


        <el-tab-pane label="效率计算">效率计算</el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
.el-tabs {
    :deep(.el-tabs__header) {
        background-color: #fff;
        .el-tabs__item {
            color: #89939e;
        }
        .el-tabs__item.is-active {
            color: #ae782c;
        }
        .el-tabs__item:hover {
            color: #ae782c;
        }
    }
    .el-tab-pane {
        display: flex;
        flex-wrap: wrap;
        
        .el-card {
            margin: 20px;
            color: #89939e;
            .card-head {
                display: flex;
                justify-content: space-between;
                div {
                    
                    span {
                        font-size: 16px;
                        font-weight: 600;
                        color: #ae782c;
                    }
                    img {
                        width: 24px;
                        height: 24px;
                        vertical-align: bottom;
                        margin-right: 10px;
                    }
                }
                .el-icon {
                    font-size: 20px;
                    color: #ae782c;
                }
            }

            .card-content {
                font-size: 12px;
                margin-bottom: 20px;
            }

            .card-bottom {
                display: inline-block;
                font-size: 12px;
                font-style: none;
                span {
                    padding: 4px;
                    border-radius: 4px;
                }
                span:nth-child(1) {
                    color: #4378ff;
                    background-color: #f0f4ff;
                }
                span:nth-child(2) {
                    color: #f23f58;
                    margin-left: 10px;
                    background-color: #f8ecec;
                }
                span:nth-child(3) {
                    color: #00b98c;
                    margin-left: 10px;
                    background-color: #f1f9f7;
                }
            }
    }
}
}
</style>
