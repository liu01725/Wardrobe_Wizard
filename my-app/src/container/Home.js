import React from "react";
import "./Home.css";
import outfit from '../images/OOO1.png';
import outfit2 from '../images/OOO2.png';
import outfit3 from '../images/OOO3.png';
import outfit4 from '../images/OOO4.png';
import outfit5 from '../images/OOO5.png';
import outfit6 from '../images/OOO6.png';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



export default function Home() {
  return (
    <div className = "home">
      
      <TabLink/>
      <img src={outfit} className="outfit1" alt="logo" />
      <img src={outfit2} className="outfit2" alt="logo" />
      <img src={outfit3} className="outfit3" alt="logo" />
      <img src={outfit5} className="outfit4" alt="logo" />
      <img src={outfit4} className="outfit5" alt="logo" />
      <img src={outfit6} className="outfit6" alt="logo" />
      
      {/*Like Button 1*/}
      <div className ="liked1">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 2*/}
      <div className ="liked2">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 3*/}
      <div className ="liked3">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 4*/}
      <div className ="liked4">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 5*/}
      <div className ="liked5">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 6*/}
      <div className ="liked6">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>
    </div>
  );
}

const Tab = styled.button`
  padding: 10px 30px;
  opacity: 0.6;
  cursor: pointer;
  box-shadow: none;
  background: var(--background);
  outline: 0;
  border: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  color: var(--text-primary);
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    border-color: var(--text-primary);
  `}
`;

const tabs = [
  {
    "name": "Explore",
    "link": '',
  },
  {
    "name": "Created For You",
    "link": '/login',
  }
];

const tabs_logged = [
  {
    "name": "Explore",
    "link": '',
  },
  {
    "name": "Created For You",
    "link": '/created_fy',
  }
];


function TabLink() {
  const [active, setActive] = useState(tabs[0].name);
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const data = localStorage.getItem('loggedIn');
    if(data) {
      setLoggedIn(JSON.parse(data));
    }
  }, []);
  
  return (
    <>
      <div className="border d-flex align-items-center justify-content-center">
        {loggedIn ? ( <>
          {tabs_logged.map((type) => (
          <Link to={type.link} >
          <Tab
            key={type.name}
            active={active === type.name}
            onClick={() => setActive(type.name)}
            button style={{outline: 'none', boxShadow: 'none'}}
          >
            {type.name}
          </Tab>
          </Link>
        ))}
        </>) : ( <>
          {tabs.map((type) => (
          <Link to={type.link} >
          <Tab
            key={type.name}
            active={active === type.name}
            onClick={() => setActive(type.name)}
            button style={{outline: 'none', boxShadow: 'none'}}
          >
            {type.name}
          </Tab>
          </Link>
        ))}
        </>) }
      </div>
    </>
  );
}