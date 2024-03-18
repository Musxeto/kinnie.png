import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PicUploader from "./PicUploader";
import Gallery from "./Gallery";

const Home = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("gallery");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "gallery"
                ? "bg-yellow-400 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabChange("gallery")}
          >
            Gallery
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "upload"
                ? "bg-yellow-400 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabChange("upload")}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="mt-10">
        {activeTab === "gallery" && <Gallery />}
        {activeTab === "upload" && <PicUploader />}
      </div>
    </>
  );
};

export default Home;
