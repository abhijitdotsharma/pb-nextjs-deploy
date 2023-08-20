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

export function VerifyEmailCard({ password, setPassword, verifyUserEmail }) {
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => verifyUserEmail()}>Verify</Button>
      </CardFooter>
    </Card>
  );
}
