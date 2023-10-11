import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "@/lib/authOptions";

export const GET = async (req: Request) => {
  const session = await getServerSession(options);

  return NextResponse.json({
    authenticated: !!session,
  });
};
