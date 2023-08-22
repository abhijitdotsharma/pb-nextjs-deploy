"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginCard } from "@/components/authcards/LoginCard";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  // const router = useRouter();
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
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="outline-red p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">PyBeam</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don&apos;t have an account?</span>
            <a href="#" className="underline">
              Contact Us
            </a>
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
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            {loading ? "Loading..." : "Account Login"}
          </h3>
          <LoginCard
            user={user}
            setUser={setUser}
            onLogin={onLogin}
            loading={loading}
          />
          <Toaster />
        </div>
      </div>
    </div>
  );
}
