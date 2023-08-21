"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ForgotPasswordCard } from "@/components/authcards/ForgotPasswordCard";

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });

  const getEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", user);
      setEmailSent(true);
      setUser({
        email: "",
      });
      console.log("response", response);
      toast.success("Email Sent for password update");
    } catch (error: any) {
      console.log("Login failed", error.response.data.error);
      const msg = error.response.data.error;
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ForgotPasswordCard
        user={user}
        setUser={setUser}
        getEmail={getEmail}
        emailSent={emailSent}
        loading={loading}
      />
      <Toaster />
    </div>
  );
}
