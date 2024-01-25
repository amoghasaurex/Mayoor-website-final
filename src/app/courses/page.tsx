import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
Collapsible,
CollapsibleContent,
CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function hello() {
    return(
        
        <MaxWidthWrapper>
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        All {' '}
                        <span className = 'text-blue-600'>Courses</span>
                    </h1>
            </div>

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                    <Card>
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Google Classroom
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/classroom"><Image src="/nav/google_apps/classroom.webp" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">    
                                    Classroom: Your online learning hub...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/classroom" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Google Sheets
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/sheets"><Image src="/nav/google_apps/sheets.jpg" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">    
                                    Forget spreadsheets that fight back...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/sheets" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Google Forms
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/forms"><Image src="/nav/google_apps/forms.jpg" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">    
                                Craft surveys & quizzes in a flash....
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/forms" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Google Docs
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/docs"><Image src="/nav/google_apps/docs.webp" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">    
                                
                                    Write together, anywhere! Google Docs lets you...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/docs" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Google Slides
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/slides"><Image src="/nav/google_apps/slides.webp" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">                                  
                                    Present like a pro with your crew...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/slides" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Digital Citizenship
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/digi_citizen"><Image src="/nav/digital_etiquette/citizen.jpg" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">                                  
                                    Surf smart, play fair...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/digi_citizen" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Creative Commons
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/creative_commons"><Image src="/nav/digital_etiquette/cc.jpg" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">                                  
                                Share & remix with joy! Creative Commons lets...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/creative_commons" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className="mt-5 mb-5">
                        <CardHeader>
                            <CardTitle className="items-center text-center">
                                Copyright
                            </CardTitle>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 mt-3">
                                    <Link href="/copyright"><Image src="/nav/digital_etiquette/copyright-image.jpg" alt='product category image' fill className="object-cover object-center"/></Link>
                                </div>
                                <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">                                  
                                    Respect the craft! ✍️ Copyright protects...
                                </p>
                                <div className="mx-auto text-center items-center mt-5">
                                    <Link href="/copyright" className={buttonVariants({variant: "outline"})}>Learn More</Link>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
            </div>
        </MaxWidthWrapper>
    )
}