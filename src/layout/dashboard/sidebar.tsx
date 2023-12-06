"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sidebarOptions } from "@/data/dashboard/__sidebarOptions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const Sidebar: React.FunctionComponent = () => {
  const path = usePathname();

  return (
    <nav className="flex w-60 bg-white h-screen p-4 fixed border-r">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-8">
          <Link href="/dashboard">
            <div className="flex items-center justify-start gap-2 px-4">
              <Image src="/logo.svg" width={25} height={25} alt="Brand logo" />
              <h1 className="text-2xl font-bold">inklink</h1>
            </div>
          </Link>
          <ul className="flex flex-col gap-1">
            {sidebarOptions.map((navItem) => {
              return (
                <Link
                  href={navItem.link}
                  key={navItem.key}
                  className={cn(
                    "pl-4 h-11 rounded-md flex items-center justify-start w-full",
                    path === navItem.link
                      ? "bg-gray-100 shadow-sm border border-gray-200"
                      : "hover:bg-gray-100 hover:shadow-sm"
                  )}
                >
                  <li className="flex gap-3 justify-start items-center my-auto w-full h-full">
                    <Icon name={navItem.icon} className="w-6 h-6" />
                    <p
                      className={cn(
                        "text-base hover:translate-x-1.5 transition w-full",
                        path === navItem.link
                          ? "text-gray-900 font-bold"
                          : "text-gray-700 font-medium"
                      )}
                    >
                      {navItem.title}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="p-4 bg-gray-100 rounded-md flex flex-col gap-4 items-center justify-center">
          <Image
            src="./next.svg"
            width={50}
            height={50}
            alt="Rocket Icon"
            className="w-6 h-6"
          />
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-gray-900 font-semibold text-sm">
              Upgrade Account
            </h3>
            <p className="text-gray-600 text-xs font-normal">
              Access to all integrations
            </p>
          </div>
          <Button className="w-full">Upgrade</Button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
