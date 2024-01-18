import { api } from '@/lib/axios'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface GetOrderQuery {
  pageIndex?: number | null
  orderId: string | null
  customerName: string | null
  status: string | null
}

export async function getOrders({
  pageIndex,
  customerName,
  status,
  orderId,
}: GetOrderQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
