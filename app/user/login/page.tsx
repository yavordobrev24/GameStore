"use client";
import { login } from "@/app/actions";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState(login, undefined);
  return (
    <main className="flex-1 flex flex-col mx-auto justify-center gap-2 item">
      <h2 className="text-3xl text-center">Login</h2>
      <form className="flex flex-col gap-3" action={action}>
        <section className="flex flex-col gap-[0.4rem]">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-[20vw] py-[1rem] px-[1.2rem] rounded border-2"
            placeholder="Demo: yavor@gmail.com"
          />
        </section>
        <section className="flex flex-col gap-[0.4rem]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-[20vw] py-[1rem] px-[1.2rem] rounded border-2"
            placeholder="Demo: 123456"
          />
        </section>
        {state?.message && <p className="error">{state.message}</p>}
        <button className="button">Login</button>
      </form>
      <Link href="/user/register">
        <p className="text-primary hover:underline">Don't have an account?</p>
      </Link>
    </main>
  );
}
