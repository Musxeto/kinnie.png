import React from "react";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">m u s . p n g 📷</h1>
          <p className="py-4 lg:px-40 lg:mx-25 font-bold">
            "Embark on a journey of visual storytelling, where every login
            unlocks a world of shared moments, weaving a tapestry of memories
            that transcend boundaries and connect hearts across the digital
            realm"
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body signup">
            <p className="font-bold text-center text-2xl"> Sign Up</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
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
                placeholder="Enter a strong Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="/login" className="label-text-alt link link-hover">
                  Already Have an account? Login
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

export default SignUp;
