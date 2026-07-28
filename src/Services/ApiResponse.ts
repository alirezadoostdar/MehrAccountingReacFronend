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
