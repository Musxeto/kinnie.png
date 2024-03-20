// Gallery.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchKinnieImages();
  }, []);

  const fetchKinnieImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "images"));
      const fetchedImages = [];
      querySnapshot.forEach((doc) => {
        fetchedImages.push({ id: doc.id, ...doc.data() });
      });
      setImages(fetchedImages);
      console.log(fetchedImages[0]);
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
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <a href={item.imageURL} target="_blank">
              <img
                src={item.imageURL}
                alt="Gallery"
                className="w-full h-64 object-cover rounded-t-lg"
                loading="lazy"
              />
            </a>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {item.imageHeading}
              </h3>
              <p className="text-gray-600 mt-2">{item.imageDesc}</p>
              {item.uploaderImage && (
                <div className="flex items-center mt-4">
                  <img
                    src={item.uploaderImage}
                    alt="Uploader"
                    className="w-8 h-8 rounded-full border border-yellow-400 mr-2 hover:"
                    style={{ marginTop: "-0.7rem" }}
                  />

                  <p className="text-gray-700 text-sm">{item.uploader}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
