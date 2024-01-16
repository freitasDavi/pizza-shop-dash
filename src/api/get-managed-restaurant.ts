import { api } from '@/lib/axios'

interface GetManageRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManageRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
