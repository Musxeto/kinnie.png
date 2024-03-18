import React from "react";

const PicUploader = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto max-w-lg">
      {" "}
      {/* Added max-w-lg */}
      <input
        type="file"
        className="w-full p-4 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default PicUploader;
