import React, { useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError(""); // Clear any previous errors
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error); // Log the error for debugging
      setError("Failed to log out. Please try again."); // Set specific error message
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="text-center d-flex flex-col justify-center">
            <h2>Welcome {currentUser && currentUser.email}!</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Container className="d-flex align-items-center justify-content-center">
              <Link to="/update-profile" className="btn btn-primary">
                Update Profile
              </Link>
            </Container>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Home;
