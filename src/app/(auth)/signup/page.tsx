import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import SignupForm from "@/components/auth/SignupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const SignUp = async () => {
  // const session = await getServerSession(options);

  // if (session) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="lg:p-10 flex items-center justify-center">
      <Card className="max-w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl"> Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignupForm />
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground">
            By signing up, I agree to our{" "}
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
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="hover:underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
