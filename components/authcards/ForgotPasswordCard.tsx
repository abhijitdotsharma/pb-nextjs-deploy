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
import { SkeletonDemo } from "./AuthSkeleton";

export function ForgotPasswordCard({
  user,
  setUser,
  getEmail,
  emailSent,
  loading,
}) {
  console.log("from pages, user", user);
  return (
    <Card className="pb-8">
      <CardHeader className="py-8">
        <CardTitle>{loading ? "Loading..." : "Enter Email"}</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              id="name"
              type="email"
              placeholder="Type your email here"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={emailSent} onClick={getEmail}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
