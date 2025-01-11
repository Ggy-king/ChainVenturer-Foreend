<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue';

</script>

<template>
  <div class="overall">
    <div class="overall-title">
        <div class="about">关于我 作者有话说 | <span style="color:#f23f58;">About me</span> Author has something to say</div>
        <div class="info">寒窗苦读十余载，学得全栈方明白。如果您有开发各种网站、小程序、APP等需求，亦或者是跨平台、微服务、分离开发等需要。那希望我们可以深入交流，得到您的赏识将会是我最大前行的动力！
        </div>
        <div class="link">
            <el-card>
                <IconGithub/>
                <span>
                    <div>查看我的 Github</div>
                    <div>我的学习成果及我的项目</div>
                </span>
            </el-card>
            <el-card>
                <IconGithub/>
                <span>
                    <div>查看我的 Github</div>
                    <div>我的学习成果及我的项目</div>
                </span>
            </el-card>
        </div>
    </div>
    <!-- <img class="overall-image"></img> -->
  </div>
</template>

<style scoped lang="scss">
.overall {
  height: 600px;
  background-color: 240, 245, 249;
  &-title {
    width: 550px;
    height: 300px;
    margin-top: 150px;
    line-height: 1.2;
    .about {
        width: 510px;
        height: 72px;
        font-size: 30px;
        color: #000;
    }
    .info {
        margin-top: 30px;
        font-size: 18px;
        padding-right: 20px;
        color: #59636D;
    }
    .link {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        padding-right: 20px;
        height: 70px;
        .el-card {
            width: 240px;
            border-radius: 12px;
            :deep(.el-card__body) {
                padding: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    margin-left: 12px;
                    div:first-child {
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 6px;
                    }
                    div:last-child {
                        color: #89939E;
                    }
                }
            }
            
        }
    }
  }
}
</style>
