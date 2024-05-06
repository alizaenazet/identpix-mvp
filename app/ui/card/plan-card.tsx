import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { string } from 'zod'

export default function PlanCard({
    imageUrl,
    title,
    description,
    price,
    piece,
    specificationList 
}:{
    imageUrl: string,
    title: string,
    description: string,
    price: string,
    piece: string,
    specificationList: string[]
    }) {
  return (
    <div className='flex  flex-col items-start rounded-sm justify-center md:justify-between gap-1.5 w-full bg-slate-100 py-1.5 px-1 md:py-6 md:w-80 lg:w-64 md:min-h-[342px]'>
        <div className='flex  flex-col items-start justify-center gap-1.5 w-full '>
        <div className='flex flex-col gap-1 md:min-h-[165px] md:justify-between '>
        <Image src={imageUrl} width={35} height={35} alt='plan icon'/>
        <div className='flex flex-col gap-1'>
        <h3 className='text-black text-lg font-semibold md:text-2xl'>{title}</h3>
        <p className='text-black text-sm '>{description}</p>
        </div>
        <div className='flex flex-col gap-1'>
        <p className='text-black text-sm font-bold'>$ {price}/{piece}</p>
        <Separator orientation="horizontal" />
        </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
            {
                specificationList.map((spec) => (
                <div key={spec} className='flex flex-row gap-1 items-center justify-center'>
                    <Image src={"/check.svg"} width={12} height={12} alt='check-icon'/>
                    <p className='text-xs font-normal'>{spec}</p>
                </div>
                ))
            }
        </div>
        </div>
        <Link className='w-full' href={"/register"}>
            <Button className="w-full h-8 bg-black">try now !</Button>
        </Link>
    </div>
  )
}
