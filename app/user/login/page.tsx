import Link from "next/link";

export default function Login() {
  return (
    <main className="flex-1 flex flex-col mx-auto justify-center gap-2 item">
      <h2 className="text-3xl text-center">Login</h2>
      <form className="flex flex-col gap-3">
        <section className=" form-section">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="password" placeholder="Email" />
        </section>
        <section className="form-section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </section>
        <button className="btn">Login</button>
      </form>
      <Link href="/user/register">
        <p className="text-primary hover:underline">Don't have an account?</p>
      </Link>
    </main>
  );
}
