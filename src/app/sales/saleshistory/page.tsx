import Link from "next/link";
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
        <div className="flex flex-col w-full min-h-screen">
          <div className="container px-4 py-6 md:py-8 md:px-6 bg-white rounded-xl">
            <main className="flex-1 flex flex-col p-4 gap-4 md:p-10">
              <div className="flex items-center gap-4">
                <CalendarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <h1 className="text-lg font-semibold md:text-2xl">
                  Sales History
                </h1>
              </div>
              <div className="flex-1 flex flex-col gap-4 mt-4">
                <div className="border rounded-lg shadow-sm">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2023-08-01</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>Blue Shoes</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">$120.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-08-02</TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>Red Hat</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell className="text-right">$50.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-08-03</TableCell>
                        <TableCell>Adam Johnson</TableCell>
                        <TableCell>Green Shirt</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">$30.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-08-04</TableCell>
                        <TableCell>Sarah Lee</TableCell>
                        <TableCell>Yellow Dress</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">$80.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-08-05</TableCell>
                        <TableCell>Michael Brown</TableCell>
                        <TableCell>Black Jacket</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">$100.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Button
                      className="rounded-full h-8 w-8"
                      size="icon"
                      variant="outline"
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button
                      className="rounded-full h-8 w-8"
                      size="icon"
                      variant="outline"
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p className="text-gray-500 dark:text-gray-400">
                      Showing 1 to 5 of 5 entries
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
