import axios, { type AxiosError } from 'axios'
import { getAuthToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

export type ApiResponse<T> = {
  Value: T
  isSuccess: boolean
  isfailure: boolean
  error: {
    code: string
    description: string
    type: number
  }
}
