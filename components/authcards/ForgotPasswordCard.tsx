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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{loading ? "Loading..." : "Enter Email"}</CardTitle>
      </CardHeader>
      {loading ? (
        <CardContent>
          <SkeletonDemo />
        </CardContent>
      ) : (
        <>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="name"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button disabled={emailSent} onClick={getEmail}>
              Submit
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
