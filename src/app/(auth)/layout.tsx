"use client";

import AuthSidebarLayout from "@/layout/auth";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="flex justify-center h-screen">
        <div className="hidden h-full p-16 text-white dark:border-r lg:block lg:w-7/12 bg-brand-grey-900 overflow-hidden bg-zinc-900">
          <AuthSidebarLayout />
        </div>
        <div className="flex items-center justify-center mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
