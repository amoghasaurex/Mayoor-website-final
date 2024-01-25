import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { PersonStanding, ShieldCheck, Users } from "lucide-react";
import  Link  from "next/link";


const perks = [
  {
    name: "Incredibly Accessible",
    Icon: PersonStanding,
    description: "All courses are extremely beginner friendly and easy to understand."
  },
  {
    name: "Certifications",
    Icon: ShieldCheck,
    description: "On Completing a course get a certification to express your achievement"
  },
  {
    name: "For the Community",
    Icon: Users,
    description: "Our goal is help everyone in our community better themselves by providing them the appropriate resources to learn necessary and basic skills."
  },

]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your go-to place to learn{' '}
          <span className = 'text-blue-600'>new skills</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Mayoor Mastery. Your new home for learning 
          new skills anywhere, anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={'/courses'} className={buttonVariants()}>Browse Courses</Link>
          <Button variant='ghost'>From Beginner to Expert &rarr;</Button>
        </div>
      </div>

      {/* TODO: List Products */}
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="w-1/3 h-1/3"/>}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-4 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}