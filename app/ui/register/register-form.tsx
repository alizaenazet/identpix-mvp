'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { UserGeo } from "@/app/lib/definition";
import { insertUser } from "@/app/lib/actions";
import { useFormState } from 'react-dom';
export default function RegisterForm({userGeo} : {userGeo: UserGeo}) {
    if (localStorage.getItem("subcriptionStatus") == null) {
        localStorage.setItem("subcriptionStatus", "true")
    }
    
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(insertUser, initialState);
  return (
    <form action={dispatch} className="gap-y-3 md: gap-x-3 flex flex-col w-full ">
            <div className="flex flex-1 flex-col gap-1">
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="Email" />
            </div>
        <div className="gap-y-3 md: gap-x-3 flex flex-col md:flex-row w-full">
            <div className="flex flex-1 flex-col gap-1">
                <Label>Backround</Label>
                <select 
                name="backround" 
                id=""  
                defaultValue="0"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                <option key="photographer" value="0">
                    photographer
                </option>
                <option key="free-lancer" value="1">
                    freelancer
                </option>
                <option key="student" value="2">
                    student
                </option>
                </select>
            </div>
            <div className="flex flex-1 flex-col gap-1">
                <Label>Choose plan</Label>
                <select
                name="plan" 
                id=""
                defaultValue="1"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                <option key="on-demand" value="0">
                    Pas as You Go
                </option>
                <option key="individual" value="1">
                    individual
                </option>
                <option key="small-team" value="2" >
                    small team
                </option>
                <option key="organization" value="3">
                    organization
                </option>

                </select>
            </div>
            <input type="text" name="ip" hidden value={userGeo.ip}  />
            <input type="text" name="country" hidden value={userGeo.country}  />
            <input type="text" name="region" hidden value={userGeo.region}  />
        </div>
            <Button className="w-full" type="submit" >Continue</Button>
            {state.errors?.ip &&
                state.errors.ip.map((err:string) => (
                    <p key={err}>{err}</p>
                ))
            }
            {state.message && 
                <p>{state.message}</p>
            }
    </form>
  )
}
