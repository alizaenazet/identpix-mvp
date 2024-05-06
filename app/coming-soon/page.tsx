import EmailForm  from "@/app/ui/coming-soon/email-form";
import { Metadata } from 'next';
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Coming Soon',
};
export default function Page() {
  const headersList = headers()
  const ip = headersList.get('ip') ?? "noIp"
  
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-14 md:p-32 lg:p-55'>
        <div className='flex flex-col gap-3.5 items-start justify-center'>
            <h1 className='text-black text-xl font-semibold md:text-2xl  '>
                Coming Soon !
            </h1>
            <p className='text-sm font-medium w-full md:min-w-[446px]  md:text-base'>
              Prepare to embark on an exciting journey with us. Our product will soon be available, offering you a delightful firsthand experience.<br/>Don&apos;t miss out on any updates in your email!
            </p>
            <EmailForm ip={ip}/>
        </div>
    </main>
  )
}
