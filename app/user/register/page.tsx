"use client";
import { register } from "@/app/actions";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Register() {
  const [state, action] = useFormState(register, undefined);

  return (
    <main className="flex-1 flex flex-col mx-auto justify-center gap-2 item">
      <h2 className="text-3xl text-center">Register</h2>
      <form className="flex flex-col gap-3" action={action}>
        <section className=" flex flex-col gap-[0.4rem]">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-[20vw] py-[1rem] px-[1.2rem] rounded border-2"
            placeholder="Email"
          />
          {(state?.errors?.email && (
            <p className="text-red-600">{state.errors.email}</p>
          )) ||
            (state?.message && <p className="text-red-600">{state.message}</p>)}
        </section>
        <section className="flex flex-col gap-[0.4rem]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-[20vw] py-[1rem] px-[1.2rem] rounded border-2"
            placeholder="Password"
          />
          {state?.errors?.password && (
            <div className="text-red-600">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <section className="flex flex-col gap-[0.4rem]">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="w-[20vw] py-[1rem] px-[1.2rem] rounded border-2"
            placeholder="Confirm password"
          />
          {state?.error && (
            <div className="text-red-600">
              <p>{state.error}</p>
            </div>
          )}
        </section>
        <button className="button">Register</button>
      </form>
      <Link href="/user/login" className="w-fit">
        <p className="text-primary hover:underline ">
          Already have an account?
        </p>
      </Link>
    </main>
  );
}
