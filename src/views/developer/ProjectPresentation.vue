<script setup lang="ts">

</script>


<template>
    <div class="project">
        <div class="center">
            <div class="head">
                <div class="head-title">项目展示 | Project show</div>
                <div class="head-info">这里展示我在大学里做过的项目，包括校企合作的、独立接活的、自己练习的，大大小小20多个，因篇幅有限故少罗列几个</div>
            </div>
            
            <div class="project-detail" style="height: 370px;">
                <img src="@/assets/images/developer-project-1.png" alt="" style="padding-right: 20px;">
                <div class="project-detail-characters">
                    <h3>链界探索者-基于数字货币的智域探索平台</h3>
                    <span>这个当然是本网站啦，使用vue3、vue-router、pinia、vite、sass、typescript、axios、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建</span>
                </div>
            </div>

            <div class="project-detail">
                <div class="project-detail-characters">
                    <h3>链界探索者网站</h3>
                    <span>这个当然是本网站啦，使用vue3、vuerouter、pinia、vite、sass、typescript、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建</span>
                </div>
                <img src="@/assets/images/developer-img.png" alt="">
            </div>

            <div class="project-detail">
                <img src="@/assets/images/developer-img.png" alt="">
                <div class="project-detail-characters">
                    <h3>链界探索者网站</h3>
                    <span>这个当然是本网站啦，使用vue3、vuerouter、pinia、vite、sass、typescript、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建</span>
                </div>
            </div>

            <div class="project-detail">
                <div class="project-detail-characters">
                    <h3>链界探索者网站</h3>
                    <span>这个当然是本网站啦，使用vue3、vuerouter、pinia、vite、sass、typescript、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建</span>
                </div>
                <img src="@/assets/images/developer-img.png" alt="">
            </div>


        </div>
    </div>
</template>

<style scoped lang="scss">
.project {
    background-color: #0d1829;
    padding: 90px 0;
    .center {
        width: 1200px;
        margin: 0 auto;
    }
    .head {
        text-align: center;
        margin-bottom: 40px;
        &-title {
            font-size: 32px;
            color: #fff;
        }
        &-info {
            margin: auto;

            margin-top: 10px;
            width: 400px;
            font-size: 16px;
            color: #e1e5e5;
        }
    }
    &-detail {
        display: flex;
        justify-content: center;
        height: 200px;
        margin-bottom: 40px;
        &-characters {
            width: 410px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h3 {
                color: #fff;
                margin-bottom: 10px;
            }
            span {
                color: #cad5e0;
                font-size: 16px;
            }
        }

    }
}








</style>
