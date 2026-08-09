import { publicApi } from '@/Services/apiClient'
import type { LoginResponse } from '@/Services/users/types/loginResponse'
import type { apiResponse } from './types/apiResponse'
import type { LoginRequest } from './types/loginRequest'

export async function login(loginDto: LoginRequest): Promise<LoginResponse> {
  const res = await publicApi.post<apiResponse<string>>(
    '/user/authenticate',
    loginDto
  )
  console.log('Login response:', res.data)
  const response: LoginResponse = {
    isAuthenticated: true,
    token: res.data.value.token,
    error: loginDto.username,
  }
  return response
}
