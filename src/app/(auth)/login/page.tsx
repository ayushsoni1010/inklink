import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import UserLoginForm from "@/components/auth/UserLoginForm";
import BaseCard from "@/components/base/card";
import Link from "next/link";

const Login = async () => {
  const session = await getServerSession(options);
  console.log(session, 1010);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="lg:p-8 flex items-center justify-center">
      <BaseCard className="flex w-full sm:w-[400px] p-7">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4">
          <div className="flex flex-col space-y-1 ">
            <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in into your account
            </p>
          </div>
          <UserLoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By signing in, I agree to our{" "}
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
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="hover:underline underline-offset-4 hover:text-primary"
              >
                Sign me up!
              </Link>
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  );
};

export default Login;
