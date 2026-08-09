import { AxiosResponse } from 'axios'
import { publicApi } from '@/Services/apiClient'
import type { LoginResponse } from '@/Services/users/types/loginResponse'
import type { apiResponse } from './types/apiResponse'
import type { LoginRequest } from './types/loginRequest'

export async function login(loginDto: LoginRequest): Promise<LoginResponse> {
  let res: AxiosResponse<apiResponse<string>> | undefined
  try {
    res = await publicApi.post<apiResponse<string>>(
      '/user/authenticate',
      loginDto
    )

    console.log('Login response:', res)
  } catch (error) {
    console.error('Login request failed:', res)
    throw error
  }

  const response: LoginResponse = {
    isAuthenticated: true,
    token: res.data.value.token,
    error: loginDto.username,
  }
  return response
}
