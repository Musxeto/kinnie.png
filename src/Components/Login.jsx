import React from "react";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">m u s . p n g</h1>
          <p className="text-2xl font-bold py-3">Welcome Back</p>
          <p className="text-2xl py-2"> Login to Continue</p>
        </div>
        <div className="card sm:w-30rem shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body login">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="signup" className="label-text-alt link link-hover">
                  Doesn't Have an account? SignUp Here
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
