import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function employeeavatar() {
  return (
    <header className="flex flex-col sm:flex-row justify-end items-center mb-8">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage alt="Admin" src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>BH</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold">Bain Hansly</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-9 h-9 rounded-full border-2 border-transparent hover:border-gray-300/40 transition-color"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontalIcon className="w-6 h-6" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function MoreHorizontalIcon(props: any) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

export { employeeavatar };
