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
                        <span className = 'text-emerald-300'>Copyright</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground"> 
                       Respect the craft! ✍️ Copyright protects creations like yours. 
                       Give credit where due, and ask permission before borrowing. 
                       Together, let creativity thrive!
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 1
                                </div></CardTitle>
                            <CardDescription>Learn more about copyright</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/17o5dNbhpHnixfbRGEdxmSKYNzLW2EEZJ-Mvp7QVSE_c/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Copyright</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 2
                                </div></CardTitle>
                            <CardDescription>Learn more about copyright</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1ExKG8bMdznb7zLVv8amwyUmLkYa4iY5OAPFRXmZQmYM/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 2 - Copyright</Link>
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
                            } target="_blank">Click Here for the test! **No Test for copyright in drive**</Link>
                            <Checkbox className="mr-5"/>
                        </CardContent>
                    </Card>
                </div>
            </MaxWidthWrapper>
        </>
    )
}