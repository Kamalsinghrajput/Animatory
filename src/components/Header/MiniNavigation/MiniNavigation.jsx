import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../animeCard";
import styles from "../header.module.css";
import { BiCategoryAlt } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";

export default function MiniNavigation({ animeIdentifier }) {
  const URL = `https://api.jikan.moe/v4/top/${animeIdentifier}`;

  const [animeData, setAnimeData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setAnimeData(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [_category, setCategory] = useState("");
  const categoryUpdate = (text) => {
    setCategory(text);
    if (text === "Alphabetically") {
      setAnimeData((prev) => {
        return prev?.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      });
    }

    if (text === "Most Popular") {
      setAnimeData((prev) => {
        return prev?.sort((a, b) => {
          return b.score - a.score;
        });
      });
      console.log(animeData);
    }
  };

  useEffect(() => {
    getData();
  }, [animeIdentifier]);
  return (
    <div className={styles.gridSection}>
      <nav className={styles.miniNavBar}>
        <ul className={styles.miniNavList}>
          {[
            {
              title: "Most Popular",
              icon: <FaFireAlt />,
            },
            {
              title: "Alphabetically",
              icon: <BiCategoryAlt />,
            },
          ].map(({ title, icon }, index) => {
            return (
              <li onClick={() => categoryUpdate(title)} key={index}>
                <Link className={styles.miniNavLink}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.animeCardWrapper}>
        {animeData?.map((i) => (
          <AnimeCard
            id={i.mal_id}
            title={i.title}
            url={i.images.jpg.image_url}
            category="anime"
            score={i.score}
            key={i.mal_id}
          />
        ))}
      </div>
    </div>
  );
}
