"use client";

import { X } from "lucide-react";
import Button from "../ui/Button";
import DropdownNav from "../ui/DropdownNav";
import { ReactNode, useEffect } from "react";
import clsx from "clsx";
import AddIcon from "@/assets/icons/add-square.svg";
import DasbhoardIcon from "@/assets/icons/dashboard.svg";
import categeoryIcon from "@/assets/icons/category.svg";
import DetailsIcon from "@/assets/icons/list-details.svg";
import ListIcon from "@/assets/icons/list.svg";
import OrderIcon from "@/assets/icons/orders.svg";
import ProductIcon from "@/assets/icons/product-icon.svg";
import ReportIcon from "@/assets/icons/reports.svg";
import StaffIcon from "@/assets/icons/staffs.svg";
import CustomerIcon from "@/assets/icons/customers-icon.svg";
import InventoryIcon from "@/assets/icons/inventory-icon.svg";

type SideNavProps = {
  className?: string;
  isMini?: boolean;
  onClose?: () => void;
};
const SideNav = ({ className, isMini, onClose }: SideNavProps): ReactNode => {
  const navItems = [
    { label: "Dashboard", url: "/", icon: DasbhoardIcon },
    {
      label: "Products",
      url: "/products",
      icon: ProductIcon,
      navs: [
        { label: "List", url: "/list", icon: ListIcon },
        { label: "Add", url: "/add", icon: AddIcon },
        {
          label: "Category",
          url: "/category",
          icon: categeoryIcon,
        },
      ],
    },
    {
      label: "Inventory",
      url: "/inventory",
      icon: InventoryIcon,
      navs: [
        { label: "Add", url: "/add", icon: AddIcon },
        { label: "List", url: "/list", icon: ListIcon },
      ],
    },
    {
      label: "Orders",
      url: "/orders",
      icon: OrderIcon,
      navs: [
        { label: "List", url: "/list", icon: ListIcon },
        { label: "Details", url: "/add", icon: DetailsIcon },
      ],
    },
    {
      label: "Customers",
      url: "/orders",
      icon: CustomerIcon,
    },
    {
      label: "Staffs",
      url: "/orders",
      icon: StaffIcon,
      navs: [
        { label: "List", url: "/add", icon: AddIcon },
        { label: "Details", url: "/list", icon: ListIcon },
      ],
    },
    { label: "Reports", url: "/orders", icon: ReportIcon },
  ];

  return (
    <div
      className={clsx("w-full bg-accent h-screen shadow-lg px-4", className)}
    >
      <div className="h-[80px] w-full flex justify-between items-center">
        <div className="ml-4"></div>
        <X className="cursor-pointer lg:hidden" onClick={onClose} />
      </div>
      <div className="flex flex-col w-full gap-1">
        {navItems.map((item) =>
          item?.navs?.length ? (
            <DropdownNav
              key={item.label}
              label={isMini ? "" : item.label}
              icon={item.icon}
              navItems={isMini ? {} : item.navs}
            />
          ) : (
            <Button
              key={item.label}
              icon={item.icon}
              onClick={() => {
                console.log(item.url);
              }}
            >
              {isMini ? "" : item.label}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default SideNav;
