import React from "react";

const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="" alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Image Title</h2>
          <p>Uploaded By: </p>
          <span>Created On:</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
