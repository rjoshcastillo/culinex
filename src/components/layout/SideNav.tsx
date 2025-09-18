"use client";

import {
  ChartCandlestick,
  HomeIcon,
  LayoutDashboard,
  NotepadText,
  ShoppingBasket,
  TableProperties,
  Users,
  UserStar,
  X,
} from "lucide-react";
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
import { useRouter, usePathname } from "next/navigation";

type SideNavProps = {
  className?: string;
  isMini?: boolean;
  onClose?: () => void;
};
const SideNav = ({ className, isMini, onClose }: SideNavProps): ReactNode => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const navItems = [
    {
      label: "Dashboard",
      value: "/dashboard",
      icon: <LayoutDashboard size={16} />,
      isActive: pathname === "/dashboard",
    },
    {
      label: "Products",
      icon: <ShoppingBasket size={16} />,
      navs: [
        {
          label: "List",
          value: "/products",
          isActive: pathname === "/products",
        },
        {
          label: "Add",
          value: "/products/add",
          isActive: pathname === "/products/add",
        },
        {
          label: "Category",
          value: "/products/category",
        },
      ],
    },
    {
      label: "Inventory",
      value: "/inventory",
      icon: <TableProperties size={16} />,
      navs: [
        { label: "Add", value: "/add" },
        { label: "List", value: "/list" },
      ],
    },
    {
      label: "Orders",
      value: "/orders",
      icon: <NotepadText size={16} />,
      navs: [
        { label: "List", value: "/list" },
        { label: "Details", value: "/add" },
      ],
    },
    {
      label: "Customers",
      value: "/orders",
      icon: <Users size={16} />,
    },
    {
      label: "Staffs",
      value: "/orders",
      icon: <UserStar size={16} />,
      navs: [
        { label: "List", value: "/add" },
        { label: "Details", value: "/list" },
      ],
    },
    {
      label: "Reports",
      value: "/orders",
      icon: <ChartCandlestick size={16} />,
    },
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
              iconStart={item.icon}
              items={isMini ? {} : item.navs}
              onClick={(url) => redirect(url)}
            />
          ) : (
            <Button
              className={clsx(
                item.isActive
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "hover:bg-button-2"
              )}
              key={item.label}
              iconStart={item.icon}
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
