import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { cn } from "@/lib/utils";
import ImageComponent from "./custom-image-component";

interface BackButtonProps {
  label: string;
  href: string;
  iconPath: string;
  iconAlt: string;
  className?: string;
}

export const SocialButton = ({
  label,
  href,
  className,
  iconPath,
  iconAlt,
}: BackButtonProps) => {
  return (
    <Button
      size="large"
      style={{
        backgroundColor: "#F0F5FA",
        color: "#8A94A6",
        padding: "",
        height: "50px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyItems: "center",
      }}
      className={cn("w-full", className)}
    >
      <ImageComponent className="w-6 h-6" path={iconPath} alt={iconAlt} />
      <Link href={href}>{label}</Link>
    </Button>
  );
};
