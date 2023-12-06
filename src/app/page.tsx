import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="grid gap-3 items-center justify-center h-screen">
        <div className="text-center">
          {" "}
          <Button variant={"ghost"}>Website in progress 🚀</Button>
          <p className="text-sm mt-2 text-center">
            Checkout{" "}
            <a href="/login" className="underline underline-offset-4">
              Login
            </a>{" "}
            and{" "}
            <a href="/signup" className="underline underline-offset-4">
              Signup
            </a>{" "}
            pages
          </p>
        </div>
      </div>
    </>
  );
}
