"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <LoginCard
          user={user}
          setUser={setUser}
          onLogin={onLogin}
          loading={loading}
        />
        <Toaster />
      </div>
    </div>
  );
}
