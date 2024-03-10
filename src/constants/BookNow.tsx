import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import DatePicker from "./DatePicker";
import { BackgroundGradient } from "./background-gradient";
export function BookNow () {
  
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center" id="book">
      <BackgroundGradient>
   <Card className="sm:w-[600px] xs:w-[350px] xss:w-[275px] z-20 bg-black/25">
      <CardHeader>
        <CardTitle>Book an appointment</CardTitle>
        <CardDescription>We can help you!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Your Email address" className="text-black" />
            </div>
            <DatePicker />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        
        
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Cancel
        </button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Book Now
        </button>
        
      </CardFooter>
    </Card>
    </BackgroundGradient>
    </div>
    
  )
}