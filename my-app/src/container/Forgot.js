import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Forgot.css";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";

export default function Forgot() {
  const history = useNavigate();
  const [email, setEmail] = useState("");

  function validateForm() {
    return email.length > 0;
  }

  async function handleSubmit(event) {
    if (validateForm()){ 
      event.preventDefault();
      history("/login");
    }
    else{
      onError("Invalid Email");
    }

  }

  return (
    <div className="Forgot">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{float: 'right'}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}