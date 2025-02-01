// 封装写文章axios接口

import request from '@/utils/request'

// 发送写作及相关信息
export const postWriteInfo = (formObj:Record<string,any>) => {
    return request.post('/write',{
        formObj
    })
}