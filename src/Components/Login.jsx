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
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="text-center">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  className="input-field m-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                  placeholder="Email address"
                />
              </div>
              <div className="text-center">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  ref={passwordRef}
                  required
                  className="input-field m-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                disabled={loading}
                className="button mt-4 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                type="submit"
              >
                {loading ? "Logging In..." : "Login"}
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            <Link
              to="/forgot-pass"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="font-medium text-gray-600 inline">
            Don't have an account?
          </p>{" "}
          <Link
            to="/signup"
            className="font-medium text-yellow-600 hover:text-yellow-500 inline ml-1"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
