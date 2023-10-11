import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import UserLoginForm from "@/components/auth/UserLoginForm";

const Login = async () => {
  const session = await getServerSession(options);
  console.log(session, 1010);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
        </div>
        <UserLoginForm />
      </div>
    </div>
  );
};

export default Login;
