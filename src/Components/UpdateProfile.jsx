import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { uploadProfilepic } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, changePass } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setMessage("click upload if u s");
    }
  }

  async function handleClick() {
    setMessage("uploading gxng :3");
    await uploadProfilepic(photo, currentUser, setLoading);
    setPhotoURL(currentUser.photoURL);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords Do Not Match");
    }
    const promises = [];
    if (passwordRef.current.value) {
      promises.push(changePass(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        setMessage("User Profile Updated!!");
      })
      .catch(() => {
        setError("Failed to Update Profile");
      })
      .finally(() => {
        setLoading(false);
        const updateForm = document.querySelector(".update");
        updateForm.reset();
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-3/5 mx-auto bg-white p-8 rounded shadow-md">
        <div>
          <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
            Update Profile
          </h2>
          {message && (
            <p className="text-green-500 text-2xl text-center">{message}</p>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="update">
            <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
              <div className="sm:w-1/2">
                <div className="flex flex-col items-center justify-center mb-4">
                  <img
                    src={photoURL}
                    alt="avatar"
                    className="h-40 w-40 profile-pic mb-1"
                  />
                  <div className="flex flex-col  justify-center">
                    <div>
                      <input
                        id="profile-pic"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="profile-pic"
                        className="text-yellow-600 underline py-1 px-2 rounded-md cursor-pointer hover:text-yellow-700"
                      >
                        Change Profile Photo
                      </label>
                    </div>
                    <div className="mt-3">
                      <button
                        className="bg-yellow-600 w-full text-white py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-700"
                        disabled={loading || !photo}
                        onClick={handleClick}
                      >
                        {loading ? "Uploading Photo..." : "Upload Photo"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2">
                <div className="text-center mb-4">
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    ref={usernameRef}
                    className="input-field min-w-80 m-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                    placeholder="Username"
                  />
                </div>
                <div className="text-center mb-4">
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="input-field min-w-80 m-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                    disabled
                    value={currentUser.email}
                  />
                </div>
                <div className="text-center mb-4">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    ref={passwordRef}
                    className="input-field min-w-80 m-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                    placeholder="New Password (Leave blank to keep the same)"
                  />
                </div>
                <div className="text-center mb-4">
                  <label htmlFor="password-confirm" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="password-confirm"
                    name="password-confirm"
                    type="password"
                    autoComplete="new-password"
                    ref={passwordConfirmRef}
                    className="input-field min-w-80 m-1 p-2 outline-none border border-gray-300 rounded-md focus:ring focus:ring-yellow-500"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                disabled={loading}
                className="button bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                type="submit"
              >
                {loading ? "Updating Profile..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-2">
          <Link
            to="/"
            className="font-medium text-yellow-600 hover:text-yellow-500"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
