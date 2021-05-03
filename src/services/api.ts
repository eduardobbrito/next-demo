import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.zeedog.com.br/api/'
})

export default api
