import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 15 * 1000,
})
// 请求拦截
request.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 请求拦截
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误(400)'
          break
        case 403:
          error.message = '拒绝访问(403)'
          break
        case 404:
          error.message = '请求出错(404)'
          break
        case 408:
          error.message = '请求超时(408)'
          break
        case 500:
          error.message = '服务器错误(500)'
          break
        case 501:
          error.message = '服务未实现(501)'
          break
        case 502:
          error.message = '网络错误(502)'
          break
        case 503:
          error.message = '服务不可用(503)'
          break
        case 504:
          error.message = '网络超时(504)'
          break
        case 505:
          error.message = 'HTTP版本不受支持(505)'
          break
        default:
          error.message = `连接出错(${error.response.status})!`
      }
    }
    if (error.message.includes('timeout')) error.message = '网络请求超时'
    if (error.message.includes('Network'))
      error.message = window.navigator.onLine ? '服务器网络异常异常' : '本地网络异常'
    return Promise.reject(error)
  },
)

export default request
