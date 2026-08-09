import { publicApi } from '@/Services/apiClient'
import type { LoginResponse } from '@/Services/users/types/loginResponse'
import type { LoginRequest } from './types/loginRequest'

export async function login(loginDto: LoginRequest): LoginResponse {
  const res = await publicApi.post('/user/authenticate', loginDto)
  console.log('Login response:', res.data)
  const response: LoginResponse = {
    isAuthenticated: true,
    token: res.data.value.token,
    error: loginDto.username,
  }
  return response
}
