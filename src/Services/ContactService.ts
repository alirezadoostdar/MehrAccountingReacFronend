import { useQuery } from '@tanstack/react-query'
import type { ContactType } from '../pages/contacts/types/ContactTypes'
import type { ApiResponse } from './ApiResponse'
import { publicApi } from './apiClient'

export const useContactTypes = () => {
  return useQuery({
    queryKey: ['contactTypes'],
    queryFn: async () => {
      const res =
        await publicApi.get<ApiResponse<ContactType[]>>('contact/state')
      return res.data.value
    },
  })
}
