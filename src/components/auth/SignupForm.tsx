"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BaseButton } from "@/components/base/button";
import { BaseIcon } from "@/components/base/icon";
import { BaseInput } from "@/components/base/input";
import { helpers } from "@/helpers/helpers";
import { logInWithMagicLinkViaEmail } from "@/config/supabase";

function SignupForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const handleEmail = (e: { target: any }) => {
    setError(false);
    setErrorMessage("");
    setEmail(e.target.value);
  };

  const handleSignUpWithEmail = async (e: {
    preventDefault(): unknown;
    target: any;
  }) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");
    setLoading(true);

    if (!email) {
      setError(true);
      setErrorMessage("Email is required");
      setLoading(false);
      return;
    }

    if (!helpers.validEmail(email)) {
      setError(true);
      setErrorMessage("Please enter a valid email");
      setLoading(false);
      return;
    }

    if (helpers.validEmail(email)) {
      setError(false);
      setErrorMessage("");
      setLoading(true);

      await logInWithMagicLinkViaEmail(email);

      router.push("/dashboard");
    }

    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSignUpWithEmail}>
        <div className="flex flex-col gap-2">
          <BaseInput
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmail}
          />
          {error ? (
            <p className="font-medium -mt-1 text-sm text-destructive">
              {errorMessage}
            </p>
          ) : (
            ""
          )}
          <BaseButton variant="primary" size="medium" type="submit">
            {loading ? (
              <BaseIcon.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <></>
            )}
            Sign up with Email
          </BaseButton>
        </div>
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
    </>
  );
}

export default SignupForm;
function signUpWithEmail(email: string) {
  throw new Error("Function not implemented.");
}
