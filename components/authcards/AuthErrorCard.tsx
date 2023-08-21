import * as React from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function AuthErrorCard({ errorMessage }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle> Oops, {errorMessage}</CardTitle>
      </CardHeader>
      <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          href="/login"
          className="px-4 py-2 text-black-100 no-underline rounded hover:underline hover:text-black-200"
        >
          Go To Login Page
        </Link>
      </CardFooter>
    </Card>
  );
}
