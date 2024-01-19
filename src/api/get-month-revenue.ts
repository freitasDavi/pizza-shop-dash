import { api } from '@/lib/axios'

interface GetMonthReveneueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthReveneue() {
  const response = await api.get<GetMonthReveneueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
