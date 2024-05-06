import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { Metadata } from 'next';

import MonthlyPlan from '@/app/ui/pricing/monthly-plan';
import YearlyPlan from '@/app/ui/pricing/yearly-plan';

export const metadata: Metadata = {
  title: 'Pricing',
};
export default function Page() {
  return (
    <main className='flex w-screen flex-col  justify-start items-center p-3.5 pb-6 md:p-20 lg:p-28 mt-16 md:mt-0'>
        <div className='flex flex-col gap-4  justify-start items-center w-full'>
        <h1 className='text-center text-black font-semibold text-2xl '>Choose your plan</h1>
        <Tabs defaultValue="monthly" className="w-full flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="monthly"><MonthlyPlan/></TabsContent>
          <TabsContent className="w-full" value="yearly"><YearlyPlan/></TabsContent>
        </Tabs>

        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-black text-sm font-medium text-center">Try now and get access to a free trial.</p>
          <Link className='w-full' href={"/register"}>
          <Button className="w-full">Register</Button> 
          </Link>
        </div>
        </div>
    </main>
  )
}
