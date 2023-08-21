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
import InputWithToggle from "./InputWithToggle";

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
          <InputWithToggle
            password={password}
            setPassword={setPassword}
            passwordType={passwordType}
            setPasswordType={setPasswordType}
          />
          <InputWithToggle
            password={confirmPassword}
            setPassword={setConfirmPassword}
            passwordType={confirmPasswordType}
            setPasswordType={setConfirmPasswordType}
          />
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
