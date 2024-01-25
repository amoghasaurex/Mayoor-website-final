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
  

export default function hello() {
    return(
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Google {' '}
                        <span className = 'text-green-600'>Classroom</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        
                        Classroom: Your online learning hub!

                        Share assignments, quizzes, and discussions - all in one place. Students submit work, see 
                        feedback instantly, and stay organized. Grade with a tap and say goodbye to 
                        lost papers. Classroom keeps everything organized, making learning together easier than ever. 
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 1
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a Classroom expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/17MenORStMEFlABp_G7-XYlqKSBEpGB2yNRqAHSu9yeU/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Google Classroom</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Day 2
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a Classroom expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/166KD0agFbwF-otgOZGnPNlHccLqwEk8Ibkzuvmq0TDA/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 2 - Google Classroom</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                 Day 3
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a Classroom expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/18G_yfKtcu6uYd_71iSPBRszIlD6ZTFpLdu6Hlcd9kBE/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 3 - Google Classroom</Link>
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
                            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdyH6ZewllakBS1wxYC8as45tA5C4TJFD5iaxMc4CWGjeqB8w/viewform' className={buttonVariants({
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