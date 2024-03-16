import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const UpdateProfile = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser, changePass } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

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
        setLoading(false);
        const updateForm = document.querySelector(".update");
        updateForm.reset();
      });
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
              <h2 className="text-center mb-4">Update Profile</h2>
              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="update">
                <Form.Group id="username">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" ref={usernameRef} />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    disabled
                    defaultValue={currentUser.email}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave Blank to keep the same..."
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave Blank to keep the same..."
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-2" type="submit">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 ">
            <Link to="/" className="cursor-pointer">
              Cancel
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UpdateProfile;
