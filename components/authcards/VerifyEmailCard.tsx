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

export function VerifyEmailCard({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  verifyUserEmail,
}) {
  const [passwordsMismatch, setPasswordsMismatch] = React.useState(false);
  const [passwordType, setPasswordType] = React.useState("password");

  function comparePasswordsAndVerifyEmail() {
    if (password !== confirmPassword) {
      setPasswordsMismatch(true);
      setPassword("");
      setConfirmPassword("");
      return;
    }
    verifyUserEmail();
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
        <CardTitle>Verify your account</CardTitle>
        <CardDescription>
          Update your password and click on verify
        </CardDescription>
      </CardHeader>
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

          <button onClick={togglePassword}>
            {passwordType === "text" ? "Hide" : "Show"} Password
          </button>

          {passwordsMismatch ? <p>Passwords dont match, try again</p> : null}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={comparePasswordsAndVerifyEmail}>Verify</Button>
      </CardFooter>
    </Card>
  );
}
