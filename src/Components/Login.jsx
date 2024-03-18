import React, { useRef, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      setError("Failed to log in. Please check your credentials.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              ref={emailRef}
              required
              className="input-field block w-full mt-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              ref={passwordRef}
              required
              className="input-field block w-full mt-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <div>
              <button
                type="submit"
                disabled={loading}
                className="button bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
              >
                {loading ? "Logging In..." : "Login"}
              </button>
            </div>

            <div className="text-sm mt-4">
              <Link
                to="/forgot-pass"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm font-medium text-gray-600">
            Don't have an account?{"    "}
            <Link
              to="/signup"
              className="text-yellow-600 hover:text-yellow-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
