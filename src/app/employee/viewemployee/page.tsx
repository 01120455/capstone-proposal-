"use-client";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Sidemenu from "../../../components/sidemenu/page";
import EmployeeAvatar from "../../../components/employeeavatar/page";

export default function Component() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <div className="flex flex-col w-full gap-2">
          <div className="container px-4 py-6 md:py-8 md:px-6 bg-white rounded-xl">
            <div className="relative ">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 mb-2 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 w-full md:w-[400px]"
                placeholder="Search employees..."
                type="search"
              />
            </div>
            <div className="border rounded-lg shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer">Name</TableHead>
                    <TableHead className="cursor-pointer">Position</TableHead>
                    <TableHead className="cursor-pointer">Department</TableHead>
                    <TableHead className="cursor-pointer text-right">
                      Contact
                    </TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell>Finance</TableCell>
                    <TableCell className="text-right">
                      johndoe@example.com
                    </TableCell>
                    <TableCell className="w-12 text-right">
                      <Button size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Alice Johnson</TableCell>
                    <TableCell>Engineer</TableCell>
                    <TableCell>IT</TableCell>
                    <TableCell className="text-right">
                      alicej@example.com
                    </TableCell>
                    <TableCell className="w-12 text-right">
                      <Button size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mike Smith</TableCell>
                    <TableCell>Analyst</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell className="text-right">
                      mikes@example.com
                    </TableCell>
                    <TableCell className="w-12 text-right">
                      <Button size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sara Brown</TableCell>
                    <TableCell>Designer</TableCell>
                    <TableCell>HR</TableCell>
                    <TableCell className="text-right">
                      sarab@example.com
                    </TableCell>
                    <TableCell className="w-12 text-right">
                      <Button size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Alex Turner</TableCell>
                    <TableCell>Developer</TableCell>
                    <TableCell>IT</TableCell>
                    <TableCell className="text-right">
                      alext@example.com
                    </TableCell>
                    <TableCell className="w-12 text-right">
                      <Button size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileEditIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
