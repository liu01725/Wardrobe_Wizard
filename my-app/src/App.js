import './App.css';
import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Navigate from "./Navigate";
import SearchBar from './container/SearchBar';
import { useNavigate } from "react-router-dom";
import {RiSettings5Fill, RiAddFill, RiHome2Line, RiUser3Line} from 'react-icons/ri';
import useLocalStorage from 'use-local-storage';

function App() {

  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const data = localStorage.getItem('loggedIn');
    if(data) {
      setLoggedIn(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem('loggedIn', JSON.stringify(false));
    history("/login");
    window.location.reload();
    };

  const defaultLight = window.matchMedia('{prefers-color-scheme: light}').matches;
  const [theme, setTheme] = useLocalStorage('theme', JSON.stringify(defaultLight ? 'light' : 'dark'));
  const defaultBlack = true;
  const [fontColor, setFontColor] = useLocalStorage('font', JSON.stringify(defaultBlack ? 'black' : 'white'));

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    const newFont = fontColor === 'white' ? 'black' : 'white';
    setFontColor(newFont);
  }

    return (
      <div className="fill-window" data-theme={theme}>
        <Navbar collapseOnSelect bg={theme} expand="md">
          <Navbar.Brand className="navbar-brand">
            Wardrobe Wizard
          </Navbar.Brand>
          {/* <Form class="form-inline" onSubmit={handleSubmit}>
            <input type="search" placeholder="Search" aria-label="Search"/>
            <button type="submit">{<img src={Glass} width="20" height="20" alt="Search Icon"/>}</button>
          </Form> */}
          <SearchBar/>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">{<RiHome2Line size={30} color={fontColor}/>}</Nav.Link>
              {loggedIn ? (<NavDropdown title= {<RiAddFill size={30} color={fontColor}/>} >
                <NavDropdown.Item href="/add">Add Clothing</NavDropdown.Item>
                <NavDropdown.Item href="/create">Create Outfits</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
              <Nav.Link href="/login">{<RiAddFill size={30} color={fontColor} />}</Nav.Link>
                </>
              )}
              {loggedIn ? (<NavDropdown title= {<RiUser3Line size={30} color={fontColor}/>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Manage Wardrobe</NavDropdown.Item>
                <NavDropdown.Item href="/recusers">Contribute Outfits</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
              <NavDropdown title= {<RiUser3Line size={30} color={fontColor}/>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
                </>
              )}
              {loggedIn ? (<NavDropdown title= {<RiSettings5Fill size={30} color={fontColor}/>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={switchTheme}>{theme === 'dark' ? 'Light' : 'Dark'} Mode</NavDropdown.Item>
                <NavDropdown.Item href="/reset">Reset Password</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
              ) : (
                <>
                <NavDropdown title= {<RiSettings5Fill size={30} color={fontColor}/>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={switchTheme}>{theme === 'dark' ? 'Light' : 'Dark'} Mode</NavDropdown.Item>
              </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navigate />
      </div>
    );
}

export default App;
