"use server";

import pool from "@/postres-db/db";
import { FormState, SignupFormSchema } from "./lib/definitions";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "./lib/session";

export const login = async (state: FormState, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2;",
      [email, password]
    );

    if (user.rows.length == 0) {
      throw new Error();
    }
    await createSession(user.id);
    console.log("Logged in");
  } catch (e) {
    return {
      message: "Email or password invalid",
    };
  }
  redirect("/");
};
export const register = async (state: FormState, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const validatedFields = SignupFormSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const user = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;",
      [email, password]
    );
    console.log(user.rows[0].id);
    await createSession(user.id);
  } catch (e) {
    console.log("Email already taken");

    return {
      message: "Email already taken",
    };
  }

  redirect("/");
};
export async function logout() {
  deleteSession();
  redirect("/user/login");
}

export async function searchGame(formData: FormData) {
  const query = formData.get("query");
  redirect(`/search?query=${query}`);
}
