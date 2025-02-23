export default function Signup() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-6">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-green-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-green-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  