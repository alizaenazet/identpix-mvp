'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About us', href: '/about-us'},
  { name: 'Pricing', href: '/pricing'},
  { name: 'Register', href: '/register'}
];
export default function DefaultMenu() {
    const pathname = usePathname();
    return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className={` text-sm border-b-black ${pathname == link.href ? "border-b-2" : "border-0"}  md:block`}>{link.name}</p>
          </Link>
        );
      })}
    </>
  )
}
