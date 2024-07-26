import { Link } from "react-router-dom";
import styles from "./header.module.css";
function AnimeCard({ id, title, url, category, score }) {
  return (
    <Link to={`/${category}/${id}`} className={styles.animeCard}>
      <img className={styles.animeImages} src={url} alt="" />
      <div className={styles.animeTitle}>{`${
        title.length > 15 ? `${title.slice(0, 15)}...` : title
      }`}</div>
      <div className={styles.score}>Rating - {score}</div>
    </Link>
  );
}
export default AnimeCard;
