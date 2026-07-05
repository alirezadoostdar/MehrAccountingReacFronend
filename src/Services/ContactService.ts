import { useQuery } from '@tanstack/react-query'
import { contactTypes } from '../pages/contacts/types/ContactTypes'

export const useContactTypes = () => {
  return useQuery({
    queryKey: ['contactTypes'],
    queryFn: async () => {
      return contactTypes
    },
  })
}
