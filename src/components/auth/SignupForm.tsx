"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BaseButton } from "@/components/base/button";
import { BaseIcon } from "@/components/base/icon";
import { BaseInput } from "@/components/base/input";
import { helpers } from "@/helpers/helpers";
import { SignUpDataType, SignUpErrorType } from "@/interfaces/ui/signup";
import Link from "next/link";

function SignupForm() {
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

  const handleSignUpWithEmail = async (e: {
    preventDefault(): unknown;
    target: any;
  }) => {
    e.preventDefault();
    setError({
      isError: false,
      errorEmailMessage: "",
      errorPasswordMessage: "",
    });
    setLoading(true);

    const response = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data: any = await response.json();
        console.log(data);

        data?.message?.issues.map((item: any, index: number) => {
          if (item.path[0] === "email") {
            console.log(item.message, "email", item.path[0]);
            setError({
              ...error,
              errorEmailMessage: item.message ?? "Invalid",
              isError: true,
            });
          } else {
            console.log(item.message, "password", item.path[0]);
            setError({
              ...error,
              errorPasswordMessage: item.message,
              isError: true,
            });
          }
        });
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });

    // if (!data.email || !data.password) {
    //   if (!data.email) {
    //     setError({
    //       ...error,
    //       errorEmailMessage: "Email is required",
    //     });
    //     setLoading(false);
    //   }
    //   if (!data.password) {
    //     setError({
    //       ...error,
    //       errorPasswordMessage: "Password is required",
    //     });
    //     setLoading(false);
    //   }
    //   return;
    // }

    // if (!helpers.validEmail(data.email)) {
    //   setError({
    //     isError: true,
    //     errorEmailMessage: "Please enter a valid email",
    //     errorPasswordMessage: "Please enter alteast 8 characters",
    //   });
    //   setLoading(false);
    //   return;
    // }

    // if (helpers.validEmail(data.email)) {
    //   setError({
    //     isError: false,
    //     errorEmailMessage: "",
    //     errorPasswordMessage: "",
    //   });
    //   setLoading(true);

    //   const response = await fetch("api/user", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: data.email,
    //       password: data.password,
    //     }),
    //   });

    //   const newUserData = await response.json();
    //   console.log(newUserData);
    //   // router.push("/dashboard");
    // }
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
        <form onSubmit={handleSignUpWithEmail} className="flex flex-col gap-2">
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
          <BaseButton variant="primary" size="medium" type="submit">
            {loading && (
              <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </BaseButton>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
