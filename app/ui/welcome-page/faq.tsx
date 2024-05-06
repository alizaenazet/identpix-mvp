'use client'
import Image from "next/image";
import { useState } from "react";

export default function Faq({
question,
answer
}:{
question: string,
answer: string
}) {
const [isOpen, setOpen] = useState(false)
  return (
    <div className="w-full  flex flex-col gap-1 items-start justify-start border-b-2  border-black">
    <button onClick={() => setOpen(!isOpen)} className="w-full py-1 flex flex-row items-center justify-between">
        <p className="text-xs md:text-base font-medium">{question}</p>
            <Image
            src={`/arrow-${isOpen ? "down" : "right"}.svg`}
            width={18}
            height={18}
            alt="closed icon"
            />
    </button>
    {isOpen && <p className="text-xs md:text-base ">{answer}</p>}
    </div>
  )
}
