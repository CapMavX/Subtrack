"use client"

import React from 'react'
import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "Jan",  mobile: 6000 },
    { month: "Feb", mobile: 7000 },
    { month: "Mar", mobile: 8000 },
    { month: "Apr", mobile: 6000 },
    { month: "May",  mobile: 7000 },
    { month: "Jun",  mobile: 8000 },
  ]
  
  const chartConfig = {
   
    mobile: {
      label: "Price",
      color: "#7B61FF",
    },
  }

export default function MyExpenses() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-4">
        <CardTitle className="font-[Montserrat] text-[32px] font-[700] leading-[39.01px]">$8000</CardTitle>
        <CardDescription className="text-[12px] font-[Montserrat] leading-[14.63px] font-[300]">per month</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={2} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={2} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}

