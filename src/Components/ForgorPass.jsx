import React, { useRef, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ForgorPass = () => {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check Email for Resetting your Password");
    } catch {
      setError("Failed to Send Email, Try Again Later");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset Password 🏴
            </h2>
            {message && <p className="text-green-500 text-center">{message}</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="login">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
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
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm mt-2"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <button
                disabled={loading || currentUser !== null}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-4"
                type="submit"
              >
                Reset Pass
              </button>
            </form>
          </div>
          <div className="text-center mt-2">
            <Link
              to="/login"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Login?
            </Link>
          </div>
          <div className="text-center mt-2">
            <span className="font-medium text-gray-600">
              Doesn't have an Account?{" "}
            </span>
            <Link
              to="/signup"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgorPass;
