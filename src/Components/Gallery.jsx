// Gallery.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchKinnieImages();
  }, [images]);

  const fetchKinnieImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "images"));
      const fetchedImages = [];
      querySnapshot.forEach((doc) => {
        fetchedImages.push({ id: doc.id, ...doc.data() });
        console.log({ id: doc.id, ...doc.data() });
      });
      setImages(fetchedImages);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error fetching images: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md">
            <img
              src={item.imageURL}
              alt="Gallery"
              className="w-full h-64 object-cover rounded-t-lg"
              loading="lazy" // Add lazy loading attribute
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Uploaded by: {item.uploadedBy}
              </p>
              <h3 className="text-xl font-semibold mt-2">
                {item.imageHeading}
              </h3>
              <p className="text-gray-700 mt-2">{item.imageDescription}</p>
              <p className="text-gray-500 text-sm mt-2">
                Uploaded at: {item.uploadedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
