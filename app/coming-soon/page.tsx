import EmailForm  from "@/app/ui/coming-soon/email-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon',
};
export default function Page() {
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-14 md:p-32 lg:p-55'>
        <div className='flex flex-col gap-3.5 items-start justify-center'>
            <h1 className='text-black text-xl font-semibold md:text-2xl  '>
                Coming Soon !
            </h1>
            <p className='text-sm font-medium w-full md:min-w-[446px]  md:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            </p>
            <EmailForm />
        </div>
    </main>
  )
}
