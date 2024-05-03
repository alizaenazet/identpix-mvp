import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link";
import Faq from "@/app/ui/welcome-page/faq";
export function Section1() {
  return (
    <div className="w-full bg-primary h-[283px] md:h-[650px] flex flex-col p-2 mt-3 md:p-3 justify-center items-center gap-3">
      <div className="flex flex-col justify-center items-center gap-1 pb-1 pt-12">
        <h1 className="text-white text-xl md:text-5xl md:font-extrabold font-semibold">Store, Filter, Save Time</h1>
        <p className="text-center text-white text-sm md:text-2xl font-normal">Filter photos accurately with IdentPix&apos;s AI-powered identification system.</p>
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-center">
      <Link className="w-fit" href={"/register"}>
      <Button className="bg-white text-black">Try free demo</Button>
      </Link>
      <Link className="w-fit" href={"/register"}>
      <Button className="bg-black text-white">Register Now</Button>
      </Link>
      </div>
    </div>
  )
}

export function Section2() {
  return (
    <div className="w-full h-fit p-3 flex flex-col md:flex-row-reverse items-center justify-center lg:justify-center gap-4 md:justify-between md:px-8 lg:gap-32 my-6 md:my-12">
      <Image
      src={"/section-2-image.jpg"}
      width={245}
      height={252}
      alt="section-2-image"
      className="md:hidden"
      />
      <Image
      src={"/section-2-image.jpg"}
      width={318}
      height={328}
      alt="section-2-image"
      className="hidden md:block lg:hidden"
      />
      <Image
      src={"/section-2-image.jpg"}
      width={506}
      height={522}
      alt="section-2-image"
      className="hidden lg:block"
      />
      <div className="flex flex-col md:w-96 justify-start items-center gap-2 px-4 md:px-0">
          <p className="text-black text-sm md:text-xl lg:text-2xl font-semibold">Conserve Time, Effectively Streamline your Filtering Process</p>
          <p className="text-xs md:text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
      </div>
    </div>
  )
}

export function Section3() {
  return (
    <div className="w-full h-max flex flex-col md:flex-row-reverse justify-center lg:justify-center items-center bg-gray-100 gap-5 px-7 py-4 md:justify-between md:px-8 md:py-32  lg:gap-[137px]">
      <div className="flex flex-row gap-2 flex-wrap items-center justify-center md:hidden">
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={90.45}
        height={91.46}
        alt="image"
        />
      </div>
      <div className=" md:flex flex-row gap-3 flex-wrap items-center justify-center hidden lg:hidden ">
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={92.92}
        height={92.92}
        alt="image"
        />
      </div>
      <div className=" lg:flex w-[500px] flex-row  gap-6 flex-wrap items-center justify-center hidden ">
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.jpg"}
        width={150}
        height={150}
        alt="image"
        />
      </div>

      <div className="w-full lg:w-[373px] flex flex-col gap-2 justify-start items-center ">
        <h3 className="text-black text-sm md:text-2xl  font-semibold">Customize photo selection based on every individual</h3>
        <p className="text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
      </div>
    </div>
  )
}

export function Section4() {
  return(
    <div className="w-full h-max flex flex-col md:flex-row-reverse items-center justify-center lg:justify-center gap-4 md:justify-between md:px-8 lg:gap-[108px] px-7 py-4 mt-7 mb-2 ">
      <Image
      src={"/section-2-image.jpg"}
      width={245}
      height={252}
      alt="section 4 image"
      className="md:hidden"
      />
      <Image
      src={"/section-2-image.jpg"}
      width={318}
      height={328}
      alt="section 4 image"
      className="hidden md:block lg:hidden"
      />
      <Image
      src={"/section-2-image.jpg"}
      width={506}
      height={522}
      alt="section 4 image"
      className="hidden lg:block"
      />
      <div className="flex flex-col gap-3 justify-center items-start md:w-96 md:py-12">
        <h3 className="text-sm font-semibold md:text-2xl ">Unlimited Access to Uploaded Files</h3>
        <p className="text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
      </div>
    </div>
  )
}

export function Section5() {
  return(
    <div className="w-full h-max md:h-[587px] my-6 flex flex-col gap-2 items-center justify-center bg-gray-100 p-6">
      <h3 className="text-xl md:text-5xl font-semibold ">Get Started For Free</h3>
      <div className="flex flex-row gap-2">
      <Link className="w-full" href={"/register"}>
        <Button className="bg-primary">Try free demo</Button>
      </Link>
      <Link className="w-full" href={"/register"}>
        <Button className="bg-black text-white">Register Now</Button>
      </Link>
      </div>
      <Link className="w-full flex flex-col items-center " href={"/register"}>
        <Button variant="link">Register Now</Button>
      </Link>
    </div>
  )
}

export function Section6() {
  return(
    <div className="w-full h-max flex flex-col items-start justify-center gap-3 py-4 md:py-9 mb-3 md:mb-6 px-7 lg:px-16">
      <h3 className="text-base md:text-3xl font-semibold">FAQ</h3>
      <Faq
      question="Lorem ipsum dolor sit amet, consectetur? "
      answer="Lorem ipsum dolor sit amet, consectetur? "
      />
      <Faq
      question="Lorem ipsum dolor sit amet, consectetur? "
      answer="Lorem ipsum dolor sit amet, consectetur? "
      />
      <Faq
      question="Lorem ipsum dolor sit amet, consectetur? "
      answer="Lorem ipsum dolor sit amet, consectetur? "
      />
      <Faq
      question="Lorem ipsum dolor sit amet, consectetur? "
      answer="Lorem ipsum dolor sit amet, consectetur? "
      />
    </div>
  )
}