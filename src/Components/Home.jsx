import React from "react";
import Navbar from "./HomeComponents/Navbar";
import UploadForm from "./HomeComponents/UploadForm";
import ImageGallery from "./HomeComponents/ImageGallery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
