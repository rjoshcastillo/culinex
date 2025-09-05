"use client";

import { Menu } from "lucide-react";

type TopNavProps = {
  onClick: () => void;
};
const TopNav = ({ onClick }: TopNavProps) => {
  return (
    <div className="h-15 w-full px-4 rounded-b-lg bg-accent shadow-lg flex items-center">
      <Menu className="cursor-pointer" onClick={onClick} />
    </div>
  );
};

export default TopNav;
