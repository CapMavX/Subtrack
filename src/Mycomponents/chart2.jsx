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
  { month: 'Wordpress', desktop: 20000, },
  { month: 'Microsoft', desktop: 30000, },
  { month: 'Google Ads', desktop: 18000, },
  { month: 'linkend', desktop: 35000,},
  { month: 'Apolo', desktop: 17000,},

];

const chartConfig = {
  desktop: {
    label: "price",
    color: '#7B61FE',
  },

};

export function Charts2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>$8000/-</CardTitle>
        <CardDescription>per month</CardDescription>
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
