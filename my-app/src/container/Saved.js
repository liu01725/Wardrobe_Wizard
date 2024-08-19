import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageGrid from "./SavedImage";
import "./Saved.css";
import {RiFilterFill} from 'react-icons/ri';
import { Dropdown } from "react-bootstrap";

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
    "name": "Wardrobe",
    "link": '/profile',
  },
  {
    "name": "Saved Outfits",
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
        <Dropdown>
          <Dropdown.Toggle variant="dark">
            <RiFilterFill />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              Clear
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default function Saved() {
    return (
        <div className = "saved">
            <TabLink/>
            <ImageGrid/>
        </div>
        
    );
}