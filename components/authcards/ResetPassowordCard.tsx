// @ts-nocheck
"use-client";
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
import { SkeletonDemo } from "./AuthSkeleton";
import { Label } from "@radix-ui/react-label";

export function ResetPasswordCard({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  resetPassword,
  loading,
}) {
  const [passwordsMismatch, setPasswordsMismatch] = React.useState(false);
  const [passwordType, setPasswordType] = React.useState("password");

  function compareAndUpdatePasswords() {
    if (password !== confirmPassword) {
      setPasswordsMismatch(true);
      setPassword("");
      setConfirmPassword("");
      return;
    }
    resetPassword();
  }

  function togglePassword() {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{loading ? "Loading..." : "Update Password"}</CardTitle>
        <CardDescription>
          Update your password and click on verify
        </CardDescription>
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
                <Input
                  id="name"
                  placeholder="Enter new password"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  placeholder="Confirm new password"
                  type={passwordType}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <Label onClick={togglePassword}>
                <input
                  type="checkbox"
                  checked={passwordType === "text"}
                  style={{ marginRight: "4px" }}
                />
                Show Password
              </Label>

              {passwordsMismatch ? (
                <p>Passwords dont match, try again</p>
              ) : null}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={compareAndUpdatePasswords}>Submit</Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
