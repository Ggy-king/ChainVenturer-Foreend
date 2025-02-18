
<script setup lang="ts">

import SearchList from './SearchList.vue'

import { ref,watch,onMounted } from 'vue'
import { useRoute,useRouter,onBeforeRouteLeave } from 'vue-router'

import type { TabsPaneContext } from 'element-plus'

import hooks from '@/utils/hooks';

import type { Ref } from 'vue'




defineOptions({
    name: 'TotalView'
})


// 搜索
const route = useRoute()
const router = useRouter()

const inputSearch = ref('')
const handleSearch = () => {
    if(inputSearch.value.trim() === '') {
        hooks.message('请输入搜索内容','warning')

    } else {
        router.push({query: {keyword: inputSearch.value}})
    }
}

// 监听一下参数变化，如果后期传数据会自动刷新则取消监听
watch(
    () => route.query.keyword,
    (newQuery,oldQuery) => {
        inputSearch.value = newQuery as string
    },
    { immediate: true }
)



/**
 * tabs栏切换
 * - 获取数据
 * - 实现切换
 */


// tab栏切换

const index: Ref<number> = ref(0)

const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
  
  index.value = Number(tab.index)
}



</script>

<template>
    <div class="search">
        <!-- 搜索框 -->
        <el-input
            v-model="inputSearch"
            placeholder="请输入"
            class="input-with-select"
            >
            <template #append>
                <el-button @click="handleSearch">搜索</el-button>
            </template>
        </el-input>
        <div class="search-show">
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="全部" name="first" :lazy="true">
                    <SearchList />
                </el-tab-pane>

                <el-tab-pane label="文章" name="second" >
                    <SearchList :topicsList="[]" :coinsList="[]" :newsList="[]"/>
                </el-tab-pane>

                <el-tab-pane label="快讯" name="third">
                    <SearchList :essaysList="[]" :coinsList="[]" :newsList="[]"/>
                </el-tab-pane>

                <el-tab-pane label="专题" name="fourth">
                    <SearchList :essaysList="[]" :topicsList="[]" :newsList="[]"/>
                </el-tab-pane>

                <el-tab-pane label="币种" name="fifth">
                    <SearchList :essaysList="[]" :topicsList="[]" :coinsList="[]"/>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>

</template>

<style scoped lang="scss">
.el-input {
    font-size: 16px;
    width: 800px;
    height: 50px;
    margin-top: 4px;
    --el-input-placeholder-color: #70757b;
    --el-input-text-color: #000;
    --el-input-bg-color: #f1f2f3;
    --el-input-border-color: #f1f2f3;
    --el-input-focus-border-color: #00aeec;
    --el-input-hover-border-color: #f1f2f3;
    --el-input-focus-bg-color: #fff;
    .el-button {
        width: 100px;
        height: 100%;
        background-color: #4378ff;
        font-weight: 600;
        color: #fff;
    }
    .el-button:hover {
        background-color: #5f8bfb;
        color: #fff;
    }
}
.search {
    .el-tabs {
        width: 820px;
        margin-top: 20px;
        :deep(.el-tabs__nav-scroll){
            padding-right: 200px;
            border-bottom: none;

            .el-tabs__item {
                font-size: 14px;
                font-weight: 600;
                color: #4e5662;
                &:hover {
                    color: #000;
                }
            }
            .el-tabs__active-bar {
                background-color: #f7d049;
            }

            .is-active {
                color: #000;
            }
        }

        :deep(.el-tabs__nav-wrap:after){
            height: 1px;
        }

        :deep(.el-tabs__content) {
            min-height: 800px;
        }

    }
    
}

</style>
