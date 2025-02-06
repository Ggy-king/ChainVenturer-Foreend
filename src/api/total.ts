// 封装total页面需要用到的axios请求
import request from '@/utils/request.ts'

// 获取行情简版数据


// 获取轮播图数据


// 获取标签页不同内容的数据(6组)
// 先测试一组

export const getTabsDate = () => {
    return request.get('/users')
}

export const postTabsDate = () => {
    return request.post('/users',{
        username: 'admin',
        password: '123456'
    })
}

