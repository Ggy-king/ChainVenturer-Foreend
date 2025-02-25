// 封装essay页面需要用到的axios请求
import request from '@/utils/request'

// 获取某文章
export const getEssayOne = (id:string) => {
    return request.get('/articles',{
        params: { id }
    })
}

// 收藏某文章
export const putCollectEssay = (id:string) => {
    return request.put('/users/collect',{
        id
    })
}
// 渲染收藏的文章
export const getCollectEssay = () => {
    return request.get('/users/collect')
}