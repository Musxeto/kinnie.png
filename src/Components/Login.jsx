import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create Account");
    }
    setLoading(false);
    const signupForm = document.querySelector(".signup");
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
              <h2 className="text-center mb-4">Sign Up</h2>
              {!error && (
                <Alert variant="success">
                  Account {JSON.stringify(currentUser.email)} Logged In
                </Alert>
              )}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="signup">
                <Form.Group id="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  disabled={loading || currentUser !== null}
                  className="w-100"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
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

export default Login;
