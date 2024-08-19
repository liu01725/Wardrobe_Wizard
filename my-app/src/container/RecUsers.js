import React from "react";
import "./Recusers.css";
import P1 from "../images/Profile1.jpg";
import P2 from "../images/Profile2.jpg";
import P3 from "../images/Profile3.jpg";
import P4 from "../images/Profile4.jpg";
import C1 from "../images/whiteshoe.jpg";
import C2 from "../images/jeanjacket.jpg";
import C3 from "../images/stripshirt.jpg";
import C4 from "../images/leatherjacket.jpg";
import C5 from "../images/boot.jpg";
import C6 from "../images/graytank.jpg";
import C7 from "../images/graysneakers.jpg";
import C8 from "../images/menstrip.jpg";
import C9 from "../images/gridbutton.jpg";
import C10 from "../images/clothes/shirt1.png";
import C11 from "../images/clothes/shirt2.png";
import C12 from "../images/Denim.jpeg";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const popoverOne = (
    <Popover id="popover-positioned-left" title="Popover one" className="popover">
    <div className='flex-container-rec'>
      <div className='flex-child-rec'>
        <img src={C1} className="item_slide" alt=""/>
      </div>
      <div className='flex-child-rec'>
        <img src={C2} className="item_slide" alt=""/>
      </div>
      <div className='flex-child-rec'>
        <img src={C3} className="item_slide" alt=""/>
      </div>
    </div>
    <Button className="button" variant='dark' href='/create'>Create</Button>
    </Popover>
  );
  const popoverTwo = (
    <Popover id="popover-positioned-right" title="Popover two" className="popover">
        <div className='flex-container-rec'>
            <div className='flex-child-rec'>
                <img src={C4} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C5} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C6} className="item_slide" alt=""/>
            </div>
        </div>
        <Button className="button" variant='dark' href='/create'>Create</Button>
    </Popover>
  );
  const popoverThree = (
    <Popover id="popover-positioned-left" title="Popover three" className="popover">
        <div className='flex-container-rec'>
            <div className='flex-child-rec'>
                <img src={C7} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C8} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C9} className="item_slide" alt=""/>
            </div>
        </div>
        <Button className="button" variant='dark' href='/create'>Create</Button>
    </Popover>
  );
  const popoverFour = (
    <Popover id="popover-positioned-right" title="Popover four" className="popover">
        <div className='flex-container-rec'>
            <div className='flex-child-rec'>
                <img src={C10} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C11} className="item_slide" alt=""/>
            </div>
            <div className='flex-child-rec'>
                <img src={C12} className="item_slide" alt=""/>
            </div>
        </div>
        <Button className="button" variant='dark' href='/create'>Create</Button>
    </Popover>
  );

const RecUsers = () => {

  return (
    <div>
      <div className="users">
        Users
      </div>
        <OverlayTrigger trigger="click" placement="left" overlay={popoverOne}>
            <img src={P1} className="outfit1_rec" alt="logo" />
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverTwo}>
            <img src={P2} className="outfit2_rec" alt="logo" />
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="left" overlay={popoverThree}>
            <img src={P3} className="outfit3_rec" alt="logo" />
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverFour}>
            <img src={P4} className="outfit4_rec" alt="logo" />
        </OverlayTrigger>
    </div>
  );
};

export default RecUsers;