"use client";

import Banner from "@/components/elements/banner";
import Header from "@/website/header";
import Landing from "@/website/landing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <Banner />
        <Header />
        <Landing />
        {/* <img src="/assets/grid.png" alt="" className="h-screen w-fu" /> */}
        {/* <div className="text-center">
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
        </div> */}
      </div>
    </>
  );
}
