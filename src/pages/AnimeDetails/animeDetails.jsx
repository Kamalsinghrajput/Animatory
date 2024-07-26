import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./animeDetails.module.css";
import GradientButton from "../../utils/GradientButton/GradientButton";
import TitleCard from "../../utils/TitleCard/TitleCard";

const URL = `https://api.jikan.moe/v4/top/anime`;
function AnimeDetails() {
  const [animeData, setAnimeData] = useState();
  const { id, category } = useParams();
  console.log(id);
  const getData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/${category}/${id}`);
    const json = await response.json();
    setAnimeData(json.data);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  useEffect(() => {
    getData();
  }, [id, category]);
  const { rank, year, type, source, episodes, status, rating } =
    animeData || {};
  const { genres, name } = animeData?.genres || {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div>
          <img
            className={styles.animeImage}
            src={animeData?.images?.jpg?.image_url}
            alt=""
          />
        </div>
        <TitleCard
          title={animeData?.title}
          desc={animeData?.synopsis}
          className={styles.titleSection}
          tags={[`Rank ${rank}`, year, type, "4K"]}
          href={animeData?.trailer?.url}
        />

        <div className={styles.verticalLine}></div>

        <div className={styles.animestats}>
          <div>Rank : {rank}</div>
          <div>Year : {year}</div>
          <div>Type : {type}</div>
          <div>Source : {source}</div>
          <div>Episode : {episodes}</div>
          <div>Status : {status}</div>
          <div>Rating : {rating}</div>
          <div>Genres : {genres}</div>
          <div className={styles.horizontalLine}></div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
