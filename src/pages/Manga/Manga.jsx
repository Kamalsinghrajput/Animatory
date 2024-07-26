import { useEffect, useState } from "react";
import AnimeCard from "../../components/Header/animeCard";
import styles from "./Manga.module.css";

export default function Manga() {
  const [manga, setManga] = useState();

  async function getMangaData() {
    try {
      const response = await fetch("https://api.jikan.moe/v4/manga");

      const json = await response.json();

      setManga(json.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMangaData();
    console.log(manga);
  }, []);

  return (
    <div className={styles.mangaWrapper}>
      {manga?.map((i) => (
        <AnimeCard
          id={i.mal_id}
          title={i.title}
          url={i.images.jpg.image_url}
          category="manga"
          score={i.score}
        />
      ))}
    </div>
  );
}
