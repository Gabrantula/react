import React, { useState } from "react";
//import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThumbsUp } from '@fortawesome/free-solid-svg-icons'


/*const particleList = Array.from(Array(10));

const LikeButton = () => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={("like-button-wrapper", {
        liked,
        clicked,
      })}
    >
      {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>Like</span>
        <span className={("suffix", { liked })}>d</span>
      </div>
    </button>
  );
};

export default LikeButton;*/

const LikeButton = () => {
  //const [likeCount, setLikeCount] = useState(50);
  const [likeCount, setLikeCount] = useState(0);
  //const [dislikeCount, setDislikeCount] = useState(25);

  //const [activeBtn, setActiveBtn] = useState("none");
  const [activeBtn, setActiveBtn] = useState("like")


  const handleLikeClick = () => {
    if (activeBtn === 'like') {
      setLikeCount(likeCount + 1)
      setActiveBtn('like')
      return
    }
    /*if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }*/

    /*if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }*/

    /*if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      //setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }*/
  //};

  /*if (activeBtn === "none") {
    setDislikeCount(dislikeCount + 1);
    setActiveBtn("dislike");
    return;
  }
 
  if (activeBtn === 'dislike'){
    setDislikeCount(dislikeCount - 1);
    setActiveBtn("none");
    return;
  }
 
  if (activeBtn === "like") {
    setDislikeCount(dislikeCount + 1);
    setLikeCount(likeCount - 1);
    setActiveBtn("dislike");
  }*/
};
return (
  <>
    <div className="btn-container">
      <button
        className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
        onClick={handleLikeClick}
      >
        <span className="material-symbols-rounded"><FontAwesomeIcon icon={faThumbsUp} /></span>
        Like {likeCount}
      </button>

      {/*<button
      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
      onClick={handleDisikeClick}
    >
      <span className="material-symbols-rounded"><FontAwesomeIcon icon={faThumbsDown} /></span>
      Dislike {dislikeCount}
    </button>*/}
    </div>
  </>)

};

export default LikeButton;
