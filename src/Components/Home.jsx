import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import Navbar from "./Navbar";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="min-h-screen bg-yellow-400">
      <Navbar />
      <div className="home bg-yellow-400 min-h-screen">
        <div className="h-20 w-20">
          <img src={currentUser.photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Home;
