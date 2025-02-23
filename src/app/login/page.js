import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
