import React, {useState} from 'react'
import {FcLike} from 'react-icons/fc'
import { FiHeart} from 'react-icons/fi'

const LikeButton = () => {
    const [liked, setLiked] = useState(true); 

    function onClick(){
        liked ? setLiked(false): setLiked(true) ;
    }
    return (
        <div>
            <span onClick = {onClick}>
                {liked ? <FiHeart/> : <FcLike/>}
            </span>
        </div>
    )

}

export default LikeButton;