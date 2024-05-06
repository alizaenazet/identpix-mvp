import Image from "next/image";
import { 
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
 } from "@/app/ui/welcome-page/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
