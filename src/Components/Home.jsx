import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
    </div>
  );
};

export default Home;
