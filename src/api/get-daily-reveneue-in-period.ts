import { api } from '@/lib/axios'

export type GetDailyReveneueInPeriodResponse = {
  date: string
  receipt: number
}[]

interface GetDailyReveneueInPeriodQuery {
  from?: Date
  to?: Date
}

export async function getDailyReveneueInPeriod({
  from,
  to,
}: GetDailyReveneueInPeriodQuery) {
  const response = await api.get<GetDailyReveneueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
