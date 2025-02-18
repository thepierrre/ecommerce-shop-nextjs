"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { User } from "@/app/lib/definitions/user-definitions";

async function checkIfEmailExists(email: string) {
  try {
    const data = await sql<User>`SELECT *
                                     FROM users
                                     WHERE email = '${email}' LIMIT 1`;
    return data.rows[0] || null;
  } catch (error) {
    console.error("Database error: ", error);
  }
}

const RegisterUserSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function login(formData: FormData) {}

export async function registerNewUser(formData: FormData) {
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email") as string;
  const password = formData.get("password");

  const validatedFields = RegisterUserSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return;
  }

  if ((await checkIfEmailExists(email)) !== null) {
    throw new Error("A user with this email already exists.");
  }
}
