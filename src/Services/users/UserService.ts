import { AxiosError, AxiosResponse } from 'axios'
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

    console.log('Login response:', res.data)
    if (res.status === 200 && res.data.isSuccess) {
      return {
        isAuthenticated: true,
        token: res.data.value,
        error: '',
      }
    } else {
      return {
        isAuthenticated: false,
        token: '',
        error: res.data.errorMessage,
      }
    }
  } catch (err) {
    console.log('RAW ERROR:', err)
    console.log('IS AXIOS ERROR:', err instanceof AxiosError)
    if (err instanceof AxiosError) {
      console.log('STATUS:', err.response?.status)
      console.log('DATA:', err.response?.data)
      console.log('HEADERS:', err.response?.headers)
    }
    throw err
  }

  const response: LoginResponse = {
    isAuthenticated: true,
    token: res.data.value.token,
    error: loginDto.username,
  }
  return response
}
