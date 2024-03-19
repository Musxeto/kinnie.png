import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { uploadImageAndAddToFirestore } from "../firebase";
import { useNavigate } from "react-router-dom";

const PicUploader = () => {
  const { currentUser } = useAuth();
  const [file, setFile] = useState(null);
  const [imageHeading, setImageHeading] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await uploadImageAndAddToFirestore(
        file,
        currentUser,
        setLoading,
        imageHeading,
        imageDescription
      );
      setFile(null);
      setImageDescription("");
      setImageHeading("");
      setMessage("ur kinnie uploaded bro uwu");
    } catch (error) {
      console.error("Error uploading image and adding to Firestore:", error);
      setMessage("Error uploading image and adding to Firestore");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        // navigate to desired page
      }, 4000);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg bg-white">
        {message && <p className="text-green-500 text-center">{message}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center upload"
        >
          <div>
            <input
              id="image-uploader"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="image-uploader"
              className="text-yellow-600 underline py-1 px-2 rounded-md cursor-pointer hover:text-yellow-700"
            >
              Upload Your Kinnie Image
            </label>
          </div>
          <input
            type="text"
            value={imageHeading}
            onChange={(e) => setImageHeading(e.target.value)}
            placeholder="Image Name"
            required
            className="input-field mt-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
          />
          <textarea
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
            placeholder="Image Description"
            required
            className="input-field mt-3 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
          ></textarea>

          <button
            type="submit"
            disabled={!file || loading}
            className="button mt-3 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PicUploader;
