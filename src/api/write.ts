// 封装写文章axios接口
import request from '@/utils/request'

// 发送写作及相关信息
export const postWriteInfo = (formObj:Record<string,any>) => {
    return request.post('/write',{
        formObj
    })
}

// 修改文章
export const patchWriteEdit = (formObj:Record<string,any>) => {
    return request.patch('/write/update',{
        formObj
    })
}

// 删除文章
export const deleteWriteOne = (id:string,imgUrl:string) => {
    return request.delete('/write/de',{
        params: { id,imgUrl },
    })
}