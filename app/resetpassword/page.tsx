"use client";

import axios from "axios";
import Link from "next/link";
import bcryptjs from "bcryptjs";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const resetPassword = async () => {
    const salt = await bcryptjs.genSalt(10);
    const newPassword = await bcryptjs.hash(password, salt);

    try {
      const response = await axios.post("/api/users/resetpassword", {
        token,
        newPassword,
      });
      console.log("res", response);
    } catch (error: any) {
      console.log("err", error);
      setPassword("");
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log("urlToken", urlToken);

    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={resetPassword}>Submit</button>
      </div>
      <Toaster />
    </div>
  );
}
