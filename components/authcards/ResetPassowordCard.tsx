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
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
  const [confirmPasswordType, setConfirmPasswordType] =
    React.useState("password");

  function compareAndUpdatePasswords() {
    if (password !== confirmPassword) {
      setPasswordsMismatch(true);
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

  function toggleConfirmPassword() {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{loading ? "Loading..." : "Update Password"}</CardTitle>
        <CardDescription>
          Update your password and click on verify
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-row space-y-1.5">
            <div>
              <Input
                id="name"
                placeholder="Enter new password"
                type={passwordType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {passwordType === "password" ? (
                <AiOutlineEye
                  style={{
                    position: "relative",
                    marginLeft: "2px",
                    marginTop: "8px",
                  }}
                  onClick={togglePassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  style={{
                    position: "relative",
                    marginLeft: "2px",
                    marginTop: "8px",
                  }}
                  onClick={togglePassword}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row space-y-1.5">
            <div>
              <Input
                id="name"
                placeholder="Confirm new password"
                type={confirmPasswordType}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              {confirmPasswordType === "password" ? (
                <AiOutlineEye
                  style={{
                    position: "relative",
                    marginLeft: "2px",
                    marginTop: "8px",
                  }}
                  onClick={toggleConfirmPassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  style={{
                    position: "relative",
                    marginLeft: "2px",
                    marginTop: "8px",
                  }}
                  onClick={toggleConfirmPassword}
                />
              )}
            </div>
          </div>

          {passwordsMismatch ? <p> Passwords dont match, try again </p> : ""}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={compareAndUpdatePasswords}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
