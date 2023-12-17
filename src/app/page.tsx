"use client";

import { Button } from "@/components/ui/button";
import Header from "@/website/header";
import HeroSection from "@/website/hero-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <Header />
        <HeroSection />
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
