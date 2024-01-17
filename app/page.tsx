"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="p-3">
      <Button
        type="default"
        onClick={() => {
          router.push("/sign-up");
        }}
        className="uppercase"
        size="large"
      >
        Click here to sign up
      </Button>
    </main>
  );
}
