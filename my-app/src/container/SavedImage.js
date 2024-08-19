import React from "react";
import saved1 from '../images/Created1.png';
import saved2 from '../images/Created4.png';

const IMAGES = {
    image1: saved1,
    image2: saved2
  };

const imgset = [{ id: '1', image: IMAGES.image1 },{ id: '2', image: IMAGES.image2 }];


const ImageGrid = () => {
    // const { docs } = imgset;
    console.log(imgset);
    return (

        <div className="img-grid">
            { imgset && imgset.map(doc =>(
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.image} alt="article"/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;