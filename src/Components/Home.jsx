import React from "react";
import Navbar from "./HomeComponents/Navbar";
import UploadForm from "./HomeComponents/UploadForm";
import ImageGallery from "./HomeComponents/ImageGallery";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
