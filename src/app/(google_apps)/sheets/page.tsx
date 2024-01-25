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
                        <span className = 'text-green-600'>Sheets</span>
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Forget spreadsheets that fight back! 
                        Google Sheets lets you and your team crunch numbers 
                        together. See edits live, leave comments, and say 
                        goodbye to version headaches. Sheets saves your every keystroke
                        , keeping your data dazzling. Share, collaborate, 
                        and watch insights sparkle. Sheets is your cloud sidekick for
                         effortless spreadsheet superpowers.
                    </p>

                    
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 1
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/16at4T1VeKSku6CNALQo-IzRv3_8MNPbWe6NYPPi6UP4/edit' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 1 - Google Sheets</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 2
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1pyhtkzUduhIf9FIIo6cchVN5qDuleYh1YkWIo2fm62g/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 2 - Google Sheets</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 3
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1kavDzdOcMqAVVRbVrukRAK-GO4Qa5eItps7sPi6GJL8/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 3 - Google Sheets</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 4
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1SLP-gqn8uvw5y-6vPsraGpIoIVDc6IgjU18_hwnGQ0o/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 4 - Google Sheets</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 5
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1BcrarP0WtoDNn0xHA1pGyTTZSoUGJSZzFqIf4MYPAT4/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 5 - Google Sheets</Link>
                        </CardContent>
                    </Card>
                    <Card className="mt-5 mx-auto text-gray-800 ">
                        <CardHeader>
                            <CardTitle><div>
                                <Checkbox className="mr-5"/>
                                Sheets - Day 6
                                </div></CardTitle>
                            <CardDescription>Your first step towards becoming a sheets expert</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href='https://docs.google.com/document/d/1P8wTgyduNj3doTKrxMELeanwyGzyx-9NYbUQr4ZR8pk/edit?usp=sharing' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            } target="_blank">Day 6 - Google Sheets</Link>
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
                            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSes5iRZSBASsPQZkJQopdoRjAWZ8-coZRhd33AqAivJLHnHvA/viewform' className={buttonVariants({
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