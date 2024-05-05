import EmailForm  from "@/app/ui/coming-soon/email-form";

export default function Page() {
  return (
    <main className='flex h-screen flex-col  justify-center items-center p-14 md:p-32 lg:p-55'>
        <div className='flex flex-col gap-3.5 items-start justify-center'>
            <h1 className='text-black text-xl font-semibold md:text-2xl  '>
                Coming Soon !
            </h1>
            <p className='text-sm font-medium w-full md:min-w-[446px]  md:text-base'>
              We will available soon, so look forward to an enjoyable firsthand experience with us.
            </p>
            <EmailForm />
        </div>
    </main>
  )
}
