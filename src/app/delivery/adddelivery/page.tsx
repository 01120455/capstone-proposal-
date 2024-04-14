import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidemenu from "../../../components/sidemenu/page";
import EmployeeAvatar from "../../../components/employeeavatar/page";

export default function Component() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <Card>
          <CardHeader>
            <CardTitle>Insert Delivery</CardTitle>
            <CardDescription>Enter the delivery details below</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <Label htmlFor="vehicle-plate-no">Vehicle Plate No</Label>
                <Input id="vehicle-plate-no" placeholder="Enter plate no" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="sales-id">Sales ID</Label>
                <Input id="sales-id" placeholder="Enter sales ID" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="employee-id">Employee ID</Label>
                <Input id="employee-id" placeholder="Enter employee ID" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" placeholder="Enter quantity" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="weight">Weight</Label>
                <Input id="weight" placeholder="Enter weight" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="delivery-date">Delivery Date</Label>
                <Input id="delivery-date" type="date" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="cost">Cost</Label>
                <Input id="cost" placeholder="Enter cost" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Enter description" />
              </div>
            </div>
            <div className="flex w-full">
              <Button className="ml-auto">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
