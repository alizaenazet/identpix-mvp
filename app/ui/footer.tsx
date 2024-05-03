/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CSnyrDdO7E3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-4 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mb-6">
          <Link className="inline-flex items-center" href="#">
            <Image
            src="/logo_full.svg"
            width={34}
            height={34}
            alt="pijaraya logo"
             />
            <span className="ml-2 text-xl font-bold text-white">Identpix</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <Link className="hover:text-gray-300 transition-colors" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>

        </div>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <Link className="hover:text-gray-300 transition-colors" href="/about-us">
            About us
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="/register">
            Register
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="/pricing">
            Pricing
          </Link>
        </nav>
      </div>
    </footer>
  )
}



function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

