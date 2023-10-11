"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BaseButton } from "../base/button";
import { BaseIcon } from "../base/icon";
import { BaseInput } from "../base/input";
import { SignUpDataType, SignUpErrorType } from "@/interfaces/ui/signup";

const UserLoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<SignUpDataType>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<SignUpErrorType>({
    isError: false,
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeEmail = (e: { target: { value: any } }) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e: { target: { value: any } }) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const signInData = await signIn("credentials", {
      email: "ayush@fifthtry.com",
      password: "inklink123",
      redirect: false,
    });

    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async (e: any) => {
    e.preventDefault();
    console.log("google");
    const signInData = await signIn("google");
    console.log(signInData, "google");

    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  const handleGithubLogin = async (e: any) => {
    e.preventDefault();
    console.log("github");
    const signInData = await signIn("github");

    console.log(signInData, "github");

    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <BaseButton variant="outline" size="medium" type="button">
            {loading ? (
              <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <BaseIcon.google className="mr-2 h-4 w-4" />
            )}{" "}
            Google
          </BaseButton>
          <BaseButton variant="outline" size="medium" type="button">
            {loading ? (
              <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <BaseIcon.github className="mr-2 h-4 w-4" />
            )}{" "}
            GitHub
          </BaseButton>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 z-10 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
          <div className="grid gap-2">
            <p className="text-sm font-medium">Email</p>
            <BaseInput
              type="email"
              placeholder="name@example.com"
              value={data.email}
              onChange={handleChangeEmail}
            />
            <p className="font-medium -mt-1 text-sm text-destructive">
              {error.errorEmailMessage}
            </p>
          </div>
          <div className="grid gap-2">
            <p className="text-sm font-medium">Password</p>
            <BaseInput
              type="password"
              placeholder="************"
              value={data.password}
              onChange={handleChangePassword}
            />
            <p className="font-medium -mt-1 text-sm text-destructive">
              {error.errorPasswordMessage}
            </p>
          </div>
          <Link
            href="/forgot-password"
            className="ml-auto -mt-2 text-sm hover:underline"
          >
            <p>Forgot Password?</p>
          </Link>
          <BaseButton variant="primary" size="medium" type="submit">
            Login
          </BaseButton>
        </form>
      </div>
    </>
  );
};

export default UserLoginForm;
