import { useQuery } from '@tanstack/react-query'
import { contactTypes } from '../pages/contacts/types/ContactTypes'
import { apiClient } from './apiClient'

export const useContactTypes = () => {
  return useQuery({
    queryKey: ['contactTypes'],
    queryFn: async () => {
      return contactTypes
    },
  })
}

queryfn: async () => {
  const response =
    await apiClient.get<ApiResponse<contactTypes[]>>('/api/contactTypes')
  return response.data.value
}
