"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BaseInputProps } from "@/interfaces/base/input";

const BaseInputStyles =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(BaseInputStyles, className)}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);

export { BaseInput };
