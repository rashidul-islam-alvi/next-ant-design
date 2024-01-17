import React from "react";
import { SocialButton } from "./ui/social-button";

const Social = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <SocialButton
        iconPath="/google.png"
        iconAlt="google_icon"
        label="Sign In with Google"
        href=""
      />
      <SocialButton
        iconAlt="apple_icon"
        iconPath="/apple.png"
        label="Sign In with Apple ID"
        href=""
      />
    </div>
  );
};

export default Social;
