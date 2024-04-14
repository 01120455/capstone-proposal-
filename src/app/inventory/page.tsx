"use client";
import Sidemenu from "../../components/sidemenu/page";
import EmployeeAvatar from "../../components/employeeavatar/page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { CardContent, Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getInventory() {
      try {
        const response = await fetch("/api/viewproduct");
        if (response.ok) {
          const products = await response.json();
          setProducts(products);
        } else {
          console.error("Failed to fetch inventory:", response.status);
        }
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    }
    getInventory();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <h1 className="text-2xl font-semibold mb-6">List of Products</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Input placeholder="Search..." />
              <Button variant="outline">Filter by</Button>
              <Button variant="outline">Sort by</Button>
            </div>
            <Button>+ Add New Product</Button>
          </div>
          <Card className="w-full">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    {/* <TableHead className="w-[140px]">Product ID</TableHead> */}
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead className="w-[120px]">Type</TableHead>
                    <TableHead className="w-[120px]">Quality</TableHead>
                    <TableHead className="w-[200px]">Variety</TableHead>
                    <TableHead className="w-[200px]">Quantity</TableHead>
                    <TableHead className="w-[200px]">Acquisition</TableHead>
                    {/* <TableHead>Actions</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {product.Item.Name}
                      </TableCell>
                      <TableCell>{product.Item.Type}</TableCell>
                      <TableCell>{product.Item.Quality}</TableCell>
                      <TableCell>{product.Item.Variety}</TableCell>
                      <TableCell>{product.Quantity}</TableCell>
                      <TableCell>{product.Acquisition}</TableCell>
                      {/* Corrected the typo from acquisiton to acquisition */}
                      <TableCell>
                        <div className="flex space-x-2">
                          {/* <Button variant="secondary">Edit</Button>
                          <Button variant="destructive">Delete</Button> */}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
