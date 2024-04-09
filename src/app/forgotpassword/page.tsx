import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F7F7F7]">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Forgot Password?</CardTitle>
          <CardDescription>
            Enter the email address you used when you joined and we'll send you
            instructions to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input placeholder="Email" type="email" />
              </div>
              <Button className="w-full">Send Recovery Code</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link className="flex items-center space-x-1" href="/">
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Sign in</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
