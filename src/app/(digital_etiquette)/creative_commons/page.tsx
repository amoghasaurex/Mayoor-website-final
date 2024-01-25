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
  

export default function commons() {
    return(
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Creative {' '}
                        <span className = 'text-emerald-300'>Commons</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground"> 
                        Share & remix with joy! ✨ Creative Commons lets creators choose how others 
                        use their work. Find amazing stuff to build upon, and share your own 
                        creations freely. Together, let creativity flow
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 1
                                </div></CardTitle>
                            <CardDescription>Learn about Creative Common Licensing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1ZrV1rB1mJGE4wZ--y3CLDbUHqvFkXkTHI4EYOKqMPiw/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Creative Commons</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Step-by-Step Instructions
                                </div></CardTitle>
                            <CardDescription>Learn about Creative Common Licensing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1Ek5dSQcdrN_MVM2iPMc6fBozR8Wfs8GveEr97U1SSNI/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Step-by-Step Instructions</Link>
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
                            <Link href='https://docs.google.com/forms/d/e/1FAIpQLScDuzBMNs7coajLHVUzXdbDckIMYyNM-3EHxnfqxgyUUsQzTg/viewform' className={buttonVariants({
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