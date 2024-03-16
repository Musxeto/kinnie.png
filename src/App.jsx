import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import UpdateProfile from "./Components/UpdateProfile";
import ForgorPass from "./Components/ForgorPass";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
