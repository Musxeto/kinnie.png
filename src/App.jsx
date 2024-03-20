import React, { Suspense } from "react";
import "./App.css";
// import Signup from "./Components/Signup";
// import Home from "./Components/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./Components/Login";
// import PrivateRoute from "./Components/PrivateRoute";
// import UpdateProfile from "./Components/UpdateProfile";
// import ForgorPass from "./Components/ForgorPass";

const Signup = lazy(() => import("./Components/Signup"));
const Home = lazy(() => import("./Components/Home"));
const Login = lazy(() => import("./Components/Login"));
const PrivateRoute = lazy(() => import("./Components/PrivateRoute"));
const UpdateProfile = lazy(() => import("./Components/UpdateProfile"));
const ForgorPass = lazy(() => import("./Components/ForgorPass"));
function App() {
  return (
    <>
      <Suspense>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgor-pass" element={<ForgorPass />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
    </>
  );
}

export default App;
