import axios from 'axios'
import { useToken } from '../state/authState'

const authApi = axios.create({
  baseURL: 'https://dimelegends-api.onrender.com',
  withCredentials: true
})

authApi.interceptors.request.use(config => {
  const token = useToken.getState().token
  config.headers = {
    Authorization: `Bearer ${token}`
  }
  return config
})

export default authApi