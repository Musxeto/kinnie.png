import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const ForgorPass = () => {
  const emailRef = useRef();
  const { signin, currentUser, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check Email for Resetting you Password");
    } catch {
      setError("Failed to Send Email, Try Again Later");
    }
    setLoading(false);
    const signupForm = document.querySelector(".login");
    signupForm.reset();
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Reset Pass 🏴</h2>
              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="login">
                <Form.Group id="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button
                  disabled={loading || currentUser !== null}
                  className="w-100 mt-2"
                  type="submit"
                >
                  Reset Pass
                </Button>
              </Form>
              <div className="w-100 text-center mt-2 ">
                <Link to="/login" className="cursor-pointer">
                  Login?
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 ">
            Doesn't have an Account?{" "}
            <Link to="/signup" className="cursor-pointer">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgorPass;
