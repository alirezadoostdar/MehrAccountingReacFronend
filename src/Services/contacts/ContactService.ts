import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import type { PagedResult } from '../commenTypes/PagedResult'
import type { ApiResponse } from './ApiResponse'
import type { ContactListItem } from './types/contactListItem'
import type { PaginationQueryParams } from './types/paginationQueryParams'
import { StateListItem } from './types/stateListItem'

export const getContacts = ({
  page,
  pageSize,
  search,
}: PaginationQueryParams) => {
  return useQuery({
    queryKey: ['contactList', page, pageSize, search],
    queryFn: async () => {
      const res = await apiClient.get<
        ApiResponse<PagedResult<ContactListItem>>
      >('/contact', {
        params: { page, pageSize, search },
      })
      console.log('res.data.value', res.data.value)
      return res.data.value
    },
  })
}

export const getStatesList = () => {
  return useQuery({
    queryKey: ['stateList'],
    queryFn: async () => {
      const res =
        await apiClient.get<ApiResponse<StateListItem[]>>('/contact/state')
      return res.data.value
    },
  })
}
