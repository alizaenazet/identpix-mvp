import PlanCard from "@/app/ui/card/plan-card";


export default function YearlyPlan() {
  return (
    <div className='flex flex-col items-start justify-center gap-2 w-full md:flex-row md:flex-wrap lg:gap-4'>
      <PlanCard 
            imageUrl="user.svg"
            title="Individual"
            description="Plan cocok untuk perorangan seperti photograper dan freelancer"
            price={5}
            piece="year"
            specificationList={["publish album","album size up to 25gb","5000 searcher"]}
        />
        <PlanCard 
            imageUrl="users.svg"
            title="Small team"
            description="Cocok untuk melakukan distribusi dengan tim menengah kebawa"
            price={8}
            piece="year"
            specificationList={["publish album","album size up to 45gb","10000 searcher"]}
        />
        <PlanCard 
            imageUrl="building.svg"
            title="Organization"
            description="cocok untuk distribusi dengan organisasi menengah ke atas"
            price={12}
            piece="year"
            specificationList={["publish album","album size up to 100gb","100000 searcher"]}
        />
    </div>
  )
}