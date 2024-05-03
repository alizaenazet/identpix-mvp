import Image from "next/image";
import PopMenu from "@/app/ui/navbar/pop-menu";
import DefaultMenu from "@/app/ui/navbar/default-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between bg-white py-3 md:px-9 px-2'>
        <Link href="/" className=" md:hidden">
          <Image 
          src="/logo.svg"
          width={70}
          height={23}
          alt="identpix logo"
          className=" md:hidden"
          />
        </Link>
        <Link href="/" className="hidden md:block">  
          <Image 
          src="/logo.svg"
          width={107}
          height={36}
          alt="identpix logo"
          className="hidden md:block"
          />
        </Link>
        <PopMenu/>
        <div className=" md:flex flex-row gap-4 items-center justify-center hidden">
        <DefaultMenu />
        </div>
    </div>
  )
}
