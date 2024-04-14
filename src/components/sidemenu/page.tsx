"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

export default function Sidemenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <aside
        className={`w-auto w-38 flex flex-col items-start bg-gray-100 p-4 space-y-4 hidden lg:flex ${
          isMenuOpen ? "!block" : ""
        }`}
      >
        <div className="flex-1 overflow-y-auto py-2">
          <nav className="grid items-start text-sm">
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3" href="/dashboard/">
                  <LayoutDashboardIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Dashboard</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2"></CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <WarehouseIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Inventory</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/inventory/addproduct/"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Add Product</span>
                </Link>
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/inventory/"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">View Inventory</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <ShoppingCartIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Sales</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/sales/addsales/"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Create Invoice</span>
                </Link>
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/sales/saleshistory/"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Sales History</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <MoneyIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Expense</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/expense/addexpense"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Create Expense</span>
                </Link>
                <Link className="grid h-10 items-center gap-2" href="/expense">
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Expense History</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <GiveIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Payroll</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/payroll/addpayroll"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Create Payroll</span>
                </Link>
                <Link className="grid h-10 items-center gap-2" href="">
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Payroll History</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <WalletIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Purchase</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/purchase/addpurchase"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Create Purchase</span>
                </Link>
                <Link className="grid h-10 items-center gap-2" href="/purchase">
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Purchase History</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <UserIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Employee</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/employee/addemployee"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Add Employee</span>
                </Link>
                <Link
                  className="grid h-10 items-center gap-2 "
                  href="/employee/viewemployee"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light ">View Employee</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <UsersIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Customers</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2"></CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <UsersIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Supplier</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2"></CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid items-start">
              <CollapsibleTrigger className="grid h-10 items-center cursor-pointer [&:not([data-state=open])~*:hidden]:last-of-type:translate-y-[-100%]">
                <a className="flex items-center space-x-3">
                  <PackageIcon className="h-8 w-8" />
                  <span className="text-sm font-normal">Delivery</span>
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 py-2">
                <Link
                  className="grid h-10 items-center gap-2"
                  href="/delivery/adddelivery"
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light">Create Delivery</span>
                </Link>
                <Link
                  className="grid h-10 items-center gap-2 "
                  href=""
                >
                  <PieChartIcon className="w-4 h-4" />
                  <span className="font-light ">Logistics History</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>
      </aside>
      <aside
        className={`w-auto flex flex-col items-start absolute p-4 space-y-4 lg:hidden  ${
          isMenuOpen ? "ml-36" : ""
        }`}
      >
        <button onClick={toggleMenu} className="flex items-center space-x-2">
          <Menu className="h-8 w-8" />
        </button>
      </aside>
    </>
  );
}

function MoneyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function GiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </svg>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function StoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function ViewIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function WarehouseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}

export { Sidemenu };
