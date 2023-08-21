/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
"use client";

import axios from "axios";
import Link from "next/link";
import bcryptjs from "bcryptjs";
import React, { useEffect, useState } from "react";
import { VerifyEmailCard } from "@/components/authcards/VerifyEmailCard";
import toast, { Toaster } from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyUserEmail = async () => {
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const newPassword = await bcryptjs.hash(password, salt);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/verifyemail", {
        token,
        newPassword,
      });
      toast.success("Email Verified login now");
      setPassword("");
      setConfirmPassword("");
      console.log("res", response);
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
      <VerifyEmailCard
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        verifyUserEmail={verifyUserEmail}
        loading={loading}
      />
      <Toaster />
    </div>
  );
}
