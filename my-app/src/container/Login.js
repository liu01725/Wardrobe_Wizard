import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import "./Login.css";

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    if (validateForm()){ 
      localStorage.setItem('loggedIn', JSON.stringify(true));
      history("/");
      window.location.reload();
    }
    else{
      onError("Invalid Login");
    }
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // async function handleSubmit(event) {
  //   if (validateForm()){ 
  //     event.preventDefault();
  //     userHasAuthenticated(true);
  //     history("/");
  //   }
  //   else{
  //     onError("Invalid Login");
  //   }
  // }

  return (
    <div className="Login" >
      <Form onSubmit={handleSubmit} >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit">
          Submit
        </Button>
      </Form>
      <a href='/forgot'>Forgot Username/Password</a>
    </div>
  );
}