import axios from 'axios'

axios.default.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const fetch = axios.create({
  timeout: 1000 * 60
})

fetch.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

fetch.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.resolve(error)
})

export default fetch
