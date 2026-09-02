import { useQuery } from '@tanstack/react-query'

export const useStatesList = () => {
  return useQuery({
    queryKey: ['stateList'],
    queryFn: async () => {
      const res =
        await apiClient.get<ApiResponse<StateListItem[]>>('/contact/state')
      return res.data.value
    },
  })
}
