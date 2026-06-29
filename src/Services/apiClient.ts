import axios, { type AxiosErroe } from 'axios'
import { getAuthToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

apiClient.interceptors.request.use(
    (config) => {
        const token = getAuthToken()
    }
