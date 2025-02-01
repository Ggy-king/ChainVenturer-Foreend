// 封装articles页面需要用到的axios请求

import request from '@/utils/request.ts'

// 发送表单数据加图片数据加文章数据
export const getArticlesData = (num:number) => {
    return request.get(`/articles/${num}`)
}

