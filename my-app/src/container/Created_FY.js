import React from "react";
import "./Created_FY.css";
import outfit from '../images/Created1.png';
import outfit2 from '../images/Created2.png';
import outfit3 from '../images/Created3.png';
import outfit4 from '../images/Created4.png';
import outfit5 from '../images/Created5.png';
import outfit6 from '../images/Created6.png';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



export default function Created_FY() {
  return (
    <div className = "created_fy">
        <TabLink/>
      <img src={outfit} className="outfit1_fy" alt="logo" />
      <img src={outfit2} className="outfit2_fy" alt="logo" />
      <img src={outfit3} className="outfit3_fy" alt="logo" />
      <img src={outfit5} className="outfit4_fy" alt="logo" />
      <img src={outfit4} className="outfit5_fy" alt="logo" />
      <img src={outfit6} className="outfit6_fy" alt="logo" />
      {/*Like Button 1*/}
      <div className ="liked1_fy">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 2*/}
      <div className ="liked2_fy">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 3*/}
      <div className ="liked3_fy">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 4*/}
      <div className ="liked4_fy">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 5*/}
      <div className ="liked5_fy">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 6*/}
      <div className ="liked6_fy">
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
  background: var(--backgrouns);
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
    "link": '/',
  },
  {
    "name": "Created For You",
    "link": '',
  }
  
];


function TabLink() {
  const [active, setActive] = useState(tabs[1].name);
  return (
    <>
      <div className="border d-flex align-items-center justify-content-center">
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
      </div>
      
      <p />
    </>
  );
}