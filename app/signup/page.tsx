"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { SignupCard } from "@/components/authcards/SignupCard";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [resError, setResError] = useState(false);
  const [successSignup, setSuccessSignup] = useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "password", // default till user verifies via email and updates
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      if (response.data.status === 201) {
        setUser({
          email: "",
          password: "password",
        });
        setSuccessSignup(true);
        toast.success(
          "Success, Please verify your account by visiting your email"
        );
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        // if user already signed up with current email, /api/users/signup will
        // respond 400, show a message on UI to user and redirect them to /login
        setResError(true);
        setTimeout(() => {
          router.replace("/login");
        }, 2000);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {resError ? (
        <div>You are already signed up, redirecting you to login</div>
      ) : (
        <>
          <SignupCard
            user={user}
            setUser={setUser}
            onSignup={onSignup}
            successSignup={successSignup}
          />
          <Toaster />
        </>
      )}
    </div>
  );
}
