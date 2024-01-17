import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  path: string;
  alt: string;
  className?: string;
}

export default function ImageComponent({
  path,
  alt,
  className,
}: ImageComponentProps) {
  return (
    <div
      className={cn("w-10 h-10 relative rounded-md cursor-pointer", className)}
    >
      <Image src={path} alt={alt} className="absolute" fill />
    </div>
  );
}
