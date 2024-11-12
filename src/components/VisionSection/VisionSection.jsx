import React, { useState, useRef } from 'react';
import style from "./VisionSection.module.css";
import carousel1 from "../../assets/KHAG_new.png";
import carousel2 from "../../assets/khag3_new.png";
import previous from "../../assets/carousel_images/left.svg";
import next from "../../assets/carousel_images/right.svg";

const VisionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const carouselRef = useRef(null);

  const nextButton = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  const prevButton = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
  };

  return (
    <div className={style.top_carousel_container}>
      <div className={style.heading}>WHO IS <span>KAT</span> ?</div>
      <div className={style.carouselContainer_top_carousel}>
        <div className={`${style.carousel_top_carousel} ${style[direction]}`} ref={carouselRef}>
          <div className={style.cards_top_carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className={style.card_top_carousel}>
              <img src={carousel1} alt="Image 1" />
            </div>
            <div className={style.card_top_carousel}>
              <img src={carousel2} alt="Image 2" />
            </div>
          </div>
        </div>
          <button className={style.leftButton} onClick={prevButton}>
            <img src={previous} alt="Previous" className={style.arrowImage} />
          </button>
          <button className={style.rightButton} onClick={nextButton}>
            <img src={next} alt="Next" className={style.arrowImage} />
          </button>
        <div className={style.at_low_media_queries}>
                  <div className={style.card_top_carousel}>
                    <img src={carousel1} alt="Image 1" />
                  </div>
                  <div className={style.card_top_carousel}>
                    <img src={carousel2} alt="Image 2" />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
