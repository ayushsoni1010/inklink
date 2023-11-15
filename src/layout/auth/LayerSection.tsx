"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";

const LayerSection: React.FunctionComponent = () => {
  return (
    <section>
      <div className="flex justify-between w-full">
        <div>
          <Image
            src="/assets/auth/layer.svg"
            alt="Layer"
            width={300}
            height={271}
            className="rounded-xl border-2 border-solid border-gray-400 shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-4 items-end max-w-xs">
          <Icon name="eye" />
          <h2 className="text-2xl font-medium drop-shadow-lg text-right w-56">
            Watch what the whales are doing
          </h2>
          <p className="text-sm opacity-70 font-medium text-right">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LayerSection;
