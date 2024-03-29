import React, { Suspense, lazy, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const PicUploader = lazy(() => import("./PicUploader"));
const Gallery = lazy(() => import("./Gallery"));
const Home = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("gallery");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Suspense>
      <div className="bg-yellow-400 min-h-screen">
        <Navbar />

        <div className="flex flex-row p-20 items-center justify-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 border border-gray-100 p-6 bg-white rounded-lg shadow-md">
            <button
              className={`px-4 py-2 text-sm font-semibold focus:outline-none mb-3 mt-3 ${
                activeTab === "gallery"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 rounded"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 rounded"
              }`}
              onClick={() => handleTabChange("gallery")}
            >
              Kinnie Gallery
            </button>
            <button
              className={`px-4 py-2 mb-3 mt-3 text-sm font-semibold focus:outline-none ${
                activeTab === "upload"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 rounded"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 rounded"
              }`}
              onClick={() => handleTabChange("upload")}
            >
              Kinnie Upload
            </button>
          </div>
        </div>
        <div className="mt-0 px-4">
          {/* Increased margin-top */}
          {activeTab === "gallery" && (
            <div className="border flex flex-col items-center  border-gray-100 p-6 rounded-lg shadow-md">
              <Gallery />
            </div>
          )}
          {activeTab === "upload" && (
            <div>
              <PicUploader />
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
