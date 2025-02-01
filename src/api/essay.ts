// 封装essay页面需要用到的axios请求
import request from '@/utils/request'

export const getEssayOne = (id:string) => {
    return request.get('/articles',{
        params: {
            id
        }
    })
}