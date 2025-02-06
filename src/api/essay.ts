// 封装essay页面需要用到的axios请求
import request from '@/utils/request'

// 获取某文章
export const getEssayOne = (id:string) => {
    return request.get('/articles',{
        params: { id }
    })
}
