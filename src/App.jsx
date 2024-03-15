import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
