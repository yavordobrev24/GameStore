"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
  };
  return (
    <main className="flex-1 flex flex-col mx-auto justify-center gap-2 item">
      <h2 className="text-3xl text-center">Login</h2>
      <form className="flex flex-col gap-3">
        <section className=" form-section">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="password"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
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
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link href="/user/register">
        <p className="text-primary hover:underline">Don't have an account?</p>
      </Link>
    </main>
  );
}
