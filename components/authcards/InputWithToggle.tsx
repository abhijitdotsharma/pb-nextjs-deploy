"use-client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function InputWithToggle({
  password,
  setPassword,
  passwordType,
  togglePassword,
}) {
  return (
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
  );
}
