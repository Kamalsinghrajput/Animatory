import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./AnimeDetails.module.css";

const URL = `https://api.jikan.moe/v4/top/anime`;
function AnimeDetails() {
  const [animeData, setAnimeData] = useState();
  const { id } = useParams();
  console.log(id);
  const getData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const json = await response.json();
    setAnimeData(json);
  };

  useEffect(() => {
    getData();
  }, []);
  const { rank, year, type, source, episodes, status, rating } =
    animeData?.data || {};
  return (
    <div>
      <div className={styles.page}>
        <div>
          <img
            className={styles.animeImage}
            src={animeData?.data?.images?.jpg?.image_url}
            alt=""
          />
          <div>
            <div>Rank : {rank}</div>
            <div>Year : {year}</div>
            <div>Type : {type}</div>
            <div>Source : {source}</div>
            <div>Episode : {episodes}</div>
            <div>Status : {status}</div>
            <div>Rating : {rating}</div>
          </div>
        </div>{" "}
        <div>
          <div className={styles.animeDetails}>
            <div className={styles.animeTitle}>{animeData?.data?.title}</div>
            <div className={styles.animeDiscription}>
              {animeData?.data?.synopsis}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trailerWrapper}>
        <iframe
          className={styles.trailer}
          src={`https://youtube.com/embed/${animeData?.data?.trailer?.youtube_id}?autoplay=0`}
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default AnimeDetails;
