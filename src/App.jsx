import { useState } from "react";
import "./App.css";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </div>
  );
}

export default App;
