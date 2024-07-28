import styles from "../../components/Header/header.module.css";
import GradientButton from "../GradientButton/GradientButton";
function TitleCard({
  title,
  spotlight,
  tags,
  desc,
  className,
  href,
  isHeader,
  image,
  animeData,
}) {
  const { genres, name } = animeData?.genres || {};
  const { rank, year, type, source, episodes, status, rating} =
    animeData || {};
  console.log(animeData);
  return (
    <div className={`${styles.content} ${className}`}>
      <div>{spotlight}</div>
      <h2 className={styles.titleName}>{title}</h2>

      {isHeader && (
        <div className={styles.titleStats}>
          <img className={styles.animeImage} src={image} alt="" />
          <div className={styles.animeStats}>
            <div>Rank : {rank}</div>
            <div>Year : {year}</div>
            <div>Type : {type}</div>
            <div>Source : {source}</div>
            <div>Episode : {episodes}</div>
            <div>Status : {status}</div>
            <div>Rating : {rating}</div>
            <div>Genres : {genres}</div>
          </div>
        </div>
      )}
      <div className={styles.highlights}>
        {tags.map((item, index) => {
          return (
            <div className={styles.tags} key={index}>
              {item}
            </div>
          );
        })}
      </div>

      
      <GradientButton href={href} />
      <div className={!isHeader && styles.animeDesc}>
      <p >{desc}</p>
      </div>
    </div>
  );
}
export default TitleCard;
