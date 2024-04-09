import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Sidemenu from "../../components/sidemenu/page";
import EmployeeAvatar from "../../components/employeeavatar/page";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function expense() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <div className="flex flex-col w-full space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter new expense</CardTitle>
              <CardDescription>
                Add a new expense to the list below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="date">
                    Date
                  </Label>
                  <Input id="date" type="date" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="name">
                    Expense Name
                  </Label>
                  <Input id="name" placeholder="Name" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-sm" htmlFor="description">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter a description for the expense."
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="amount">
                    Amount
                  </Label>
                  <Input id="amount" placeholder="Amount" type="number" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expense list</CardTitle>
              <CardDescription>
                Here are the expenses you've added.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">2022-06-01</TableCell>
                    <TableCell>Office Supplies</TableCell>
                    <TableCell>Purchased new pens and notebooks</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2022-06-05</TableCell>
                    <TableCell>Travel Expenses</TableCell>
                    <TableCell>Taxi fare</TableCell>
                    <TableCell className="text-right">$50.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2022-06-10</TableCell>
                    <TableCell>Client Dinner</TableCell>
                    <TableCell>Meal with important clients</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
