import { useState, useEffect } from "react";
import images from "../../constants/images";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const URL = `https://api.jikan.moe/v4/top/anime`;

function Header() {
  const [animeData, setAnimeData] = useState();

  const getData = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    setAnimeData(json);
  };
  useEffect(() => {
    getData();
    //  fetch(URL).then(res=>res.json()).then(res=>console.log(res))
    // console.log(response)
  }, []);
  return (
    <header className={styles.headerBg}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>
            <h1>
              <span>DEMON </span>
              <span>SLAYER</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <div>Favourits</div>
      <ul className={styles.favourites}>
        {["anime-1", "anime-2", "anime-3"].map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}
      <div>Anime you might like!</div>
      <ul className={styles.animeBar}>
        {" "}
        <div className={styles.animeOptions}>
          {["All", "New", "Top", "Hot"].map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
        <div className="search-bar">
          <input className={styles.input} placeholder="Search..." />
        </div>
      </ul>
      <div className={styles.animeCardWrapper}>
        {animeData?.data.map((i) => (
          <Link to={`/anime/${i.mal_id}`} className={styles.animeCard}>
            <img
              className={styles.animeImages}
              src={i.images.jpg.image_url}
              alt=""
            />
            <div className={styles.animeTitle}>{i.title}</div>
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
