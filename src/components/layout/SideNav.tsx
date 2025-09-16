"use client";

import { X } from "lucide-react";
import Button from "../ui/Button";
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
import Collapsible from "../ui/Collapsible";
import { useRouter } from "next/navigation";

type SideNavProps = {
  className?: string;
  isMini?: boolean;
  onClose?: () => void;
};
const SideNav = ({ className, isMini, onClose }: SideNavProps): ReactNode => {
  const router = useRouter();
  const navItems = [
    { label: "Dashboard", value: "/dashboard", icon: DasbhoardIcon },
    {
      label: "Products",
      icon: ProductIcon,
      navs: [
        { label: "List", value: "/products", icon: ListIcon },
        { label: "Add", value: "/add", icon: AddIcon },
        {
          label: "Category",
          value: "/category",
          icon: categeoryIcon,
        },
      ],
    },
    {
      label: "Inventory",
      value: "/inventory",
      icon: InventoryIcon,
      navs: [
        { label: "Add", value: "/add", icon: AddIcon },
        { label: "List", value: "/list", icon: ListIcon },
      ],
    },
    {
      label: "Orders",
      value: "/orders",
      icon: OrderIcon,
      navs: [
        { label: "List", value: "/list", icon: ListIcon },
        { label: "Details", value: "/add", icon: DetailsIcon },
      ],
    },
    {
      label: "Customers",
      value: "/orders",
      icon: CustomerIcon,
    },
    {
      label: "Staffs",
      value: "/orders",
      icon: StaffIcon,
      navs: [
        { label: "List", value: "/add", icon: AddIcon },
        { label: "Details", value: "/list", icon: ListIcon },
      ],
    },
    { label: "Reports", value: "/orders", icon: ReportIcon },
  ];

  const redirect = (url: string) => {
    console.log(url);

    router.push(url);
  };
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
            <Collapsible
              key={item.label}
              label={isMini ? "" : item.label}
              icon={item.icon}
              items={isMini ? {} : item.navs}
              onClick={(url) => redirect(url)}
            />
          ) : (
            <Button
            className="hover:bg-button-2"
              key={item.label}
              icon={item.icon}
              onClick={() => redirect(item.value ?? "/")}
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
