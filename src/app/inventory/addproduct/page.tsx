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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { AddItem, item } from "@/schemas/item.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// There is an existing error where data is not being parsed correctly. Check for fix.

export default function AddProduct() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   type: "",
  //   quality: "",
  //   variety: "",
  //   quantity: "",
  //   acquisition: "",
  // });

  const form = useForm<AddItem>({
    resolver: zodResolver(item),
    defaultValues: {
      name: "",
      type: "",
      quality: "",
      variety: "",
      quantity: 0,
      acquisition: "processed",
    },
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (values: AddItem) => {
    // e.preventDefault();
    try {
      // Send the serialized data in the request body
      await axios.post("/api/product", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
        <Form {...form}>
          <form
            className="flex justify-center"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <Card className="w-full max-w-3xl ">
              <CardHeader className="flex flex-row space-y-0 items-start gap-2">
                <div className="grid gap-1">
                  <CardTitle>Add New Product</CardTitle>
                  <CardDescription>Enter product details</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="name"
                            placeholder="Enter product name..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* 
                  <Label className="text-base" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name..."
                  /> */}
                </div>
                <div className="grid gap-2">
                  {/* <Label className="text-base" htmlFor="type">
                    Type
                  </Label>
                  <Input
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Enter product type..."
                  /> */}
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="type">Type</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="type"
                            placeholder="Enter product type..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  {/* <Label className="text-base" htmlFor="quality">
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
                  /> */}
                  <FormField
                    control={form.control}
                    name="variety"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="variety">Variety</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="variety"
                            placeholder="Enter product variety..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="quality">Quality</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="quality"
                            placeholder="Enter product quality..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  {/* <Label className="text-base" htmlFor="quantity">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity..."
                  /> */}
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="quantity">Quantity</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="quantity"
                            placeholder="Enter product quantity..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  {/* <Label className="text-base" htmlFor="acquisition">
                    Acquisition
                  </Label>
                  <Input
                    id="acquisition"
                    name="acquisition"
                    value={formData.acquisition}
                    onChange={handleChange}
                    placeholder="Enter product acquisition..."
                  /> */}
                  <FormField
                    control={form.control}
                    name="acquisition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="acquisition">Acquisiton</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="acquisition"
                            placeholder="Enter product acquisition..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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
        </Form>
      </div>
    </div>
  );
}
