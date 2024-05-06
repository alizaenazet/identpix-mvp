import PlanCard from "@/app/ui/card/plan-card";


export default function YearlyPlan() {
  return (
    <div className='flex flex-col items-start justify-center gap-2 w-full md:flex-row md:flex-wrap lg:gap-4'>
      <PlanCard 
            imageUrl="user.svg"
            title="Individual"
            description="This plan is suitable for individuals such as photographers and freelancers."
            price={"3"}
            piece="year"
            specificationList={["publish album","album size up to 25gb","5000 searches"]}
        />
        <PlanCard 
            imageUrl="users.svg"
            title="Small team"
            description="Ideal for distribution with medium to small teams."
            price={"6"}
            piece="year"
            specificationList={["publish album","album size up to 45gb","10000 searches"]}
        />
        <PlanCard 
            imageUrl="building.svg"
            title="Organization"
            description="Suitable for distribution with medium to large organizations."
            price={"10"}
            piece="year"
            specificationList={["publish album","album size up to 100gb","100000 searches"]}
        />
    </div>
  )
}
