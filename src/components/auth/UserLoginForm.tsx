"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { BaseButton } from "../base/button";
import { BaseIcon } from "../base/icon";
import { BaseInput } from "../base/input";

const UserLoginForm = () => {
  const router = useRouter();

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
      <form className="flex flex-col gap-1" onSubmit={handleLogin}>
        <div className="flex flex-col gap-2">
          <BaseInput type="email" placeholder="name@example.com" />
          <BaseInput type="password" placeholder="Enter your password" />
        </div>
        <Link
          href="/forgot-password"
          className="ml-auto mb-1 text-sm hover:underline"
        >
          <p>Forgot Password?</p>
        </Link>
        <BaseButton variant="primary" size="medium" type="submit">
          Login
        </BaseButton>
      </form>
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
      <div className="flex flex-col gap-2">
        <BaseButton
          variant="outline"
          size="medium"
          type="button"
          onClick={handleGoogleLogin}
        >
          {<BaseIcon.google className="mr-2 h-4 w-4" />} Google
        </BaseButton>
        <BaseButton
          variant="outline"
          size="medium"
          type="button"
          onClick={handleGithubLogin}
        >
          {<BaseIcon.github className="mr-2 h-4 w-4" />} GitHub
        </BaseButton>
      </div>
    </>
  );
};

export default UserLoginForm;
