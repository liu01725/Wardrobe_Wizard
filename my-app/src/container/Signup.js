import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import "./Signup.css";

export default function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");


  function validateForm() {
    var message = "";
    if(username.length === 0)
    {
        message = message + "\nInvalid Username"
    }
    if(email.length === 0)
    {
        message = message + "\nInvalid Email"
    }
    if(password.length === 0)
    {
        message = message + "\nInvalid Password"
    }
    if(password2 !== password)
    {
        message = message + "\nPasswords Do Not Match"
    }

    return message
  }

  async function handleSubmit(event){
        if (validateForm() === ""){ 
          event.preventDefault();
          history("/login");
        }
        else{
          onError(validateForm());
        }
    
      }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}