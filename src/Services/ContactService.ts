import { useQuery } from '@tanstack/react-query'
import type { ContactType } from '../pages/contacts/types/ContactTypes'
import type { ApiResponse } from './ApiResponse'
import { publicApi } from './apiClient'

export const useContactTypes = () => {
  return useQuery({
    queryKey: ['contactTypes'],
    queryFn: async () => {
      const res =
        await publicApi.get<ApiResponse<ContactType[]>>('api/contact/state')
      console.log('response:', res)
      console.log('data:', res.data)
      return res.data.Value
    },
  })
}
