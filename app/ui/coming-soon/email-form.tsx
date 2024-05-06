'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function EmailForm() {

  const setSubscribeStatus = (status: boolean) => {
    localStorage.setItem("subcriptionStatus", `${status}`)
  }

  return (
    <form className="flex flex-col gap-y-2">
        { localStorage.getItem("subcriptionStatus") == "true" ?
          <Button className="bg-destructive" onClick={() => setSubscribeStatus(false)}>Opt out of notifications</Button> :
          <Button className=""onClick={() => setSubscribeStatus(true)}>Get notified</Button>
        }
    </form>
  )
}
