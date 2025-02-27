import request from '@/utils/request'

export const getToolData = () => {
    return request.get('/tool')
}