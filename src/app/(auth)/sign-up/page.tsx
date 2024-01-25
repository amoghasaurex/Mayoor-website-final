"use client"

import { Icons } from "@/components/ui/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { account, ID} from "@/lib/appwrite";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {  useState } from "react";
import { Toaster, toast } from "sonner";


export default function page () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    async function checkAccount() {
        try {
            const session = await account.get()
        } catch (error) {
            console.log(error)
            return error
        }
    }
    

    async function handleRegister() {
        event?.preventDefault()
        try {
            console.log("this works")
            await account.create(ID.unique(), email, password)
            await account.createEmailSession(email, password)
            setEmail('')
            setPassword('')
            toast.success("Your account was created successfully",{
                description: "Your MayoorMastery account was created successfully, please go back to the home page"
            })
        } catch (e) {
            console.log(e)
        }

        
    }

    
    return(
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20"/>
                        <h1 className="text-2xl font-bold">
                            Create an Account
                        </h1>
                        <Link href="/sign-in" className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                            })
                            }>
                            Already have an Account? Sign-in
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        <form>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                    placeholder="you@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Button onClick={handleRegister}>Sign Up</Button>
                                <Toaster />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

