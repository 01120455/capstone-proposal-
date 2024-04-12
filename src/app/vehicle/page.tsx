import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Sidemenu from "../../components/sidemenu/page";
import EmployeeAvatar from "../../components/employeeavatar/page";

export default function Component() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8 ">
        <EmployeeAvatar />
        <form className="flex justify-center">
          <Card className="w-full max-w-3xl">
            <CardHeader className="flex flex-col gap-1">
              <CardTitle>Vehicles</CardTitle>
              <CardDescription>View all vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-4">
                <div className="w-full overflow-auto flex items-center justify-center">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">
                          Plate Number
                        </TableHead>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Capacity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">ABC123</TableCell>
                        <TableCell>Truck</TableCell>
                        <TableCell>1000kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">DEF456</TableCell>
                        <TableCell>Van</TableCell>
                        <TableCell>500kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">GHI789</TableCell>
                        <TableCell>Scooter</TableCell>
                        <TableCell>100kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">JKL012</TableCell>
                        <TableCell>Car</TableCell>
                        <TableCell>300kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">MNO345</TableCell>
                        <TableCell>Bicycle</TableCell>
                        <TableCell>50kg</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
