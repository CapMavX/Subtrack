import { TrendingUp } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'August',desktop: 8000,},
  { month: 'September', desktop: 9000, },
  { month: 'October', desktop: 6000,  },
  { month: 'November', desktop: 10000,  },
  { month: 'December', desktop: 5000,  },
  { month: 'January', desktop: 11000, },
];

const chartConfig = {
  desktop: {
    label:" price",
    color: '#7B61FE',
  },

};

export function Charts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>$48000/-</CardTitle>
        <CardDescription>last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  );
}
