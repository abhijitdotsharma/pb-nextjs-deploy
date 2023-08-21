"use client";

import axios from "axios";
import Link from "next/link";
import bcryptjs from "bcryptjs";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ResetPasswordCard } from "@/components/authcards/ResetPassowordCard";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const resetPassword = async () => {
    const salt = await bcryptjs.genSalt(10);
    const newPassword = await bcryptjs.hash(password, salt);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/resetpassword", {
        token,
        newPassword,
      });
      console.log("res", response);
      toast.success("Password updated, login now");
    } catch (error: any) {
      console.log("err", error);
      setPassword("");
      const msg = error.response.data.error;
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log("urlToken", urlToken);

    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <ResetPasswordCard
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        resetPassword={resetPassword}
        loading={loading}
      />
      <Toaster />
    </div>
  );
}
