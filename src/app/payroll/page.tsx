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
import { Button } from "@/components/ui/button";
import Sidemenu from "@/components/sidemenu/page";
import EmployeeAvatar from "@/components/employeeavatar/page";

export default function Component() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <Card>
          <CardHeader>
            <CardTitle>Employee Payroll Data</CardTitle>
            <CardDescription>
              View and manage employee data including overtime, days worked, and
              more.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name">Employee Name</Label>
                <Input id="name" placeholder="Enter name" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="reference">Reference Number</Label>
                <Input id="reference" placeholder="Enter reference number" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="overtime">Overtime (hrs)</Label>
                <Input id="overtime" placeholder="0" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="days-worked">Days Worked</Label>
                <Input id="days-worked" placeholder="0" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="days-absent">Days Absent</Label>
                <Input id="days-absent" placeholder="0" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="sss">SSS Contribution</Label>
                <Input id="sss" placeholder="0.00" />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="loan">Loan Deductions</Label>
                <Input id="loan" placeholder="0.00" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
