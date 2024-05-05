'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { Input } from "@/components/ui/input"

export default function RegisterForm() {
    if (localStorage.getItem("subcriptionStatus") == null) {
        localStorage.setItem("subcriptionStatus", "true")
    }

  return (
    <form action="/" className="gap-y-3 md: gap-x-3 flex flex-col w-full ">
            <div className="flex flex-1 flex-col gap-1">
                <Label>Email</Label>
                <Input type="email" placeholder="Email" />
            </div>
        <div className="gap-y-3 md: gap-x-3 flex flex-col md:flex-row w-full">
            <div className="flex flex-1 flex-col gap-1">
                <Label>Backround</Label>
                <select 
                name="" 
                id=""  
                defaultValue="photographer"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                <option key="photographer" value="photographer">
                    photographer
                </option>
                <option key="free-lancer" value="free-lancer">
                    freelancer
                </option>
                <option key="student" value="student">
                    student
                </option>
                </select>
            </div>
            <div className="flex flex-1 flex-col gap-1">
                <Label>Choose plan</Label>
                <select 
                name="" 
                id=""
                defaultValue="individual"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                <option value="">
                    individual
                </option>
                <option value="">
                    small team
                </option>
                <option value="">
                    organization
                </option>

                </select>
            </div>
        </div>
            <Button className="w-full" >Continue</Button>
    </form>
  )
}
