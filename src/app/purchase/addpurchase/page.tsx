"use client";
import React, { useState } from "react";
import Sidemenu from "../../../components/sidemenu/page";
import EmployeeAvatar from "../../../components/employeeavatar/page";
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

interface ItemType {
  name: string;
  quantity: string;
  weight: string;
  price: string;
}

export default function Purchase() {
  const [items, setItems] = useState<ItemType[]>([
    { name: "", quantity: "", weight: "", price: "" },
  ]);

  const handleAddItem = () => {
    setItems([...items, { name: "", quantity: "", weight: "", price: "" }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (
    index: number,
    field: keyof ItemType,
    value: string
  ) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleSave = () => {

    console.log("Items to be saved:", items);

  };

  return (
    <div className="flex h-screen">
      <Sidemenu />
      <form className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl">Create Purchase Invoice</CardTitle>
            <CardDescription>
              Enter supplier and item details to create an invoice
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="invoice-number">Invoice Number</Label>
                <Input id="invoice-number" placeholder="Enter invoice number" />
              </div>
              <div>
                <Label htmlFor="supplier-name">Supplier Name</Label>
                <Input id="supplier-name" placeholder="Enter supplier name" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <Label htmlFor="supplier-number">Customer Number</Label>
                <Input
                  id="supplier-number"
                  placeholder="Enter customer number"
                />
              </div>
              <div>
                <Label htmlFor="agent">Agent</Label>
                <Input id="agent" placeholder="Enter agent name" />
              </div>
              <div>
                <Label htmlFor="barangay">Barangay</Label>
                <Input id="barangay" placeholder="Enter barangay" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter city" />
              </div>
              <div>
                <Label htmlFor="province">Province</Label>
                <Input id="province" placeholder="Enter province" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="items">Items</Label>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-2 sm:grid-cols-4"
                >
                  <div>
                    <Input
                      placeholder="Item name"
                      value={item.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Quantity"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleInputChange(index, "quantity", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Weight"
                      type="number"
                      value={item.weight}
                      onChange={(e) =>
                        handleInputChange(index, "weight", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Price per unit"
                      value={item.price}
                      onChange={(e) =>
                        handleInputChange(index, "price", e.target.value)
                      }
                    />
                  </div>
                  <Button
                    className="rounded-full"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                className="rounded-full"
                onClick={handleAddItem}
              >
                +
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="mr-2" onClick={handleSave}>
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
