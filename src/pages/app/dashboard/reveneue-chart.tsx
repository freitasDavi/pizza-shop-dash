import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getDailyReveneueInPeriod } from '@/api/get-daily-reveneue-in-period'

const data = [
  {
    date: '10/12',
    revenue: 1200,
  },
  {
    date: '11/12',
    revenue: 2000,
  },
  {
    date: '12/12',
    revenue: 300,
  },
  {
    date: '13/12',
    revenue: 1500,
  },
  {
    date: '14/12',
    revenue: 700,
  },
  {
    date: '15/12',
    revenue: 1260,
  },
  {
    date: '16/12',
    revenue: 1000,
  },
]

export function ReveneueChart() {
  const { data: dailyReveneueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period'],
    queryFn: getDailyReveneueInPeriod,
  })

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      {dailyReveneueInPeriod && (
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyReveneueInPeriod} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet['500']}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      )}
    </Card>
  )
}
