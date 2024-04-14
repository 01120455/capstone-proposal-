"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
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
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

export default function Purchase() {
  return (
    <div className="flex h-screen">
      <Sidemenu />
      <div className="flex-1 overflow-y-auto p-8">
        <EmployeeAvatar />
        <div className="flex flex-col gap-4 p-4 border rounded-lg w-full">
          <Card>
            <CardHeader>
              <CardTitle>Purchase History</CardTitle>
              <CardDescription>
                Here are the purchases you've created.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Purchase ID</TableHead>
                    <TableHead>Supplier ID</TableHead>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Official Receipt No</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">PUR001</TableCell>
                    <TableCell>SUP001</TableCell>
                    <TableCell>EMP001</TableCell>
                    <TableCell>OR001</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>2023-05-12</TableCell>
                    <TableCell>$500.00</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PUR002</TableCell>
                    <TableCell>SUP002</TableCell>
                    <TableCell>EMP002</TableCell>
                    <TableCell>OR002</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>2023-06-20</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PUR003</TableCell>
                    <TableCell>SUP003</TableCell>
                    <TableCell>EMP003</TableCell>
                    <TableCell>OR003</TableCell>
                    <TableCell>Mark Johnson</TableCell>
                    <TableCell>2023-07-15</TableCell>
                    <TableCell>$350.00</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PUR004</TableCell>
                    <TableCell>SUP004</TableCell>
                    <TableCell>EMP004</TableCell>
                    <TableCell>OR004</TableCell>
                    <TableCell>Emily Brown</TableCell>
                    <TableCell>2023-08-10</TableCell>
                    <TableCell>$450.00</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PUR005</TableCell>
                    <TableCell>SUP005</TableCell>
                    <TableCell>EMP005</TableCell>
                    <TableCell>OR005</TableCell>
                    <TableCell>Andrew Wilson</TableCell>
                    <TableCell>2023-09-25</TableCell>
                    <TableCell>$550.00</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button className="h-8 w-8" size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
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

function FileEditIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
