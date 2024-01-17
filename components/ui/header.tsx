import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  className?: string;
  label: string;
}

const Header = ({ className, label }: HeaderProps) => {
  return <h2 className={cn("text-2xl  text-[#323B4B]", className)}>{label}</h2>;
};

export default Header;
