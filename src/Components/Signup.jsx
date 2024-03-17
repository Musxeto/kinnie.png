import React, { useRef, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords Do Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create Account");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-yellow-400">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="text-center">
              <label htmlFor="email" className="sr-only">
                Email address
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
                autoComplete="new-password"
                ref={passwordRef}
                required
                className="input-field m-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <label htmlFor="password-confirm" className="sr-only">
                Confirm Password
              </label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                autoComplete="new-password"
                ref={passwordConfirmRef}
                required
                className="input-field m-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              disabled={loading || currentUser !== null}
              className="button mt-4 w-40 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
              type="submit"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-yellow-600 hover:text-yellow-500"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
