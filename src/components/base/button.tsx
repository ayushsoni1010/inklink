"use-client";

import React from "react";
import { BaseButtonProps } from "@/interfaces/base/button";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const BaseButtonStyles =
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

// `'primary', 'secondary', 'outline', 'destructive', 'ghost', 'link'`

const BaseButtonVariantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/800",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const BaseButtonSizeStyles = {
  small: "h-9 rounded-md px-3",
  medium: "h-10 px-4 py-2",
  large: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(
          BaseButtonStyles,
          BaseButtonVariantStyles[variant],
          BaseButtonSizeStyles[size]
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

BaseButton.displayName = "Button";

export { BaseButton };
