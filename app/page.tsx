"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="p-3 h-screen justify-center items-center flex">
      <Button
        type="default"
        onClick={() => {
          router.push("/sign-in");
        }}
        className="uppercase"
        size="large"
      >
        Click here to sign in
      </Button>
    </main>
  );
}
