"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { AddPayroll, payroll } from "@/schemas/payroll.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const prisma = new PrismaClient();

export default function Component() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    to: new Date(), // Set "to" date to current date
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/api/addpayroll");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const form = useForm<AddPayroll>({
    resolver: zodResolver(payroll),
    defaultValues: {
      name: "",
      overtime: 0,
      noofday: 0,
      daysabsent: 0,
      sss: 0,
      loan: 0,
      datefrom: date?.from,
      dateto: date?.to,
    },
  });

  const handleSubmit = async (values: AddPayroll) => {
    try {
      const empId = employees.find((e) => e.name === values.name).ID;

      const toSubmit = {
        empId: empId,
        from: date?.from,
        to: date?.to,
        ...values,
      };

      console.log(toSubmit);

      await axios.post("/api/addpayroll", toSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Payroll added successfully");
      // show a success message to the user via alert,sonner, toast ???
    } catch (error) {
      console.error("Error adding Payroll:", error);
      // show an error message to the user via alert,sonner,toast ???
    }
  };
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <Toaster />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <Form {...form}>
          <form
            className="flex justify-center"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <Card>
              <CardHeader>
                <CardTitle>Employee Payroll Data</CardTitle>
                <CardDescription>
                  View and manage employee data including overtime, days worked,
                  and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Employee Name</Label>
                    <Input id="name" placeholder="Enter name" />
                  </div> */}
                  {/* <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Employee Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="name"
                            placeholder="Enter Employee Name..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <div className="flex flex-col gap-1">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="name">Employee Name</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Enter Employee Name" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {employees.map((employeeName, index) => (
                                <SelectItem
                                  key={index}
                                  value={employeeName.name}
                                >
                                  {employeeName.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal mt-8",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date?.from ? (
                            date.to ? (
                              <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(date.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-full sm:w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={date?.from}
                          selected={date}
                          onSelect={setDate}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    {/* <Label htmlFor="overtime">Overtime (hrs)</Label>
                    <Input id="overtime" placeholder="0" /> */}
                    <FormField
                      control={form.control}
                      name="overtime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="overtime">Overtime</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="overtime"
                              placeholder="Enter Employee's Overtime..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {/* <Label htmlFor="days-worked">Days Worked</Label>
                    <Input id="days-worked" placeholder="0" /> */}
                    <FormField
                      control={form.control}
                      name="noofday"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="noofday">Working Days</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="noofday"
                              placeholder="Enter Employee's Working Days..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {/* <Label htmlFor="days-absent">Days Absent</Label>
                    <Input id="days-absent" placeholder="0" /> */}
                    <FormField
                      control={form.control}
                      name="daysabsent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="daysabsent">
                            Days Absent
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="daysabsent"
                              placeholder="Enter Employee's Days Absent..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    {/* <Label htmlFor="sss">SSS Contribution</Label>
                    <Input id="sss" placeholder="0.00" /> */}
                    <FormField
                      control={form.control}
                      name="sss"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="sss">SSS</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="sss"
                              placeholder="Enter Employee's Payable SSS..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {/* <Label htmlFor="loan">Loan Deductions</Label>
                    <Input id="loan" placeholder="0.00" /> */}
                    <FormField
                      control={form.control}
                      name="loan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="loan">Loan Deduction</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="loan"
                              placeholder="Enter Employee's Loan Deduction..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
