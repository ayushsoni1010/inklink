"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconProps = LucideProps & {
  name: keyof typeof dynamicIconImports;
};

const Icon = memo(({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
});

Icon.displayName = "Icon";

export { Icon };
