import React from "react";

const UploadForm = () => {
  return (
    <div className="border rounded-md p-6 max-w-lg mx-auto mt-10 shadow-md">
      <form className="flex flex-col items-center gap-4">
        {/* File input */}
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />

        {/* Name input */}
        <div className="flex items-center gap-2">
          <label htmlFor="name" className="text-lg font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered max-w-xs"
            placeholder="Enter Image Name..."
          />
        </div>

        {/* Upload button */}
        <button className="btn btn-outline ">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
