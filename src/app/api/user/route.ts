import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";
import { db } from "@/lib/db";

// Define a schema for input validation
const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = userSchema.parse(body);

    //   Check if the email is already in the database
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json({
        user: null,
        message: "User with this email already exists",
        status: 409,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({
      user: rest,
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      user: null,
      message: error,
      status: 400,
    });
  }
}
