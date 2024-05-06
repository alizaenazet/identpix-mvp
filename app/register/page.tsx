import RegisterForm from "@/app/ui/register/register-form";
import { Metadata } from 'next';
import { headers } from 'next/headers'
import { UserGeo } from "@/app/lib/definition";

export const metadata: Metadata = {
  title: 'Register',
};
export default function Page() {
  const headersList = headers()
  const country = headersList.get('country') ?? "noCountry"
  const region = headersList.get('region') ?? "noRegion"
  const ip = headersList.get('ip') ?? "0.0.0.0"
  const userGeo: UserGeo = {ip,country,region}
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-16'>
        <div className="flex flex-col items-start justify-center gap-3.5 md:w-[416px]" >
            <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-xl font-semibold">Everyone has a purpose</h1>
            <h3 className="text-neutral-400 text-xl font-semibold">Register Your Role</h3>
            </div>
            <div className="flex flex-col items-start gap-3.5 w-full">
                <RegisterForm 
                userGeo={userGeo}
                />
            </div>
        </div>
    </main>
  )
}
