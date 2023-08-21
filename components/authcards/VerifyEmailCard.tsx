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

export function VerifyEmailCard({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  verifyUserEmail,
  loading,
}) {
  const [passwordsMismatch, setPasswordsMismatch] = React.useState(false);
  const [passwordType, setPasswordType] = React.useState("password");
  const [confirmPasswordType, setConfirmPasswordType] =
    React.useState("password");

  function comparePasswordsAndVerifyEmail() {
    if (password !== confirmPassword) {
      setPasswordsMismatch(true);
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
        <CardTitle>{loading ? "Loading..." : "Verify your account"}</CardTitle>
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

          {passwordsMismatch ? <p>Passwords dont match, try again</p> : null}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={comparePasswordsAndVerifyEmail}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
