import request from '@/utils/request'

export const getRatesDate = () => {
    return request.get('/rates')
}