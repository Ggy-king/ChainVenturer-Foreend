<!-- 简洁浏览   -->

<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()

</script>

<template>
    <div class="browsing">
        <ul>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/money-pixie-chart.png" alt="">
                    <span>BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Top /></el-icon>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.browsing {
    height: 38px;
    margin-bottom: 14px;
    border-top: 1px solid #d0d1d3;
    border-bottom: 1px solid #d0d1d3;
    line-height: 38px;
    // background-color: pink;

    ul {
        font-size: 14px;
        li {
            img {
                display: inline-block;
                width: 18px;
                height: 18px;
                vertical-align: middle;
                // background-image: url('../assets/images/money-pixie-chart.png');
                // background-position: 34px 25px;
            }
        }
    }
}
</style>
