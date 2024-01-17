import { cn } from "@/lib/utils";
import React from "react";

interface SubHeaderProps {
  label: string;
  className?: string;
}

const SubHeader = ({ label, className }: SubHeaderProps) => {
  return (
    <p
      className={cn(
        "font-semibold text-[15px] text-[#8A94A6] tracking-wide",
        className
      )}
    >
      {label}
    </p>
  );
};

export default SubHeader;
