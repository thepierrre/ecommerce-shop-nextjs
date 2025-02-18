import { sql } from "@vercel/postgres";
import { User } from "@/app/lib/definitions/user-definitions";

export function saltAndHashPassword(password: string): string {
  //FIXME: implement the salt and hash logic
  return password;
}

export async function getUserFromDb(email: string, pwHash: string) {
  try {
    const data = await sql<User>`SELECT *
                                     FROM users
                                     WHERE email = ${email}
                                       AND password = ${pwHash} LIMIT 1`;
    return data.rows[0] || null;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch the user.");
  }
}
