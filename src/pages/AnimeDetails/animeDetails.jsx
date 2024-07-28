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
  const { rank, year, type, source, episodes, status, rating, synopsis} =
    animeData || {};
  const { genres, name } = animeData?.genres || {};
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <TitleCard
          title={animeData?.title}
          isHeader= {true}
          tags={[`Rank ${rank}`, year, type, "4K"]}
          image={animeData?.images?.jpg?.image_url}
          animeData={animeData}
          desc={synopsis}
        />
     
        
      </div>
    </div>
  );
}

export default AnimeDetails;
