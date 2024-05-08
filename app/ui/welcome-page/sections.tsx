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
      <Link className="w-fit" href={"/register-account"}>
      <Button className="bg-white text-black">Try free demo</Button>
      </Link>
      <Link className="w-fit" href={"/register-member"}>
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
      src={"/effectively-streamline.png"}
      width={245}
      height={252}
      alt="effectively-streamline"
      className="md:hidden"
      />
      <Image
      src={"/effectively-streamline.png"}
      width={318}
      height={328}
      alt="effectively-streamline"
      className="hidden md:block lg:hidden"
      />
      <Image
      src={"/effectively-streamline.png"}
      width={506}
      height={522}
      alt="effectively-streamline"
      className="hidden lg:block"
      />
      <div className="flex flex-col md:w-96 justify-start items-center gap-2 px-4 md:px-0">
          <p className="text-black text-sm md:text-xl lg:text-2xl font-semibold">Conserve Time, Effectively Streamline your Filtering Process</p>
          <p className="text-xs md:text-base ">With IdentPix facial classification technology, you can swiftly organize and share photos sorted based on each individual, ensuring full control over distribution without compromising your precious time.</p>
      </div>
    </div>
  )
}

export function Section3() {
  return (
    <div className="w-full h-max flex flex-col md:flex-row-reverse justify-center lg:justify-center items-center bg-gray-100 gap-5 px-7 py-4 md:justify-between md:px-8 md:py-32  lg:gap-[137px]">
      {/* <div className="flex flex-row gap-2 flex-wrap items-center justify-center md:hidden"> */}
        <Image
      src={"/customize-photo-selection.png"}
      width={245}
      height={252}
      alt="customize-photo-selection"
      className="md:hidden"
      />
      <Image
      src={"/customize-photo-selection.png"}
      width={318}
      height={328}
      alt="customize-photo-selection"
      className="hidden md:block lg:hidden"
      />
      <Image
      src={"/customize-photo-selection.png"}
      width={506}
      height={522}
      alt="customize-photo-selection"
      className="hidden lg:block"
      />
        {/* <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={90.45}
        height={91.46}
        alt="image"
        />
      </div>
      <div className=" md:flex flex-row gap-3 flex-wrap items-center justify-center hidden lg:hidden ">
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={92.92}
        height={92.92}
        alt="image"
        />
      </div>
      <div className=" lg:flex w-[500px] flex-row  gap-6 flex-wrap items-center justify-center hidden ">
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        />
        <Image
        className="rounded-full"
        src={"/section-2-image.png"}
        width={150}
        height={150}
        alt="image"
        /> */}
      {/* </div> */}

      <div className="w-full lg:w-[373px] flex flex-col gap-2 justify-start items-center ">
        <h3 className="text-black text-sm md:text-2xl  font-semibold">Customize photo selection based on every individual</h3>
        <p className="text-xs md:text-base">Every person has their own preferences when it comes to choosing photos. Our AI Identification accurately sorts and filters images based on individual traits, encompassing everything from facial characteristics to expressions.</p>
      </div>
    </div>
  )
}

export function Section4() {
  return(
    <div className="w-full h-max flex flex-col md:flex-row-reverse items-center justify-center lg:justify-center gap-4 md:justify-between md:px-8 lg:gap-[108px] px-7 py-4 mt-7 mb-2 ">
      <Image
      src={"/unlimited-access.png"}
      width={245}
      height={252}
      alt="unlimited-access"
      className="md:hidden"
      />
      <Image
      src={"/unlimited-access.png"}
      width={318}
      height={328}
      alt="unlimited-access"
      className="hidden md:block lg:hidden"
      />
      <Image
      src={"/unlimited-access.png"}
      width={506}
      height={522}
      alt="unlimited-access"
      className="hidden lg:block"
      />
      <div className="flex flex-col gap-3 justify-center items-start md:w-96 md:py-12">
        <h3 className="text-sm font-semibold md:text-2xl ">Unlimited Access to Uploaded Files</h3>
        <p className="text-xs md:text-base">IdentPix offers limitless access to photos, streamlining management and distribution processes. Furthermore, users enjoy unrestricted access, ensuring that uploaded photos are stored well.</p>
      </div>
    </div>
  )
}

export function Section5() {
  return(
    <div className="w-full h-max md:h-[587px] my-6 flex flex-col gap-2 items-center justify-center bg-gray-100 p-6">
      <h3 className="text-xl md:text-5xl font-semibold ">Get Started For Free</h3>
      <div className="flex flex-row gap-2">
      <Link className="w-full" href={"/register-trial"}>
        <Button className="bg-primary">Try free demo</Button>
      </Link>
      <Link className="w-full" href={"/register-guest"}>
        <Button className="bg-black text-white">Register Now</Button>
      </Link>
      </div>
      <Link className="w-full flex flex-col items-center " href={"/pricings"}>
        <Button variant="link">See Plans</Button>
      </Link>
    </div>
  )
}

export function Section6() {
  return(
    <div className="w-full h-max flex flex-col items-start justify-center gap-3 py-4 md:py-9 mb-3 md:mb-6 px-7 lg:px-16">
      <h3 className="text-base md:text-3xl font-semibold">FAQ</h3>
      <Faq
      question="Is my personal data secure?"
      answer="Ensuring the safety of your data is our top priority. We&apos;ve implemented rigorous security measures to protect your personal information. For more details, please review our Privacy Policy."
      />
      <Faq
      question="How can I get further assistance if I encounter an issue? "
      answer="If you encounter any issues or require further assistance, feel free to reach out to our support team via the 'Help' option in the app or by emailing us at help@identpix.com . We&apos;re here to assist you!"
      />
      <Faq
      question="How do I provide feedback or report an issue? "
      answer="We greatly value your feedback! Feel free to share your input through the 'Contact Us' option in the app or by emailing us at support@identpix.com."
      />
      <Faq
      question="Are there limitations on the use of facial classification technology (AI) in this application? "
      answer="We enforce strict limitations on the use of facial recognition technology to ensure that our app adheres to high standards of privacy and ethics.?"
      />
      <Faq
      question="Can facial classification technology (AI) accurately recognize and categorize people in photos? "
      answer="Yes, we continuously improve the accuracy of our facial recognition technology to ensure that users can rely on our app to accurately identify and categorize people in photos."
      />
    </div>
  )
}