import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="home">
        Welcome{" "}
        {currentUser?.displayName ? currentUser.displayName : currentUser.email}
        .{" "}
        {currentUser?.displayName ? (
          ""
        ) : (
          <span className="text-10xl mt-3 font-black text-black">
            {" "}
            Go to <Link to="/update-profile">update profile</Link> and complete
            the signup process
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
