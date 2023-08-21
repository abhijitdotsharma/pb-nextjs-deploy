import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginCard({ user, setUser, onLogin }) {
  console.log("from pages, user", user);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Email</Label>
            <Input
              id="name"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Password</Label>
            <Input
              id="name"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={onLogin}>Submit</Button>
        <Link
          href="/signup"
          className="px-4 py-2 text-black-100 no-underline rounded hover:underline hover:text-black-200"
        >
          Visit Signup page
        </Link>
      </CardFooter>
    </Card>
  );
}
