import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/auth-store'
import { apiClient } from '../apiClient'
import type { ContactType } from '../pages/contacts/types/ContactTypes'
import type { ApiResponse } from './ApiResponse'
import { publicApi } from './apiClient'
import type { ContactListItem } from './types/contactListItem'

export const useContactTypes = () => {
  return useQuery({
    queryKey: ['contactTypes'],
    queryFn: async () => {
      const token = useAuthStore.getState().auth.accessToken
      console.log('token:', token)
      /*       const list = await getContacts()
      console.log('Fetched contacts:', list) */
      const res =
        await publicApi.get<ApiResponse<ContactType[]>>('/contact/state')
      return res.data.value
    },
  })
}

export async function getContacts(): Promise<ContactListItem[]> {
  const res = await apiClient.get<ApiResponse<ContactListItem[]>>('/contacts')
  return res.data.value
}
