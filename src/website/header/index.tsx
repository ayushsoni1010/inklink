"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavbarOptions from "./navbar-options";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const Header: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <header className="w-full py-3 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="flex gap-1">
            <Image src="/logo.svg" alt="Brand Logo" width={22} height={22} />
            <h1 className="text-xl font-semibold">inklink</h1>
          </div>
        </Link>
        <NavbarOptions />
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => router.push("/login")}>
            Sign in
          </Button>
          <Button onClick={() => router.push("/signup")}>
            Get Started <Icon name="arrow-right" className="ml-1" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
