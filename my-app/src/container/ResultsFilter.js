import React from "react";
import "./Results.css";
import R1 from "../images/resultsImg1.jpg";
import R2 from "../images/resultsImg2.jpg";
import {RiFilterFill} from 'react-icons/ri';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Dropdown } from "react-bootstrap";



const ResultsFilter = () => {
  return (
    <div className='flex-container'>
        <div className='flex-child'>
          Results
        </div>
        <Dropdown className='flex-child'>
          <Dropdown.Toggle variant="dark">
            <RiFilterFill />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/results">
              Clear
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      <img src={R1} className="outfit1_r" alt="logo" />
      <img src={R2} className="outfit2_r" alt="logo" />
      
      {/*Like Button 1*/}
      <div className ="liked1_r">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 2*/}
      <div className ="liked2_r">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>
    </div>
  );
};

export default ResultsFilter;