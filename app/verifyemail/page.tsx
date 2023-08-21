/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
"use client";

import axios from "axios";
import Link from "next/link";
import bcryptjs from "bcryptjs";
import React, { useEffect, useState } from "react";
import { VerifyEmailCard } from "@/components/authcards/VerifyEmailCard";
import toast, { Toaster } from "react-hot-toast";
import { SkeletonDemo } from "@/components/authcards/AuthSkeleton";
import { AuthErrorCard } from "@/components/authcards/AuthErrorCard";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageError, setPageError] = useState({
    status: false,
    msg: "",
  });

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

  const verifyUserEmailOnLoad = async (token) => {
    const salt = await bcryptjs.genSalt(10);
    const newPassword = await bcryptjs.hash("PasswordWontMatter", salt);

    // preVerify flag, lets us return from /api/users/verifyemail api
    // without saving the user as verified, which has to be used on update password logic
    const preVerify = "pageload";
    try {
      const response = await axios.post("/api/users/resetpassword", {
        token,
        newPassword,
        preVerify,
      });
      console.log("res", response.status);
      if (response.status === 200) {
      }
    } catch (error) {
      console.log("err", error);
      setPageError({
        status: true,
        msg: error.response.data.error,
      });
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log("urlToken", urlToken);

    setToken(urlToken || "");
    verifyUserEmailOnLoad(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {pageLoading ? (
        <SkeletonDemo />
      ) : (
        <>
          {pageError.status ? (
            <AuthErrorCard errorMessage={pageError.msg} />
          ) : (
            <>
              <VerifyEmailCard
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                verifyUserEmail={verifyUserEmail}
                loading={loading}
              />
              <Toaster />
            </>
          )}
        </>
      )}
    </div>
  );
}
