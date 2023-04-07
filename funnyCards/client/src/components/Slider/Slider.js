
import React, { useEffect, useState } from 'react';

function ImgSlider() {
    const [index, setIndex] = useState(0)
    const images = ['/pictures/home-avatar.png', "/pictures/cat.png", "/pictures/cow.png", "/pictures/dog.png", "/pictures/goose.png"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [images.length])
    return (
        <>
       
            <div className="sliderWrap">
                <img key={index} src={images[index]} alt="home-avatar" />
            </div>

            <br />
            <div style={{ textAlign: "center" }}>
                {images.map((_, idx) => (
                    <span key={idx} className={`dot ${index === idx ? "active" : ""} `} onClick={() => {
                 
                    
                        setIndex(idx)
                    }}></span>
                ))}
            </div>
        </>
    )
}
  
export default ImgSlider
