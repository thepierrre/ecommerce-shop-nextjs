import { FormEvent } from "react";

export default function RegistrationPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
    } else {
      console.error("Unable to sign-in");
    }
  }

  return (
    <div className="">
      <h1 className="text-center text-6xl my-8">Login Page</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />
      </form>
    </div>
  );
}
