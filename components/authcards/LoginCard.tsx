import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginCard({ user, setUser, onLogin, loading }) {
  console.log("from pages, user", user);

  return (
    <Card>
      <CardContent className="py-8">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5 py-4">
            <Label htmlFor="name">Email</Label>
            <Input
              id="name"
              // placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Password</Label>
            <Input
              id="name"
              // placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onLogin}>{loading ? "Loading..." : "Submit"}</Button>
        <Link
          href="/forgotpassword"
          className="px-4 py-2 text-black-100 no-underline rounded hover:underline hover:text-black-200"
        >
          Forgot Password ?
        </Link>
      </CardFooter>
    </Card>
  );
}
