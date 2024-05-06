'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import Link from "next/link";
import Image from "next/image";
  

export default function PopMpenu() {
  return (
    <NavigationMenu className=" md:hidden">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="w-[140px] flex flex-row items-center justify-end">
        <Image
        src={"/hamburger-menu.svg"}
        width={18}
        height={18}
        alt="menu"
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
      <Link href="/about-us" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About us
        </NavigationMenuLink>
        </Link>
      <Link href="/pricing" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Pricing
        </NavigationMenuLink>
        </Link>
      <Link href="/register" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Register
        </NavigationMenuLink>
        </Link>
      <Link href="/register" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Try our demo
        </NavigationMenuLink>
        </Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  )
}
