import React from "react";
import W1 from '../images/wardrobe1.png';
import W2 from '../images/wardrobe2.png';
import W3 from '../images/wardrobe3.png';
import W4 from '../images/wardrobe4.png';
import W5 from '../images/wardrobe5.png';
import W6 from '../images/wardrobe6.png';


const IMAGES = {
    image1: W1,
    image2: W2,
    image3: W3,
    image4: W4,
    image5: W5,
    image6: W6
  };

const imgset = [
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3},
    { id: '4', image: IMAGES.image4},
    { id: '5', image: IMAGES.image5},
    { id: '6', image: IMAGES.image6}
];


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