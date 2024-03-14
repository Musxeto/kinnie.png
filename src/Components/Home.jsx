import React from "react";
import Navbar from "./HomeComponents/Navbar";
import UploadForm from "./HomeComponents/UploadForm";
import ImageGallery from "./HomeComponents/ImageGallery";
import { useAuth } from "../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
