import { signIn } from "@/app/auth";

export default function SignInPage() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-6xl my-8">Login Page</h1>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
        className="flex flex-col"
      >
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required className="p-2" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="p-2"
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}
