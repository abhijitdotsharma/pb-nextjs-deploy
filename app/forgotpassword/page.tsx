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
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="outline-red p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Forgot Your Password ? </a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            We get it, stuff happens. Just enter your email address and
            we&apos;ll send you a link to reset your password!
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <a href="#" className="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white w-[350px] md:flex-1">
          <ForgotPasswordCard
            user={user}
            setUser={setUser}
            getEmail={getEmail}
            emailSent={emailSent}
            loading={loading}
          />
          <Toaster />
        </div>
      </div>
    </div>
  );
}
