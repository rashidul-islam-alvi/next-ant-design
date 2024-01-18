import React from "react";
import ImageComponent from "./ui/custom-image-component";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-5 items-center">
        <ImageComponent
          path="/paper.png"
          alt="nav_logo_paper"
          className="w-14"
        />
        <h2 className="text-2xl">Stack</h2>
      </div>
    </Link>
  );
};

export default Logo;
