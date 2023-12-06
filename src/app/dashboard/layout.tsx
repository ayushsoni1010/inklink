import type { Metadata } from "next";
import Sidebar from "@/layout/dashboard/sidebar";

export const metadata: Metadata = {
  title: "inklink",
  description: "Write Once, Share Everywhere!",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex min-h-screen max-w-lg justify-center"}>
      <Sidebar />
      {children}
    </div>
  );
}
