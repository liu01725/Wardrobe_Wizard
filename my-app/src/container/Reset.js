import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import "./Reset.css";

export default function Reset() {
  const history = useNavigate();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  function validateForm() {
    var message = "";
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
        <div className="Reset" >
          <Form onSubmit={handleSubmit} >
            <Form.Group size="lg" controlId="email">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                autoFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        </div>
      );
    }