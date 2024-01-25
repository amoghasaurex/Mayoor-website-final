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
  

export default function citizen() {
    return(
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Digital {' '}
                        <span className = 'text-emerald-300'>Citizenship</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground"> 
                        Surf smart, play fair! ✨ Digital friendship means kindness online. Think before you post, respect others, and stay safe. Let's make the internet shine
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 1
                                </div></CardTitle>
                            <CardDescription>Become a responsible Digital Citizen</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/13EEylu0MMdYGlUEJSvO03iekOQEulNEVrtEWXlQe6R0/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Digital Citizenship</Link>
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
                            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSeDIGJ72vCKcXjuFGl5866XIyRpY7soEnvJJT7iEnJ4t5Wa6w/viewform' className={buttonVariants({
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