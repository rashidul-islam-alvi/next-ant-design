"use server";

import { cookies } from "next/headers";

interface StoreTokenRequest {
  token: string;
}

export async function storeToken({ token }: StoreTokenRequest) {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    expires: 86400000,
  });
}
