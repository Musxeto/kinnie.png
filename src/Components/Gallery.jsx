import React from "react";

const Gallery = () => {
  // Dummy data for demonstration
  const galleryData = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User123",
      imageHeading: "Beautiful Landscape",
      imageDescription: "A stunning view of nature",
      uploadedAt: "2024-03-19",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User456",
      imageHeading: "Amazing Sunset",
      imageDescription: "Capturing the beauty of the sunset",
      uploadedAt: "2024-03-18",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      uploadedBy: "User789",
      imageHeading: "Lovely Flowers",
      imageDescription: "Admiring the colorful flowers",
      uploadedAt: "2024-03-17",
    },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md">
            <img
              src={item.imageUrl}
              alt="Gallery"
              className="w-full h-64 object-cover rounded-t-lg"
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
