import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import UserLoginForm from "@/components/auth/UserLoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

const Login = async () => {
  const session = await getServerSession(options);
  console.log(session, 1010);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="md:p-10 flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Log in</CardTitle>
          <CardDescription>
            Enter your email below to sign in into your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <UserLoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground">
            By signing in, I agree to our{" "}
            <Link
              href="/terms-of-service"
              className="underline-offset-4 hover:text-primary hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline-offset-4 hover:text-primary hover:underline"
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
