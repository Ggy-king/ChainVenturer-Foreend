<!-- 简洁浏览   -->

<script setup lang="ts">

const list =[
    {
        id: 1,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 2,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 3,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 4,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 5,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 6,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 7,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 8,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 9,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },
    {
        id: 10,
        img:'src/assets/images/btc-icon.webp',
        name:'BTC',
        price:'$95942.00',
        increase:'1.93%'
    },

    

]
</script>

<template>
    <div class="browsing">
      <ul class="browsing-roll roll-anima">
            <li v-for="i in list" :key="i.id">
                <a href="">
                    <img :src="i.img" alt="">
                    <span>&nbsp;{{i.name}}&nbsp;</span>
                    <span>{{ i.price }}&nbsp;</span>
                    <span>{{ i.price }}&nbsp;</span>
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
