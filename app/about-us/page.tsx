import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};
export default function Page() {
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-16 mt-16'>
        <div className='flex flex-col items-start gap-3.5 lg:w-[629px]'>
            <h1 className='text-black text-xl font-semibold md:text-2xl'>About IdentPix</h1>
            <p className='text-black text-sm lg:text-base'>Effortless photo search boosts productivity in various tasks. IdentPix, a photo distribution service app, streamlines processes with AI-driven facial classification technology. Additionally, we offer unlimited access, with a web app model and feature access designed to benefit both providers and users.<br/><br/>
            We strive to be an innovative platform for photo distribution, seamlessly integrating AI technology to introduce an improved framework. Our platform is dependable, user-friendly, and tailored to meet market demands.<br/><br/>
            Our goal is to simplify access for users through an efficient distribution flow, made possible by an accessible web app accessible via a single link. This saves time by expediting photo distribution, organizing photos by individuals, and ensuring secure privacy.
            </p>
            <Link href={"/"}>
                <Button className='p-0' variant="link">Learn more</Button>
            </Link>
        </div>
    </main>
  )
}
