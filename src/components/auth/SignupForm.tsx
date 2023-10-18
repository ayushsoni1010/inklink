"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BaseIcon } from "@/base/icon";
import { helpers } from "@/helpers/helpers";
import { SignUpDataType, SignUpErrorType } from "@/interfaces/ui/signup";

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
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline">
          {loading ? (
            <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <BaseIcon.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button variant="outline">
          {loading ? (
            <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <BaseIcon.github className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <form onSubmit={handleSignUpWithEmail} className="grid gap-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="name@example.com"
            value={data.email}
            onChange={handleChangeEmail}
          />
          <p className="text-sm -mt-1 text-destructive">
            {error.errorEmailMessage}
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="************"
            value={data.password}
            onChange={handleChangePassword}
          />
          <p className="text-sm -mt-1 text-destructive">
            {error.errorPasswordMessage}
          </p>
        </div>
        <Button type="submit">
          {loading && (
            <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign up
        </Button>
      </form>
    </>
  );
}

export default SignupForm;
