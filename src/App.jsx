import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Components/Signup";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
