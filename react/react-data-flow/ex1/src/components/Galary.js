import React, {useState} from 'react'
import "./Galary.css"

const initData = {
    images: [
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
}

export default function Galary() {
    const [images, setImages] = useState(initData.images);
    const [currentImg, setCurrentImg] = useState(initData.currentImg);

    const shiftImageBack = () => {
        if(currentImg === 0) {
            setCurrentImg(images.length - 1);
        }
        else {
            setCurrentImg(currentImg - 1);
        }
    }

    const shiftImageForward = () => {
        if(currentImg + 1 === images.length) {
            setCurrentImg(0);
        }
        else {
            setCurrentImg(currentImg + 1);
        }
    }

    return (
        <div className='galary'>
            <img src={images[currentImg]} alt="no images found!"/>
            <button className='nextBtn' onClick={shiftImageBack} >Prev</button>
            <button className='prevBtn' onClick={shiftImageForward} >Next</button>
        </div>
    )
}
