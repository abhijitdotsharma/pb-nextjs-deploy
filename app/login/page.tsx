"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginCard } from "@/components/authcards/LoginCard";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("response", response);
      toast.success("Login Successfull");
      // if(response.status === 200){
      //   router.push("/dashboard");
      // }
    } catch (error: any) {
      console.log("Login failed", error.response.data.error);
      setUser({
        email: "",
        password: "",
      });
      const msg = error.response.data.error;
      toast.error(msg);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <LoginCard user={user} setUser={setUser} onLogin={onLogin} />
        <Toaster />
      </div>
    </div>
  );
}
