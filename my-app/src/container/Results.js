import React from "react";
import "./Results.css";
import R1 from "../images/resultsImg1.jpg";
import R2 from "../images/resultsImg2.jpg";
import R3 from "../images/resultsImg3.jpg";
import R4 from "../images/resultsImg4.jpg";
import {RiFilterFill} from 'react-icons/ri';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {Dropdown} from 'react-bootstrap';

const Results = () => {

  return (
    <div className='flex-container'>
      <div className='flex-child'>
          Results
      </div>
      <Dropdown className='flex-child'>
        <Dropdown.Toggle variant="dark">
          <RiFilterFill size={25}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/resultsfilter">
            Jacket
          </Dropdown.Item>
          <Dropdown.Item href="/resultsfilter">
            Dress
          </Dropdown.Item>
          <Dropdown.Item href="/resultsfilter">
            Button
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <img src={R1} className="outfit1_r" alt="logo" />
      <img src={R2} className="outfit2_r" alt="logo" />
      <img src={R3} className="outfit3_r" alt="logo" />
      <img src={R4} className="outfit4_r" alt="logo" />
      
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

      {/*Like Button 3*/}
      <div className ="liked3_r">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>

      {/*Like Button 4*/}
      <div className ="liked4_r">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
      </div>
    </div>
  );
};

export default Results;