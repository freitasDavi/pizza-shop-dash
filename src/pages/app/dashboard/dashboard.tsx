import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-cards'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MontheRevenueCard } from './month-revenue-card'
import { ReveneueChart } from './reveneue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MontheRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <ReveneueChart />
        </div>
      </div>
    </>
  )
}
