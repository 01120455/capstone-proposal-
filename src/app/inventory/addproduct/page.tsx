"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Sidemenu from "../../../components/sidemenu/page";
import EmployeeAvatar from "../../../components/employeeavatar/page";
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

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    quality: "",
    variety: "",
    quantity: "",
    acquisition: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/addproduct", formData);
      console.log("Product added successfully");
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Error adding product:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8 ">
        <EmployeeAvatar />
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <Card className="w-full max-w-3xl ">
            <CardHeader className="flex flex-row space-y-0 items-start gap-2">
              <div className="grid gap-1">
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Enter product details</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name..."
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="type">
                  Type
                </Label>
                <Input
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Enter product type..."
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="quality">
                  Quality
                </Label>
                <Input
                  id="quality"
                  name="quality"
                  value={formData.quality}
                  onChange={handleChange}
                  placeholder="Enter quality..."
                />
                <Label className="text-base" htmlFor="variety">
                  Variety
                </Label>
                <Input
                  id="variety"
                  name="variety"
                  value={formData.variety}
                  onChange={handleChange}
                  placeholder="Enter variety..."
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="quantity">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity..."
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="acquisition">
                  Acquisition
                </Label>
                <Input
                  id="acquisition"
                  name="acquisition"
                  value={formData.acquisition}
                  onChange={handleChange}
                  placeholder="Enter product acquisition..."
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
