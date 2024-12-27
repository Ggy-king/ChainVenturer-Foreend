<!-- 简洁浏览   -->

<script setup lang="ts">

</script>

<template>
    <div class="browsing">
      <ul class="browsing-roll roll-anima">
        <li><a href="">
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            <li><a href="">
                    <!-- <span class="img"></span> -->
                    <img src="../assets/images/btc-icon.webp" alt="">
                    <span> BTC </span>
                    <span>$95942.00 </span>
                    <span>1.93% </span>
                    <el-icon><Bottom /></el-icon>
                </a>
            </li>
            
      </ul>
    </div>
</template>

<style scoped lang="scss">
@keyframes roll-anima{
    from{
        left: 400px;
    }
    to{
        left: -2000px;
    }
}
.roll-anima {
    animation: roll-anima 30s linear 0s infinite normal backwards;
}

.browsing {
    position: relative;
    overflow: hidden;
    height: 38px;
    margin-bottom: 14px;
    border-top: 1px solid #d0d1d3;
    border-bottom: 1px solid #d0d1d3;
    font-size: 13px;

    &-roll {
    position: absolute;
    left: 400px;
    display: flex;
    height: 100%;
   
    &:hover {
        animation-play-state: paused;
    }
        li {
            margin: auto 10px;

            a {
                display: block;
                height: 16px;
                width: 200px;
                line-height: 16px;
                img {
                display: inline-block;
                width: 16px;
                height: 16px;
                vertical-align: top;
                }
            }
        }
        li:last-child {
            margin-right: 1000px;
        }
}
}

</style>
