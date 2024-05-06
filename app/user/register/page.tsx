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
        <section className=" form-section">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" />
          {(state?.errors?.email && (
            <p className="error">{state.errors.email}</p>
          )) ||
            (state?.message && <p className="error">{state.message}</p>)}
        </section>
        <section className="form-section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          {state?.errors?.password && (
            <div className="error">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <button className="btn">Register</button>
      </form>
      <Link href="/user/login" className="w-fit">
        <p className="text-primary hover:underline ">
          Already have an account?
        </p>
      </Link>
    </main>
  );
}
