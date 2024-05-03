import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function EmailForm() {
  return (
    <form className="flex flex-col gap-y-2">
        <Label className="md:text-base md:font-semibold">Get our newest info</Label>
        <Input type="email" placeholder="Email" />
        <Button className="w-24 ">Notify me</Button>
    </form>
  )
}
