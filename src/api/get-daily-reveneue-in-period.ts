import { api } from '@/lib/axios'

export type GetDailyReveneueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyReveneueInPeriod() {
  const response = await api.get<GetDailyReveneueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
  )

  return response.data
}
