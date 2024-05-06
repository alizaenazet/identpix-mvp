'use client'
import { Button } from "@/components/ui/button"
import { useState,useEffect } from "react"
import { updateUserNotifable } from "@/app/lib/actions";

export default function EmailForm({ip} : {ip:string}) {
  const [status, setStatus] = useState("")

  const setSubscribeStatus = (e: any) => {
    e.preventDefault()
    const newValue = status == "false"
    try {
      if (typeof window !== "undefined") {
        console.log(`turn the status into ${status}`);
        localStorage.setItem("subcriptionStatus", `${newValue}`)
        setStatus(`${newValue}`)
        console.log(`turn the status into ${status}`);
      }
    } catch (error) {
    }
  }

 
  useEffect(() => {
    setStatus(localStorage.getItem("subcriptionStatus") ?? "")
  },[])

  return (
    <form className="flex flex-col gap-y-2" onSubmit={setSubscribeStatus}>
        { status == 'true' ?
          <Button className="bg-destructive" type="submit" onClick={() => {updateUserNotifable(false,ip)
          }}>Opt out of notifications</Button> :
          <Button type="submit" onClick={() => {updateUserNotifable(true,ip)
          }} >Get notified</Button>
        }
    </form>
  )
}
