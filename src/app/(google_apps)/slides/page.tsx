import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
  

export default function slides() {
    return(
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Google {' '}
                        <span className = 'text-amber-400'>Slides</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        
                        Present like a pro with your crew! Google Slides lets 
                        you and your team build dazzling presentations, edit together, 
                        and see changes live. No more version nightmares, 
                        Slides auto-saves your brilliance. Share slides, add 
                        speaker notes, and watch ideas shine. It's your cloud
                         stage for effortless presentation teamwork!
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 1
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a Slides expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1Z_saRAWtNVB9M5dr_iex_FmiK6P-dMjQADsQPDc0ju0/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Google Slides</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Day 2
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a Slides expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1VW-80EqweZkp3HHcc5ILBozZq-IixSZ9DPCsMvYYwmA/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 2 - Google Slides</Link>
                        </CardContent>
                    </Card>
                    </div>

                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                
                                <div className="text-3xl font-extrabold">Final Assessment</div>
                                </div></CardTitle>
                            <CardDescription>Test your knowledge and recap everything you've learned</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc3NB245DbIoNNaPjsbk_R40MO33r-Mirljk0kbTiXNJ2kIyw/viewform' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5 text-rose-600"
                            })
                            } target="_blank">Click Here for the test!</Link>
                            <Checkbox className="mr-5"/>
                        </CardContent>
                    </Card>
                </div>
            </MaxWidthWrapper>
        </>
    )
}