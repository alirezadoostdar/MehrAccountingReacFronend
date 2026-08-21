import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import type { PagedResult } from '../commenTypes/PagedResult'
import type { ApiResponse } from './ApiResponse'
import type { ContactListItem } from './types/contactListItem'

export const getContacts = () => {
  return useQuery({
    queryKey: ['contactList'],
    queryFn: async () => {
      const res = await apiClient.get<
        ApiResponse<PagedResult<ContactListItem>>
      >('/contact', {
        params: {
          page: 1,
          pageSize: 10,
          search: '',
        },
      })
      console.log('res.data.value', res.data.value)
      return res.data.value
    },
  })
}
