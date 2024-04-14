"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

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
