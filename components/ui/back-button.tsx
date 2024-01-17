import React from "react";
import Link from "next/link";
import { Button } from "antd";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button type="link" className="w-full font-normal" size="small">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
