import PlanCard from "@/app/ui/card/plan-card";

export default function MonthlyPlan() {
  return (
    <div className='flex flex-col items-start justify-center gap-2 w-full md:flex-row md:flex-wrap lg:gap-4'>
        <PlanCard 
            imageUrl="line-chart.svg"
            title="Pay as you go"
            description="Pay according to your usage, and pay on a monthly bill."
            price={"usage based"}
            piece="month"
            specificationList={["publish album","Unlimited album size tailored to your needs.","Unlimited searches tailored to your needs."]}
        />
        <PlanCard 
            imageUrl="user.svg"
            title="Individual"
            description="This plan is suitable for individuals such as photographers and freelancers."
            price={"5"}
            piece="month"
            specificationList={["publish album","album size up to 25gb","5000 searches"]}
        />
        <PlanCard 
            imageUrl="users.svg"
            title="Small team"
            description="Ideal for distribution with medium to small teams."
            price={"8"}
            piece="month"
            specificationList={["publish album","album size up to 45gb","10000 searches"]}
        />
        <PlanCard 
            imageUrl="building.svg"
            title="Organization"
            description="Suitable for distribution with medium to large organizations."
            price={"12"}
            piece="month"
            specificationList={["publish album","album size up to 100gb","100000 searches"]}
        />
    </div>
  )
}
