"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log("trying to register");
    console.log(email, password);
  };
  return (
    <main className="flex-1 flex flex-col mx-auto justify-center gap-2 item">
      <h2 className="text-3xl text-center">Register</h2>
      <form className="flex flex-col gap-3">
        <section className=" form-section">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="password"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="form-section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button className="btn" onClick={handleRegister}>
          Register
        </button>
      </form>
      <Link href="/user/login" className="w-fit">
        <p className="text-primary hover:underline ">
          Already have an account?
        </p>
      </Link>
    </main>
  );
}
