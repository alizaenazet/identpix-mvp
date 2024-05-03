import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};
export default function Page() {
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-16'>
        <div className='flex flex-col items-start gap-3.5 lg:w-[629px]'>
            <h1 className='text-black text-xl font-semibold md:text-2xl'>About IdentPix</h1>
            <p className='text-black text-sm font-medium lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
            <Link href={"/"}>
                <Button className='p-0' variant="link">Learn more</Button>
            </Link>
        </div>
    </main>
  )
}
