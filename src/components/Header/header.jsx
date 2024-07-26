import { useEffect, useRef, useState } from "react";
import images from "../../constants/images";
import TitleCard from "../../utils/TitleCard/TitleCard";
import MiniNavigation from "./MiniNavigation/MiniNavigation";
import styles from "./header.module.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Header({ animeData, animeIdentifier }) {
  const ref = useRef();
  const carouselImage = useRef();
  const [carouselCount, setCarouselCount] = useState(0);

  function nextSlide() {
    setCarouselCount((prev) => ++prev);
  }

  function prevSlide() {
    setCarouselCount((prev) => --prev);
  }

  useEffect(() => {
    const offsetWidth = carouselImage.current.offsetWidth;

    ref.current.style.transform = `translateX(-${
      carouselCount * offsetWidth
    }px)`;
  }, [carouselCount]);
  return (
    <>
      <header className={styles.headerBg}>
        <div className={styles.controls}>
          <button
            className={`${styles.leftControl} ${
              carouselCount === 0 && styles.controlDisabled
            }`}
            onClick={() => prevSlide()}
            disabled={carouselCount === 0}
          >
            <MdKeyboardDoubleArrowLeft className={styles.leftArrow} />
          </button>

          <button
            className={`${styles.rightControl} ${
              animeData.length - 1 === carouselCount && styles.controlDisabled
            }`}
            onClick={() => nextSlide()}
            disabled={animeData.length - 1 === carouselCount}
          >
            <MdKeyboardDoubleArrowRight className={styles.rightArrow} />
          </button>
        </div>
        <div className={styles.carousel} ref={ref}>
          {animeData.map((props, index) => {
            return (
              <div
                className={styles.carouselWrapper}
                key={index}
                ref={carouselImage}
              >
                <div className={styles.contentBg}>
                  <TitleCard {...props} />
                </div>

                <img
                  className={styles.carouselPic}
                  src={props.img}
                  alt={props.title}
                />
              </div>
            );
          })}
        </div>
      </header>
      <MiniNavigation animeIdentifier={animeIdentifier} />
    </>
  );
}

export default Header;
