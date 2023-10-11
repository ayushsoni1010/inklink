import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import SignupForm from "@/components/auth/SignupForm";
import BaseCard from "@/components/base/card";

const SignUp = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="lg:p-8 flex items-center justify-center">
      <BaseCard className="flex w-full sm:w-[400px] p-7">
        <div className="flex-col justify-center space-y-4">
          <div className="flex flex-col space-y-1 ">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignupForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking "Sign up", I agree to our{" "}
            <Link
              href="/terms-of-service"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:underline underline-offset-4 hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  );
};

export default SignUp;
