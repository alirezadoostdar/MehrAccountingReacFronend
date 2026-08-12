import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import type { ApiResponse } from './ApiResponse'
import type { ContactListItem } from './types/contactListItem'

export const getContacts = () => {
  return useQuery({
    queryKey: ['contactList'],
    queryFn: async () => {
      const res =
        await apiClient.get<ApiResponse<ContactListItem[]>>('/contact')
      return res.data.value
    },
  })
}
