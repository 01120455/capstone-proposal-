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
  const [products, setProducts] = useState([
    {
      products: [
        {
          name: "",
          type: "",
          quality: "",
          variety: "",
          quantity: "",
          acquisition: "",
        },
      ],
    },
  ]);

  const [itemName, setItemName] = useState("Tite");

  useEffect(() => {
    async function getInventory() {
      try {
        const response = await fetch("/api/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(await response.json());
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
            <Button onClick={() => setItemName("ilan")}>asdassd</Button>
          </div>
          <Card className="w-full">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[140px]">Product ID</TableHead>
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead className="w-[120px]">Price</TableHead>
                    <TableHead className="w-[120px]">Stock</TableHead>
                    <TableHead className="w-[200px]">Category</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    {/* gawan mo ng for loop bukas sa useState products para i loop niya lahat ng item sa inventory */}
                    <TableCell className="font-medium">{itemName}</TableCell>
                    <TableCell>Example Product 1</TableCell>
                    <TableCell>$19.99</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>Electronics</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="secondary">Edit</Button>
                        <Button variant="destructive">Delete</Button>
                      </div>
                    </TableCell>
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
